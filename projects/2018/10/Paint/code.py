from turtle import Screen, Turtle
import sys
from tkinter.colorchooser import askcolor
#############################################################

hilfetext="""HILFETEXT V.1.2

F1         : Hilfe zeigen
Esc        : Hilfe verstecken
Linksklick : Zum angeklicktem Punkt gehen
Mittelklick: Zum angeklicktem Punkt gehen(ohne zeichnen)
Rechtsklick: Füllen
f          : Füllfarbe auswählen
l          : Linienfarbe auswählen
Leertaste  : Alles leeren
Rücktaste  : Zurück(undo)
"""

#############################################################

s= Screen()
s.setup(800,600)
s.title("PAINT Hilfe:F1")
stift= Turtle()
fuellanzeiger=Turtle()
fuellanzeiger.shape("circle")
sys.setrecursionlimit(2000000)
stift.speed(0)
stift.shape('circle')
fuellfarbe="white"
stift.fillcolor("white")

###########################################################
    
def gehen(objekt,x,y):
    s.tracer(False)
    objekt.penup()
    objekt.goto(x, y)
    objekt.pendown()
    s.tracer(True)


    
def rightfill(x, y):
    if stift.filling()==False:
        stift.begin_fill()
        
    else:
        stift.end_fill()
        stift.fillcolor("")
        fuellanzeiger.fillcolor("")

def middlejump(x, y):
    if x>-300:
        s.tracer(False)
        stift.penup()
        stift.goto(x, y)
        stift.pendown()
        s.tracer(True)

def left_click(x,y):
    if x>-300:
        s.tracer(False)
        stift.goto(x,y)
        s.tracer(True)

def left_drag(x,y):
    if x>-300:
        s.tracer(False)
        stift.goto(x,y)
        s.tracer(True)

def reset_event():
    stift.clear()
    middlejump(0,0)

def askcolor_fillcolor():
    hex_number=askcolor()[1]
    if hex_number != None:
        stift.fillcolor(hex_number)
        stift.begin_fill()
        fuellanzeiger.fillcolor(hex_number)

def askcolor_pencolor():
    hex_number=askcolor()[1]
    if hex_number != None:
        stift.pencolor(hex_number)
        
for c in "123456789":
    def sizemodi(zah=int(c)):
        stift.shapesize(zah/1.5)
        stift.pensize(zah)
    s.onkeypress(sizemodi,c)

####################################################

for (farbe,ypos) in (("red",160),("green",120),("blue",80),("yellow",40),("cyan",0),("magenta",-40),("black",-80),("white",-120)):
    def button(farbe,pos):
        def füllen(x,y):
            fuellanzeiger.fillcolor(farbe)
            stift.fillcolor(farbe)
        def zeichnen(x,y):
            stift.pencolor(farbe)
        name=farbe+"_turtle"
        name=Turtle()
        gehen(name,-360,ypos)
        name.shape("square")
        name.fillcolor(farbe)
        name.onclick(füllen,3)
        name.onclick(zeichnen,1)
    button(farbe,ypos)

gehen(fuellanzeiger,-360,-160)
   
####################################################hilfe

hilfe=Turtle(shape="square",visible=False)
hilfe.fillcolor("lime")
hilfe.pu()
hilfe.speed(0)
hilfe.shapesize(35,30,1)
hilfe.goto(0,0)
def show_hilfetext():
    s.title("PAINT")
    hilfe.stamp()
    hilfe.goto(0,-220)#220
    hilfe.pencolor("white")
    hilfe.write(hilfetext,align="center",font=("Segoe Print",15,"bold"))
def hide_hilfetext():
    s.title("PAINT Hilfe:F1")
    hilfe.clear()
    hilfe.home()
    
###################################################
    
def save_picture():
    ts = stift.getscreen()
    ts.getcanvas().postscript(file="painting_paint_2018.eps")


####################################################
s.onclick(left_click, 1)
stift.ondrag(left_drag, 1)
s.onclick(middlejump, 2)
s.onclick(rightfill, 3)
s.onkeypress(reset_event,"space")
s.onkeypress(stift.undo,"BackSpace")
s.onkeypress(askcolor_fillcolor,"f")
s.onkeypress(askcolor_pencolor,"l")
s.onkeypress(show_hilfetext,"F1")
s.onkeypress(hide_hilfetext,"Escape")
s.onkeypress(save_picture,"s")
s.listen()
