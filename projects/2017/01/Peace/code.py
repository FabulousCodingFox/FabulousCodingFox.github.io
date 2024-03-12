
from turtle import *
from random import *

speed(0)

GRAU = (0.3, 0.3, 0.3)         

def quadrat(seite, fuellfarbe, winkel):
    fillcolor(fuellfarbe)
    begin_fill()
    fd(seite)
    rt(winkel)
    fd(seite)
    rt(winkel)
    fd(seite)
    rt(winkel)
    fd(seite)
    end_fill()

def sektor(radius, winkel, fuellfarbe):
    rt(45)
    fillcolor(fuellfarbe)
    begin_fill()
    forward(radius)
    left(90)
    circle(radius,winkel)
    left(90)
    forward(radius)
    left(180-winkel)
    end_fill()
    home()
    rt(90)

def minisektor(radius, winkel, fuellfarbe):
    fillcolor(fuellfarbe)
    begin_fill()
    rt(90)
    fd(groesse*0.5)
    rt(90)
    circle(radius,winkel)
    home()
    rt(90)
    end_fill()

def sektor2(radius, winkel, fuellfarbe):
    fillcolor(fuellfarbe)
    begin_fill()
    lt(90)
    fd(groesse*0.5)
    rt(90)
    circle(radius, winkel)
    home()
    rt(90)
    end_fill()

def drei_farbparameter():
    global a
    global b
    global c
    a = choice(farbliste)
    b = choice(farbliste)
    c = choice(farbliste)
    a=float(a)
    b=float(b)
    c=float(c)

def erzeuge8zuff():
    global zuff1
    global zuff2
    global zuff3
    global zuff4
    global zuff5
    global zuff6
    global zuff7
    global zuff8
    drei_farbparameter()
    zuff1 = (a,b,c)
    drei_farbparameter()
    zuff2 = (a,b,c)
    drei_farbparameter()
    zuff3 = (a,b,c)
    drei_farbparameter()
    zuff4 = (a,b,c)
    drei_farbparameter()
    zuff5 = (a,b,c)
    drei_farbparameter()
    zuff6 = (a,b,c)
    drei_farbparameter()
    zuff7 = (a,b,c)
    drei_farbparameter()
    zuff8 = (a,b,c)
    
    
    
















    
def peace_logo():
    erzeuge8zuff()
    quadrat(groesse*0.5, zuff1, 90)
    quadrat(groesse*0.5, zuff2, -90)
    quadrat(groesse*0.5, zuff2, -90)
    quadrat(groesse*0.5, zuff4, 90)
    sektor(groesse*0.5, 270, zuff5)
    minisektor(-groesse*0.5, 45, zuff6)
    minisektor(-groesse*0.5, -45, zuff7)
    sektor2(-groesse*0.5, 135, zuff8)
    
    
farbstring="""1.0
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0.0"""
farbliste=farbstring.split()

pencolor(GRAU)
pensize(5)


groesse = numinput("Größe", "Welche Größe?")
rt(90)
peace_logo()
ht()

