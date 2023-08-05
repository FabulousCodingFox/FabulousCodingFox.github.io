var dragged_taskbar_icon_index = null
var dragged_taskbar_icon_offset = null
var taskbar = document.querySelector('#taskbar-apps')

function rebuildTaskBar() {
    let icons = [...taskbar.children];
    icons.sort((a, b) => {
        let aIndex = Number(getComputedStyle(a).getPropertyValue('--index'));
        let bIndex = Number(getComputedStyle(b).getPropertyValue('--index'));
        return aIndex - bIndex;
    });
    let i = -1;
    for (let icon of icons) {
        i++;
        icon.style.setProperty('--index', i);
    }

    windows.forEach((window) => {
        window.prevTaskBarIconIndex = Number(getComputedStyle(window.taskBarIcon).getPropertyValue('--index'));
    });
}

function taskBarAppHandleDragStart(event) {
    const el = event.currentTarget;

    el.classList.add('dragged');
    taskbar.classList.remove('static');
    taskbar.classList.add('nonstatic');

    dragged_taskbar_icon_index = Number(getComputedStyle(el).getPropertyValue('--index'));
    dragged_taskbar_icon_offset = Math.abs(event.clientX - el.getBoundingClientRect().left);

    const move = (event) => {
        let btnSize = el.getBoundingClientRect().width;
        let maxAmount = Number(getComputedStyle(taskbar).getPropertyValue('--app-amount'));

        let new_dragged_taskbar_icon_center_x = (event.clientX - taskbar.getBoundingClientRect().left) - dragged_taskbar_icon_offset + (btnSize / 2);
        let new_dragged_taskbar_icon_index = Math.round((new_dragged_taskbar_icon_center_x - btnSize * 0.5) / btnSize)
        let new_dragged_taskbar_icon_offset_x = (new_dragged_taskbar_icon_center_x - new_dragged_taskbar_icon_index * btnSize - 0.5 * btnSize) / btnSize;

        if (new_dragged_taskbar_icon_index < 0 || (new_dragged_taskbar_icon_offset_x == 0 && new_dragged_taskbar_icon_offset_x < 0)) new_dragged_taskbar_icon_offset_x = 0;
        if (new_dragged_taskbar_icon_index > maxAmount - 1 || (new_dragged_taskbar_icon_index == maxAmount - 1 && new_dragged_taskbar_icon_offset_x > 0)) new_dragged_taskbar_icon_offset_x = 0;
        el.style.setProperty('--offset', new_dragged_taskbar_icon_offset_x);

        if (new_dragged_taskbar_icon_index != dragged_taskbar_icon_index) {
            el.style.setProperty('--index', Math.min(maxAmount - 1, Math.max(0, new_dragged_taskbar_icon_index)));
            //Rebuild all indexes
            let icons = [...taskbar.children];
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
            icons.splice(Math.min(maxAmount - 1, Math.max(0, new_dragged_taskbar_icon_index)), 0, el)
            for (let icon of icons) {
                i++;
                if (icon === el) continue;
                icon.style.setProperty('--index', i);
            }

            dragged_taskbar_icon_index = new_dragged_taskbar_icon_index;
        }
    };

    const up = () => {
        removeEventListener("pointermove", move);
        removeEventListener("pointerup", up);
        el.style.setProperty('--offset', "0");
        el.classList.remove('dragged');
        taskbar.classList.remove('nonstatic');
        taskbar.classList.add('static');
    };

    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
}

for (let taskBarIcon of taskbar.children) {
    taskBarIcon.addEventListener('pointerdown', (event) => {
        taskBarAppHandleDragStart(event);
    });
}








var desktopSelectionSquareStartX = 0;
var desktopSelectionSquareStartY = 0;
var isDesktopSelectionSquareActive = false;
var desktopPaneElement = document.getElementById("desktopInsertContainer");
var desktopSelectionSquareElement = document.getElementById("desktopSelectionSquare");

