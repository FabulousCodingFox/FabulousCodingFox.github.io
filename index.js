let draggedTaskBarIcon = null;
let draggedTaskBarIconIndex = null;
let taskBar = document.querySelector('#taskbar-apps');

function taskBarAppHandleDragStart(event) {
    const el = event.currentTarget;

    el.classList.add('dragged');
    taskBar.classList.remove('static');

    draggedTaskBarIconIndex = Number(getComputedStyle(el).getPropertyValue('--index'));

    const move = (event) => {
        let btnSize = 50;
        let maxAmount = Number(getComputedStyle(taskBar).getPropertyValue('--app-amount'));

        let newDraggedTaskBarIconIndex = Math.floor((event.clientX - taskBar.getBoundingClientRect().left) / btnSize);
        let draggedTaskBarIconOffset = (-((taskBar.getBoundingClientRect().left + (newDraggedTaskBarIconIndex * btnSize)) - event.clientX) / btnSize) - 0.5;
        if (newDraggedTaskBarIconIndex < 0 || (newDraggedTaskBarIconIndex == 0 && draggedTaskBarIconOffset < 0)) draggedTaskBarIconOffset = 0;
        if (newDraggedTaskBarIconIndex > maxAmount - 1 || (newDraggedTaskBarIconIndex == maxAmount - 1 && draggedTaskBarIconOffset > 0)) draggedTaskBarIconOffset = 0;
        el.style.setProperty('--offset', draggedTaskBarIconOffset);

        if (newDraggedTaskBarIconIndex != draggedTaskBarIconIndex) {
            el.style.setProperty('--index', Math.min(maxAmount - 1, Math.max(0, newDraggedTaskBarIconIndex)));
            //Rebuild all indexes
            let icons = [...taskBar.children];
            //Remove the dragged item from the list
            for (let i = 0; i < icons.length; i++) {
                if (icons[i] === el) {
                    icons.splice(i, 1);
                }
            }
            icons.sort((a, b) => {
                let aIndex = Number(getComputedStyle(a).getPropertyValue('--index'));
                let bIndex = Number(getComputedStyle(b).getPropertyValue('--index'));
                return aIndex - bIndex;
            });
            let i = -1;
            icons.splice(Math.min(maxAmount - 1, Math.max(0, newDraggedTaskBarIconIndex)), 0, el)
            for (let icon of icons) {
                i++;
                if (icon === el) continue;
                icon.style.setProperty('--index', i);
            }

            draggedTaskBarIconIndex = newDraggedTaskBarIconIndex;
        }
    };

    const up = () => {
        removeEventListener("pointermove", move);
        removeEventListener("pointerup", up);
        el.style.setProperty('--offset', "0");
        el.classList.remove('dragged');
        taskBar.classList.add('static');
    };

    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
}

for (let taskBarIcon of taskBar.children) {
    taskBarIcon.addEventListener('pointerdown', (event) => {
        taskBarAppHandleDragStart(event);
    });
}
















































function loadwindowtext(btn, id) {
    let elements = btn.parentElement.parentElement.parentElement.getElementsByClassName("details");
    Array.from(elements).forEach(function (item, index) {
        if (item.classList.contains(id)) {
            item.style.display = "initial";
        } else {
            item.style.display = "none";
        }
    });
}

function windowBuilder(img, title, content) {
    return /*html*/`

    <div class="window-container" style="--w: 1048px; --h: 700px; --window-border-radius: 20px;">
        <div class="fwrapper window-inner-wrapper">
            <div class="window-border"></div>
            <div class="window-pane">
                <div class="fwrapper">

                    <div class="topbar">
                        <div class="title">
                        <img src="${img}">
                            <p>${title}</p>
                        </div>
                        <div class="controls">
                            <button class="min"><img src="assets/icons/minus.svg"></button>
                            <button class="max"><img src="assets/icons/square-rounded.svg"></button>
                            <button class="close"><img src="assets/icons/x-circle.svg"></button>
                        </div>
                    </div>

                    <div class="content-pane">
                        ${content}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    `;
}




function last(array) {
    return array[array.length - 1];
}



