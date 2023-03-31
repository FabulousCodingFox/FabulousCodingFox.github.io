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



















function startmenu_search_ontype() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("startmenu-search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("startmenu-search-list");
    li = ul.querySelectorAll("button");
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function startmenu_toggle() {
    let element = document.getElementById("startmenu");
    if (element.style.display == "none" || element.style.display == "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


















const THEME = {
    DARK: 'DARK'
};

const WINDOWTYPE = {
    GITHUB: 'GITHUB',
    DISCORD: 'DISCORD',
    SPOTIFY: 'SPOTIFY'
};

let DATA = {
    [WINDOWTYPE.GITHUB]: {
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
    }
}

function openWindow(type) {
    if(document.getElementById("startmenu").style.display == "block") startmenu_toggle();
    let window = windowBuilder(type);
    new Window(window);
}

function windowBuilder(type) {

    let d = DATA[type];
    img = d["img"];
    title = d["title"];
    content = d["content"];

    let width = 0.6 * (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
    let height = 0.8 * (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);

    let windowPosX = window.innerWidth / 2 - width / 2;
    let windowPosY = window.innerHeight / 2 - height / 2;

    return /*html*/`

    <div class="window-container" style="--w: ${width}px; --h: ${height}px; --window-border-radius: 20px; --x: ${windowPosX}px; --y: ${windowPosY}px;">
        <div class="fwrapper window-inner-wrapper">
            <div class="window-border"></div>
            <div class="window-pane">
                <div class="fwrapper">

                    <div class="topbar">
                        <div class="title">
                        <img class="logo" src="${img}">
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

let windowY = 10000;

let dragged;
let resized;
let resizedSide;

let mouseX = 0;
let mouseY = 0;

let windowMinWidth = 450;
let windowMinHeight = 200;

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
        document.querySelector("#desktop").insertAdjacentHTML('beforeend', this.windowContent);

        this.parentWindowContainerElement = last(document.querySelector("body").getElementsByClassName("window-container"));
        this.windowBorderElement = this.parentWindowContainerElement.querySelector(".window-border");
        this.windowPaneElement = this.parentWindowContainerElement.querySelector(".window-pane");
        this.windowContentPaneElement = this.windowPaneElement.querySelector(".content-pane");

        this.windowTopbarElement = this.windowPaneElement.querySelector(".topbar");
        this.windowTopbarCloseButtonElement = this.windowTopbarElement.querySelector(".close");
        this.windowTopbarMaximizeButtonElement = this.windowTopbarElement.querySelector(".max");
        this.windowTopbarMinimizeButtonElement = this.windowTopbarElement.querySelector(".min");

        this.parentWindowContainerElement.style.setProperty('--w', this.windowWidth + "px");
        this.parentWindowContainerElement.style.setProperty('--h', this.windowHeight + "px");
        this.parentWindowContainerElement.style.setProperty('--x', this.windowPosX + "px");
        this.parentWindowContainerElement.style.setProperty('--y', this.windowPosY + "px");
        this.parentWindowContainerElement.style.setProperty('--window-border-radius', "10px")
        this.parentWindowContainerElement.style.cursor = "nwse-resize"

        this.layer = windowY
        this.parentWindowContainerElement.style.zIndex = windowY;
        windowY++;

        this.mouseHoversOnContent = false;

        let taskbar_wrapper = document.getElementById("taskbar-apps");
        let taskbar_amount = Number(getComputedStyle(taskbar_wrapper).getPropertyValue("--app-amount"));
        let logo = this.windowTopbarElement.querySelector(".logo").src;
        let cont = `<button class="open active" style="--index: ${taskbar_amount}; --offset: 0"><span></span><img src="${logo}"></button>`
        taskbar_wrapper.insertAdjacentHTML('beforeend', cont);
        taskbar_wrapper.style.setProperty("--app-amount", taskbar_amount + 1);
        this.taskBarIcon = last(taskbar_wrapper.children);

        this.setTaskbarActive();

        //Resize Window
        this.windowPaneElement.onmouseenter = function () {
            root.mouseHoversOnContent = true;
        };
        this.windowPaneElement.onmouseleave = function () {
            root.mouseHoversOnContent = false;
        }
        this.parentWindowContainerElement.addEventListener("mousemove", (event) => {
            if (resized != undefined) return;
            if (this.mouseHoversOnContent) return;

            let r = this.parentWindowContainerElement.getBoundingClientRect();

            let n = Math.abs(r.top - mouseY) <= 20
            let s = Math.abs(r.bottom - mouseY) <= 20
            let w = Math.abs(r.left - mouseX) <= 20
            let e = Math.abs(r.right - mouseX) <= 20

            if (n && e) { resizedSide = "ne"; this.parentWindowContainerElement.style.cursor = "nesw-resize" }
            else if (n && w) { resizedSide = "nw"; this.parentWindowContainerElement.style.cursor = "nwse-resize" }
            else if (n) { resizedSide = "n"; this.parentWindowContainerElement.style.cursor = "ns-resize" }
            else if (s && e) { resizedSide = "se"; this.parentWindowContainerElement.style.cursor = "nwse-resize" }
            else if (s && w) { resizedSide = "sw"; this.parentWindowContainerElement.style.cursor = "nesw-resize" }
            else if (s) { resizedSide = "s"; this.parentWindowContainerElement.style.cursor = "ns-resize" }
            else if (w) { resizedSide = "w"; this.parentWindowContainerElement.style.cursor = "ew-resize" }
            else if (e) { resizedSide = "e"; this.parentWindowContainerElement.style.cursor = "ew-resize" }
            else { resizedSide = "NONE"; }
        });

        this.parentWindowContainerElement.addEventListener("mousedown", (event) => {
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

        //Close window
        this.windowTopbarCloseButtonElement.onclick = () => {
            this.remove();
        };
        this.windowTopbarMinimizeButtonElement.onclick = () => {
            this.setMinimized(true)
        };

        //Focus Window
        this.parentWindowContainerElement.addEventListener("mousedown", (event) => {
            this.setWindowActive();
            this.setTaskbarActive();
        });

        //Focus taskbar
        this.taskBarIcon.addEventListener("mousedown", (event) => {
            if(this.taskBarIcon.classList.contains("active")){
                this.setMinimized(true);
            }
            else if(this.isMinimized){
                this.setMinimized(false);
            }else{
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
            this.parentWindowContainerElement.style.setProperty('--x', this.windowPosX + "px");
            this.parentWindowContainerElement.style.setProperty('--y', this.windowPosY + "px");
            this.parentWindowContainerElement.style.setProperty('--w', this.windowWidth + "px");
            this.parentWindowContainerElement.style.setProperty('--h', this.windowHeight + "px");
            this.parentWindowContainerElement.style.setProperty('--window-border-radius', "20px")
        } else {
            this.parentWindowContainerElement.style.setProperty('--x', 0 + "px");
            this.parentWindowContainerElement.style.setProperty('--y', 0 + "px");
            this.parentWindowContainerElement.style.setProperty('--w', window.innerWidth + "px");
            this.parentWindowContainerElement.style.setProperty('--h', window.innerHeight + "px");
            this.parentWindowContainerElement.style.setProperty('--window-border-radius', "0px")
        }
        this.isMaxximized = m;
    }

    setMinimized(m) {
        if (m) {
            this.parentWindowContainerElement.style.display = "none";
            this.taskBarIcon.classList.remove("active");
        } else {
            this.parentWindowContainerElement.style.display = "block";
            this.setWindowActive();
            this.setTaskbarActive();
        }
        this.isMinimized = m;
    }

    setPos(x, y) {
        this.windowPosX = x;
        this.windowPosY = y;
        this.parentWindowContainerElement.style.setProperty('--x', this.windowPosX + "px");
        this.parentWindowContainerElement.style.setProperty('--y', this.windowPosY + "px");
    }

    setDimensions(w, h) {
        this.windowWidth = w;
        this.windowHeight = h;
        this.parentWindowContainerElement.style.setProperty('--w', Math.max(windowMinWidth, w) + "px");
        this.parentWindowContainerElement.style.setProperty('--h', Math.max(windowMinHeight, h) + "px");
    }

    remove() {
        this.parentWindowContainerElement.style.opacity = '0%';
        let t = document.getElementById("taskbar-apps");
        this.taskBarIcon.remove();
        t.style.setProperty('--app-amount', Number(getComputedStyle(t).getPropertyValue("--app-amount")) - 1);

        const temp = this.parentWindowContainerElement;
        setTimeout(() => { temp.remove(); }, 500);
    }

    setTaskbarActive() {
        document.getElementById("taskbar-apps").querySelectorAll(".open").forEach((e) => {
            e.classList.remove("active");
        });
        this.taskBarIcon.classList.add("active");
    }

    setWindowActive() {
        if (this.parentWindowContainerElement.style.zIndex == windowY - 1) return;
        this.parentWindowContainerElement.style.zIndex = windowY;
        windowY++;
    }
}

document.addEventListener("mouseup", (event) => {
    if (resized != undefined) {
        if (resized.windowWidth < windowMinWidth) resized.setDimensions(windowMinWidth, resized.windowHeight);
        if (resized.windowHeight < windowMinHeight) resized.setDimensions(resized.windowWidth, windowMinHeight);
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
});

//spawnWindow(windowBuilder("assets/icons/github.png", "GitHub", windowGithub))

openWindow(WINDOWTYPE.GITHUB);