desktopPaneElement.addEventListener("mousedown", (event) => {
    if (event.target !== desktopPaneElement) return;
    desktopSelectionSquareStartX = event.clientX;
    desktopSelectionSquareStartY = event.clientY;
    desktopSelectionSquareElement.style.left = desktopSelectionSquareStartX + "px";
    desktopSelectionSquareElement.style.top = desktopSelectionSquareStartY + "px";
    desktopSelectionSquareElement.style.width = "0px";
    desktopSelectionSquareElement.style.height = "0px";
    isDesktopSelectionSquareActive = true;
    desktopSelectionSquareElement.style.display = "block";
});


























































var desktopGridSizeX = 16;
var desktopGridSizeY = 10;
desktopPaneElement.style.setProperty('--sx', desktopGridSizeX);
desktopPaneElement.style.setProperty('--sy', desktopGridSizeY); 








































































function openWindow(type, icon) {
    let window = windowBuilder(type);
    windows.push(new Window(window, icon));
}

function windowBuilder(type) {
    let d ={
        'img': 'assets/icons/github.png',
        'title': 'Github',
        'content': /*html*/`
            <h1 align="center">Hi <span class="wave">👋</span>, I am FabulousFox</h1>
            <h3 align="center">I mostly code useless stuff</h3>
            <p align="center">(<a target="_blank" href="https://github.com/FabulousCodingFox">https://github.com/FabulousCodingFox</a> || <a href="javscript:void(0)">https://fabulouscodingfox.github.io/</a>)</p>
            
            <hr>

            <h3> 💻 <b>Programming Languages</b></h3>
            <ul>
                <li>☕Java</li>
                <li>🐀C++</li>
                <li>🐍Python</li>
                <li>🟨Javascript</li>
            </ul>

            <hr>
        
            <h3> 🚀 <b>APIs/Frameworks/Methods</b></h3>
            <ul>
                <li>🧮Databases: SQL</li>
                <li>📜Web: Html/Css, Js/Ts, Bootstrap</li>
                <li>⚡API: FastAPI, Flask</li>
                <li>📗Minecraft: Bukkit/Spigot/Paper, Datapacks</li>
                <li>👾Graphics: Pygame, (Modern OpenGL), Vulkan</li>
            </ul>

            <hr>

            <h3> 📫 <b>Contact</b></h3>
            <ul>
                <li>💬Discord: FabulousFox#9057</li>
            </ul>

            <hr>

            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=FabulousCodingFox&show_icons=true&locale=en&langs_count=10&theme=dracula" alt="FabulousCodingFox" />
            <img src="https://github-readme-stats.vercel.app/api?username=FabulousCodingFox&show_icons=true&locale=en&theme=dracula" alt="FabulousCodingFox" />
        `
    };

    let width = 0.6 * (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
    let height = 0.8 * (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);

    let windowPosX = window.innerWidth / 2 - width / 2;
    let windowPosY = window.innerHeight / 2 - height / 2;

    return /*html*/`<div class="window-container" style="--x: ${windowPosX}px; --y: ${windowPosY}px; --w: ${width}px; --h: ${height}px; --window-border-radius-mul: 1;">
        <div class="full rel arraydown">
            <div class="layerBgFilter full rel noInteract">
            </div>
            <div style="transform: translateY(-100%);" class="layerBackground full rel noInteract">
            </div>
            <div style="transform: translateY(-200%);" class="layerContent full rel noInteract">
                <div class="layerContent-content interact">
                    ${d["content"]}
                </div>
            </div>
            <div style="transform: translateY(-300%);" class="layerTopBar full rel noInteract">
                <div class="layerTopBar-topbar interact">
                    <img class="logo" src="${d["img"]}">
                    <div>${d["title"]}</div>
                    <span></span>
                </div>
            </div>
            <div style="transform: translateY(-400%);" class="layerTopBarButtons full rel noInteract">
                <div class="layerTopBarButtons-topbar interactNoSelect">
                    <div style="height: 100%">
                        <button class="rel nopad min"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 11h14v2H5z"></path></svg></button></button>
                        <button class="rel nopad max"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm3 15c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v10z"></path></svg></button></button>
                        <button class="rel nopad close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg></button>
                    </div>
                </div>
            </div>
            <div style="transform: translateY(-500%);" class="layerBorder full rel noInteract">
                <div class="layerBorder-border full interactNoSelect"></div>
            </div>
        </div>
    </div>`;
}













































function last(array) {
    return array[array.length - 1];
}

let windowY = 90000;

let dragged;
let resized;
let resizedSide;

let mouseX = 0;
let mouseY = 0;

let windowMinWidth = 450;
let windowMinHeight = 200;

let windows = [];

class Window {
    constructor(content, predefinedTaskBarIcon) {
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
        document.querySelector("#windowInsertContainer").insertAdjacentHTML('beforeend', this.windowContent);

        this.windowContainerElement = last(document.querySelector("body").getElementsByClassName("window-container"));
        this.windowTopbarElement = this.windowContainerElement.querySelector(".layerTopBar-topbar");
        this.windowTopbarButtonsElement = this.windowContainerElement.querySelector(".layerTopBarButtons-topbar");
        this.windowTopbarCloseButtonElement = this.windowTopbarButtonsElement.querySelector(".close");
        this.windowTopbarMaximizeButtonElement = this.windowTopbarButtonsElement.querySelector(".max");
        this.windowTopbarMinimizeButtonElement = this.windowTopbarButtonsElement.querySelector(".min");
        this.windowBorderElement = this.windowContainerElement.querySelector(".layerBorder-border");

        this.windowContainerElement.style.setProperty('--w', this.windowWidth + "px");
        this.windowContainerElement.style.setProperty('--h', this.windowHeight + "px");
        this.windowContainerElement.style.setProperty('--x', this.windowPosX + "px");
        this.windowContainerElement.style.setProperty('--y', this.windowPosY + "px");
        this.windowContainerElement.style.setProperty('--window-border-radius-mul', "1")
        this.windowBorderElement.style.cursor = "nwse-resize"

        this.layer = windowY
        this.windowContainerElement.style.zIndex = windowY;
        windowY++;

        this.mouseHoversOnContent = false;

        let taskbar_wrapper = document.getElementById("taskbar-apps");
        let taskbar_amount = Number(getComputedStyle(taskbar_wrapper).getPropertyValue("--app-amount"));
        if (predefinedTaskBarIcon == null) {
            let logo = this.windowTopbarElement.querySelector(".logo").src;
            let cont = `<button class="rel interactNoSelect nopad open active" style="--index: ${taskbar_amount}; --offset: 0"><div class="full rel flexcenter"><span></span><img class="nointeract" src="${logo}"></div></button>`
            taskbar_wrapper.insertAdjacentHTML('beforeend', cont);
            taskbar_wrapper.style.setProperty("--app-amount", taskbar_amount + 1);
            this.taskBarIcon = last(taskbar_wrapper.children);
        } else {
            this.taskBarIcon = predefinedTaskBarIcon;
            this.taskBarIcon.classList.add("open");
            this.taskBarIcon.classList.add("active");
        }

        this.taskBarIcon.addEventListener('pointerdown', (event) => {
            taskBarAppHandleDragStart(event);
        });

        this.prevTaskBarIconIndex = taskbar_amount;

        this.setTaskbarActive();

        //Resize Window
        //this.windowPaneElement.onmouseenter = function () {
        //    root.mouseHoversOnContent = true;
        //};
        //this.windowPaneElement.onmouseleave = function () {
        //    root.mouseHoversOnContent = false;
        //}
        this.mouseHoversOnContent = false;
        this.windowContainerElement.addEventListener("mousemove", (event) => {
            if (resized != undefined) return;
            if (this.mouseHoversOnContent) return;

            let r = this.windowContainerElement.getBoundingClientRect();

            let n = Math.abs(r.top - mouseY) <= 20
            let s = Math.abs(r.bottom - mouseY) <= 20
            let w = Math.abs(r.left - mouseX) <= 20
            let e = Math.abs(r.right - mouseX) <= 20

            if (n && e) { resizedSide = "ne"; this.windowBorderElement.style.cursor = "nesw-resize" }
            else if (n && w) { resizedSide = "nw"; this.windowBorderElement.style.cursor = "nwse-resize" }
            else if (n) { resizedSide = "n"; this.windowBorderElement.style.cursor = "ns-resize" }
            else if (s && e) { resizedSide = "se"; this.windowBorderElement.style.cursor = "nwse-resize" }
            else if (s && w) { resizedSide = "sw"; this.windowBorderElement.style.cursor = "nesw-resize" }
            else if (s) { resizedSide = "s"; this.windowBorderElement.style.cursor = "ns-resize" }
            else if (w) { resizedSide = "w"; this.windowBorderElement.style.cursor = "ew-resize" }
            else if (e) { resizedSide = "e"; this.windowBorderElement.style.cursor = "ew-resize" }
            else { resizedSide = "NONE"; }
        });

        this.windowContainerElement.addEventListener("mousedown", (event) => {
            if (this.mouseHoversOnContent) return;
            resized = root;
        });

        //Maximize window
        this.windowTopbarElement.ondblclick = () => {
            this.setMaxximized(!this.isMaxximized);
        };

        this.windowTopbarMaximizeButtonElement.onclick = () => {
            this.setMaxximized(!this.isMaxximized);
        };
        
        this.windowTopbarMinimizeButtonElement.onclick = () => {
            this.setMinimized(true)
        };
        
        this.windowTopbarCloseButtonElement.onclick = () => {
            this.remove();
        };
        //Focus Window
        this.windowContainerElement.addEventListener("mousedown", (event) => {
            this.setWindowActive();
            this.setTaskbarActive();
        });

        //Focus taskbar
        this.taskBarIcon.addEventListener("mouseup", (event) => {
            if (this.prevTaskBarIconIndex !== Number(getComputedStyle(this.taskBarIcon).getPropertyValue("--index"))) {
                this.prevTaskBarIconIndex = Number(getComputedStyle(this.taskBarIcon).getPropertyValue("--index"));
                return;
            }

            if (this.taskBarIcon.classList.contains("active")) {
                this.setMinimized(true);
            }
            else if (this.isMinimized) {
                this.setMinimized(false);
            } else {
                this.setWindowActive();
                this.setTaskbarActive();
            }
        });

        //Move window
        this.windowTopbarElement.addEventListener("mousedown", (event) => {
            if (resized != undefined) return;
            dragged = this;
            //wd.classList.remove('windowAppear');
        });
    }

    setMaxximized(m) {
        if (!m) {
            this.windowContainerElement.style.setProperty('--x', this.windowPosX + "px");
            this.windowContainerElement.style.setProperty('--y', this.windowPosY + "px");
            this.windowContainerElement.style.setProperty('--w', this.windowWidth + "px");
            this.windowContainerElement.style.setProperty('--h', this.windowHeight + "px");
            this.windowContainerElement.style.setProperty('--window-border-radius-mul', "1")
        } else {
            this.windowContainerElement.style.setProperty('--x', "0px");
            this.windowContainerElement.style.setProperty('--y', "0px");
            this.windowContainerElement.style.setProperty('--w', "100vw");
            this.windowContainerElement.style.setProperty('--h', "calc(100vh - var(--taskbar-height))");
            this.windowContainerElement.style.setProperty('--window-border-radius-mul', "0")
        }
        this.isMaxximized = m;
    }

    setMinimized(m) {
        if (m) {
            this.windowContainerElement.classList.remove("playback_windowMinimizeAnimation_backwards");
            void this.windowContainerElement.offsetWidth;
            this.windowContainerElement.classList.add("playback_windowMinimizeAnimation_forwards");

            this.taskBarIcon.classList.remove("active");

            let btnIcon = this.taskBarIcon.querySelector("img");
            btnIcon.classList.remove("playback_taskbarIconBounceUp")
            void btnIcon.offsetWidth;
            btnIcon.classList.add("playback_taskbarIconBounceDown")
        } else {
            this.windowContainerElement.classList.remove("playback_windowMinimizeAnimation_forwards");
            void this.windowContainerElement.offsetWidth;
            this.windowContainerElement.classList.add("playback_windowMinimizeAnimation_backwards");
            void this.windowContainerElement.offsetWidth;
            this.setWindowActive();
            this.setTaskbarActive();

            let btnIcon = this.taskBarIcon.querySelector("img");
            btnIcon.classList.remove("playback_taskbarIconBounceDown")
            void btnIcon.offsetWidth;
            btnIcon.classList.add("playback_taskbarIconBounceUp")
        }
        this.isMinimized = m;
    }

    setPos(x, y) {
        if (resized != this || this.windowWidth > windowMinWidth) {
            this.windowPosX = x;
            this.windowContainerElement.style.setProperty('--x', this.windowPosX + "px");
        }
        if (resized != this || this.windowHeight > windowMinHeight) {
            this.windowPosY = y;
            this.windowContainerElement.style.setProperty('--y', this.windowPosY + "px");
        }
    }

    setDimensions(w, h) {
        this.windowWidth = w;
        this.windowHeight = h;
        this.windowContainerElement.style.setProperty('--w', Math.max(windowMinWidth, w) + "px");
        this.windowContainerElement.style.setProperty('--h', Math.max(windowMinHeight, h) + "px");
    }

    remove() {
        this.windowContainerElement.style.opacity = '0%';
        if (!this.taskBarIcon.classList.contains("persistent")) {
            let t = document.getElementById("taskbar-apps");
            this.taskBarIcon.remove();
            rebuildTaskBar();
            t.style.setProperty('--app-amount', Number(getComputedStyle(t).getPropertyValue("--app-amount")) - 1);
        } else {
            this.taskBarIcon.classList.remove("open");
            this.taskBarIcon.classList.remove("active");
        }

        const temp = this.windowContainerElement;
        temp.classList.add("playback_windowCloseAnimation_forwards");
        setTimeout(() => { temp.remove(); }, 300);
    }

    setTaskbarActive() {
        document.getElementById("taskbar-apps").querySelectorAll(".open").forEach((e) => {
            e.classList.remove("active");
        });
        this.taskBarIcon.classList.add("active");
    }

    setWindowActive() {
        if (this.windowContainerElement.style.zIndex == windowY - 1) return;
        this.windowContainerElement.style.zIndex = windowY;
        windowY++;
    }
}

document.addEventListener("mouseup", (event) => {
    if (resized != undefined) {
        if (resized.windowWidth < windowMinWidth) resized.setDimensions(windowMinWidth, resized.windowHeight);
        if (resized.windowHeight < windowMinHeight) resized.setDimensions(resized.windowWidth, windowMinHeight);
    }

    if(isDesktopSelectionSquareActive){
        isDesktopSelectionSquareActive = false;
        desktopSelectionSquareStartX = 0;
        desktopSelectionSquareStartY = 0;
        desktopSelectionSquareElement.style.display = "none";
    }

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

    if(isDesktopSelectionSquareActive){
        desktopSelectionSquareElement.style.left = Math.min(desktopSelectionSquareStartX, event.clientX) + "px";
        desktopSelectionSquareElement.style.top = Math.min(desktopSelectionSquareStartY, event.clientY) + "px";
        desktopSelectionSquareElement.style.width = Math.abs(desktopSelectionSquareStartX - event.clientX) + "px";
        desktopSelectionSquareElement.style.height = Math.abs(desktopSelectionSquareStartY - event.clientY) + "px";
    }
});

openWindow("github", null)