const windowGithub = /*html*/`
<h1 align="center">Hi <span class="wave">👋</span>, I am FabulousFox</h1>
<h3 align="center">I mostly code useless stuff</h3>
<p align="center">(<a href="https://github.com/FabulousCodingFox" target="_blank">https://github.com/FabulousCodingFox</a> || <a href="https://fabulouscodingfox.github.io/" target="_blank">https://fabulouscodingfox.github.io/</a>)</p>
<hr>
`


let windowY = 1000;

let dragged;
let resized;
let resizedSide;

let mouseX = 0;
let mouseY = 0;

var colorscheme = "dark"

class Window {
    constructor(content) {
        var root = this;

        let width = 0.6 * (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
        let height = 0.8 * (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);

        this.windowWidth = width;
        this.windowHeight = height;
        this.windowPosX = window.innerWidth / 2 - width / 2;
        this.windowPosY = window.innerHeight / 2 - height / 2;
        this.isMaxximized = false
        this.isMinimized = false

        this.windowContent = content;
        document.querySelector("body").insertAdjacentHTML('beforeend', this.windowContent);

        this.parentWindowContainerElement = last(document.querySelector("body").getElementsByClassName("window-container"));
        this.windowBorderElement = this.parentWindowContainerElement.querySelector(".window-border");
        this.windowPaneElement = this.parentWindowContainerElement.querySelector(".window-pane");
        this.windowContentPaneElement = this.windowPaneElement.querySelector(".content-pane");

        this.windowTopbarElement = this.windowPaneElement.querySelector(".topbar");
        this.windowTopbarCloseButtonElement = this.windowTopbarElement.querySelector(".close");
        this.windowTopbarMaximizeButtonElement = this.windowTopbarElement.querySelector(".max");
        this.windowTopbarMinimizeButtonElement = this.windowTopbarElement.querySelector(".min");

        this.parentWindowContainerElement.style.transform = "translate(" + this.windowPosX + "px, " + this.windowPosY + "px)";
        this.wd.style.setProperty('--w', width + "px");
        this.wd.style.setProperty('--h', height + "px");
        this.wd.style.setProperty('--window-border-radius', "20px")
        this.parentWindowContainerElement.style.cursor = "nwse-resize"

        this.layer = windowY
        this.wd.style.zIndex = windowY;
        windowY++;

        this.mouseHoversOnContent = false;

        //Resize Window
        this.windowContent.onmouseenter = function () {
            root.mouseHoversOnContent = true;
        };
        this.windowContent.onmouseleave = function () {
            root.mouseHoversOnContent = false;
        }
        this.windowElement.addEventListener("mousemove", (event) => {
            if (resized != undefined) return;
            if (this.mouseHoversOnContent) return;

            let r = this.windowElement.getBoundingClientRect();

            let n = Math.abs(r.top - mouseY) <= 20
            let s = Math.abs(r.bottom - mouseY) <= 20
            let w = Math.abs(r.left - mouseX) <= 20
            let e = Math.abs(r.right - mouseX) <= 20

            if (n && e) { resizedSide = "ne"; this.windowElement.style.cursor = "nesw-resize" }
            else if (n && w) { resizedSide = "nw"; this.windowElement.style.cursor = "nwse-resize" }
            else if (n) { resizedSide = "n"; this.windowElement.style.cursor = "ns-resize" }
            else if (s && e) { resizedSide = "se"; this.windowElement.style.cursor = "nwse-resize" }
            else if (s && w) { resizedSide = "sw"; this.windowElement.style.cursor = "nesw-resize" }
            else if (s) { resizedSide = "s"; this.windowElement.style.cursor = "ns-resize" }
            else if (w) { resizedSide = "w"; this.windowElement.style.cursor = "ew-resize" }
            else if (e) { resizedSide = "e"; this.windowElement.style.cursor = "ew-resize" }
            else { resizedSide = "NONE"; }
        });
        this.windowElement.addEventListener("mousedown", (event) => {
            if (this.mouseHoversOnContent) return;
            resized = root;
        });

        //Maximize window
        this.topbar.ondblclick = () => {
            this.setMaxximized(!this.isMaxximized);
        };

        this.maxbtn.onclick = () => {
            this.setMaxximized(!this.isMaxximized);
        };

        //Close window
        this.closebtn.onclick = () => {
            this.wd.style.opacity = '0%';
            const temp = this.wd;
            setTimeout(function () { temp.remove(); }, 500);
        };
        this.minbtn.onclick = () => {
            this.wd.style.opacity = '0%';
            const temp = this.wd;
            setTimeout(function () { temp.remove(); }, 500);
        };

        //Focus Window
        this.wd.addEventListener("mousedown", (event) => {
            if (this.wd.style.zIndex == windowY - 1) return;
            this.wd.style.zIndex = windowY;

            /*this.wd.classList.remove('windowAppear');
            void this.wd.offsetWidth;
            this.wd.classList.add('windowAppear'); */

            windowY++;
        });

        //Move window
        this.topbar.addEventListener("mousedown", (event) => {
            if (resized != undefined) return;
            dragged = this;
            //wd.classList.remove('windowAppear');
        });
    }

    setMaxximized(m) {
        if (!m) {
            this.wd.style.left = this.windowPosX + "px";
            this.wd.style.top = this.windowPosY + "px";
            this.wd.style.setProperty('--w', this.windowWidth + "px");
            this.wd.style.setProperty('--h', this.windowHeight + "px");
            this.wd.style.setProperty('--window-border-radius', "20px")
        } else {
            this.wd.style.left = "0px";
            this.wd.style.top = "0px";
            this.wd.style.setProperty('--w', window.innerWidth + "px");
            this.wd.style.setProperty('--h', window.innerHeight + "px");
            this.wd.style.setProperty('--window-border-radius', "0px")
        }
        this.isMaxximized = m;
    }

    setPos(x, y) {
        this.windowPosX = x;
        this.windowPosY = y;
        this.wd.style.left = this.windowPosX + "px";
        this.wd.style.top = this.windowPosY + "px";
    }

    setDimensions(w, h) {
        this.windowWidth = w;
        this.windowHeight = h;
        this.wd.style.setProperty('--w', w + "px");
        this.wd.style.setProperty('--h', h + "px");
    }
}

document.addEventListener("mouseup", (event) => {
    dragged = undefined;
    resized = undefined;
});

document.addEventListener("mousemove", (event) => {
    let offX = event.clientX - mouseX;
    let offY = event.clientY - mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (dragged != undefined) {
        if (dragged.isMaxximized) {
            dragged.setMaxximized(false);
            dragged.setPos(event.clientX - dragged.windowWidth / 2, event.clientY - 20);
        }
        let currX = dragged.windowPosX;
        let currY = dragged.windowPosY;
        dragged.setPos(currX + offX, currY + offY)
    }

    if (resized != undefined) {
        let currX = resized.windowPosX;
        let currY = resized.windowPosY;
        let currW = resized.windowWidth;
        let currH = resized.windowHeight;

        if (resizedSide === "ne") {
            resized.setPos(currX, currY + offY)
            resized.setDimensions(currW + offX, currH - offY)
        }
        if (resizedSide === "nw") {
            resized.setPos(currX + offX, currY + offY)
            resized.setDimensions(currW - offX, currH - offY)
        }
        if (resizedSide === "n") {
            resized.setPos(currX, currY + offY)
            resized.setDimensions(currW, currH - offY)
        }
        if (resizedSide === "se") {
            resized.setDimensions(currW + offX, currH + offY)
        }
        if (resizedSide === "sw") {
            resized.setPos(currX + offX, currY)
            resized.setDimensions(currW - offX, currH + offY)
        }
        if (resizedSide === "s") {
            resized.setDimensions(currW, currH + offY)
        }
        if (resizedSide === "w") {
            resized.setPos(currX + offX, currY)
            resized.setDimensions(currW - offX, currH)
        }
        if (resizedSide === "e") {
            resized.setDimensions(currW + offX, currH)
        }
    }
});

function spawnWindow(content) {
    new Window(content);
}