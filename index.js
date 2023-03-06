const WINDOWTYPE = {
    ABOUTME: 'ABOUTME',
    GITHUB: 'GITHUB',
    PROJECTS: 'PROJECTS',
};

const THEME = {
    LIGHT: 'LIGHT',
    DARK: 'DARK'
};

let DATA = {
    [WINDOWTYPE.PROJECTS]: {
        title: "Projects",
        img: "assets/windows/projects/icon.svg",
        layout: false,
        content: /*html*/`
            <div class="sidebar">
                <div class="wrapper">
                    <h3>🚧Web</h3>
                    <button onclick="loadwindowtext(this, '#00')">Winked</button>
                    <button onclick="loadwindowtext(this, '#01')">Portfolio</button>
                </div>
                <div class="wrapper">
                    <h3>☕Java</h3>
                    <button onclick="loadwindowtext(this, '#10')">Sulfurium Network</button>
                    <button onclick="loadwindowtext(this, '#11')">The Backrooms</button>
                </div>
                <div class="wrapper">
                    <h3>🐍Python</h3>
                    <button onclick="loadwindowtext(this, '#20')">Foxscript</button>
                </div>
            </div>

            <div class="details #00" style="display: initial">
                <h1 align="center">Winked</h1>
                <p align="center">
                    <a target="_blank" href="https://github.com/Intramo/WinkedClient/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Intramo/WinkedClient.svg"></a>
                    <a target="_blank" href="https://GitHub.com/Intramo/WinkedClient/releases/"><img src="https://img.shields.io/github/release/Intramo/WinkedClient.svg"></a>
                    <a target="_blank" href="https://GitHub.com/Intramo/WinkedClient/stargazers/"><img src="https://img.shields.io/github/stars/Intramo/WinkedClient.svg"></a>
                </p>
                <hr>
                <p>Winked is a web application that allows you to create and host custom live multiplayer games. It is currently in development.</p>
                <p>-> <a target="_blank" href="https://play.winked.app/">https://play.winked.app/</a></p>
                <p>-> <a target="_blank" href="https://create.winked.app/">https://create.winked.app/</a></p>
                <p>-> <a target="_blank" href="https://github.com/Intramo/WinkedClient">https://github.com/Intramo/WinkedClient</a></p>
                <p>-> <a target="_blank" href="https://github.com/Intramo/WinkedServer">https://github.com/Intramo/WinkedServer</a></p>
                <img src="assets/windows/projects/winked.png" width="100%">
            </div>

            <div class="details #01" style="display: none">
                <h1 align="center">Portfolio</h1>
                <p align="center">
                    <a target="_blank" href="https://github.com/FabulousCodingFox/FabulousCodingFox.github.io/blob/master/LICENSE"><img src="https://img.shields.io/github/license/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/FabulousCodingFox.github.io/releases/"><img src="https://img.shields.io/github/release/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/FabulousCodingFox.github.io/stargazers/"><img src="https://img.shields.io/github/stars/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
                </p>
                <hr>
                <p>Its literally this website</p>
                <p>-> <a target="_blank" href="https://github.com/FabulousCodingFox/FabulousCodingFox.github.io">https://github.com/FabulousCodingFox/FabulousCodingFox.github.io</a></p>
            </div>

            <div class="details #10" style="display: none">
                <h1 align="center">Sulfurium Network</h1>
                <p align="center">Not public</p>
                <hr>
                <p>My Minecraft network</p>
                <p>-> <a target="_blank" href="https://sulfurium.net/">https://sulfurium.net/</a></p>
                <img src="assets/windows/projects/sulfurium.png" width="100%">
            </div>

            <div class="details #11" style="display: none">
                <h1 align="center">The Backrooms</h1>
                <p align="center">
                    <a target="_blank" href="https://github.com/FabulousCodingFox/TheBackrooms/blob/master/LICENSE"><img src="https://img.shields.io/github/license/FabulousCodingFox/TheBackrooms.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/TheBackrooms/releases/"><img src="https://img.shields.io/github/release/FabulousCodingFox/TheBackrooms.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/TheBackrooms/stargazers/"><img src="https://img.shields.io/github/stars/FabulousCodingFox/TheBackrooms.svg"></a>
                </p>
                <hr>
                <p>What would The Backrooms look like as an old school 90s computer game? [WIP]</p>
                <p>-> <a target="_blank" href="https://github.com/FabulousCodingFox/TheBackrooms">https://github.com/FabulousCodingFox/TheBackrooms</a></p>
                <img src="assets/windows/projects/backrooms.png" width="100%">
            </div>

            <div class="details #20" style="display: none">
                <h1 align="center">Foxscript</h1>
                <p align="center">
                    <a target="_blank" href="https://github.com/FabulousCodingFox/FoxScript3/blob/master/LICENSE"><img src="https://img.shields.io/github/license/FabulousCodingFox/FoxScript3.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/FoxScript3/releases/"><img src="https://img.shields.io/github/release/FabulousCodingFox/FoxScript3.svg"></a>
                    <a target="_blank" href="https://GitHub.com/FabulousCodingFox/FoxScript3/stargazers/"><img src="https://img.shields.io/github/stars/FabulousCodingFox/FoxScript3.svg"></a>
                </p>
                <hr>
                <h3>FoxScript3</h3>
                <p>FoxScript3 is the third iteraton of the MC Datapack toolkit. The new and improved version features a lot of helpfull shortcuts for .mcfunction files!</p>

                <h3>Create your OWN COMMANDS</h3>
                <p>Using the simple JSON structure, you can create your own command in just seconds(See the wiki for more infos)!</p>

                <h3>Better Loops and If Statements</h3>
                <p>Using the simple In-File Function declarations you can easily write lopps in the same file without having 10.000+ extra files!</p>

                <h3>Generate Custom BLOCKS and ITEMS with textures using a simple Json File (Beta Feature)</h3>
                
                <p>-> <a target="_blank" href="https://github.com/FabulousCodingFox/TheBackrooms">https://github.com/FabulousCodingFox/TheBackrooms</a></p>
            </div>
        `
    },

    [WINDOWTYPE.GITHUB]: {
        'img': 'assets/icons/github.png',
        'title': 'Github',
        'content': /*html*/`
            <h1 align="center">Hi 👋, I am FabulousFox</h1>
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
    },

    [WINDOWTYPE.ABOUTME]: {
        'img': 'assets/icons/avatar.gif',
        'title': 'About Me',
        'content': /*html*/`
        `
    }
}

function windowBuilder(windowType) {
    let data = DATA[windowType];
    return new WindowWrapper(`<div class="window-container">
                <div class="window">
                    <div class="content">
                        <div class="topbar">
                            <div class="title">
                                <img src="${data['img']}">
                                <p>${data['title']}</p>
                            </div>
                            <div class="controls">
                                <button class="min"><img src="assets/icons/minus.svg"></button>
                                <button class="max"><img src="assets/icons/square-rounded.svg"></button>
                                <button class="close"><img src="assets/icons/x-circle.svg"></button>
                            </div>
                        </div>  
                        <div class="content-pane">
                            ${data['content']}
                        </div>
                    </div>
                </div>
            </div>`);
}

let windowY = 1000;

let dragged;
let resized;
let resizedSide;

let mouseX;
let mouseY;

var colorscheme = THEME.DARK;

function last(array) {
    return array[array.length - 1];
}

class WindowWrapper {
    constructor(content) {
        var root = this;

        let width = 0.6 * (window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth);
        let height = 0.8 * (window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight);

        this.windowWidth = width;
        this.windowHeight = height;
        this.windowPosX = window.innerWidth / 2 - width / 2;
        this.windowPosY = window.innerHeight / 2 - height / 2;
        this.windowRawContent = content;
        this.isMaxximized = false
        this.isMinimized = false

        let e = document.querySelector("body");
        if(e == null) return;

        e.insertAdjacentHTML('beforeend', this.windowRawContent);
        this.wd = last(e.getElementsByClassName("window-container"));
        this.windowElement = this.wd.getElementsByClassName("window")[0];
        this.windowContent = this.windowElement.getElementsByClassName("content")[0];
        this.topbar = this.windowContent.getElementsByClassName("topbar")[0];
        this.closebtn = this.topbar.getElementsByClassName("controls")[0].getElementsByClassName("close")[0];
        this.maxbtn = this.topbar.getElementsByClassName("controls")[0].getElementsByClassName("max")[0];
        this.minbtn = this.topbar.getElementsByClassName("controls")[0].getElementsByClassName("min")[0];

        this.wd.style.left = this.windowPosX + "px";
        this.wd.style.top = this.windowPosY + "px";
        this.wd.style.setProperty('--w', width + "px");
        this.wd.style.setProperty('--h', height + "px");
        this.wd.style.setProperty('--window-border-radius', "20px")
        this.wd.style.setProperty('--sidebar', "280px")
        this.windowElement.style.cursor = "nwse-resize"

        this.layer = windowY
        this.wd.style.zIndex = windowY.toString();
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
            if (this.wd.style.zIndex == (windowY - 1).toString()) return;
            this.wd.style.zIndex = windowY.toString();
            windowY++;
        });

        //Move window
        this.topbar.addEventListener("mousedown", (event) => {
            if (resized != undefined) return;
            dragged = this;
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

window.addEventListener('resize', function (event) {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;
    let e = document.getElementById("pageBlocker");
    if(e == null) return;
    if ((x / y) < 1) {
        e.style.display = "flex"
    } else {
        e.style.display = "none"
    }
});

function closePopup() {
    const temp = document.getElementById("popup");
    if(temp == null) return;
    temp.style.opacity = '0%';
    setTimeout(function () { temp.remove(); }, 500);
}

var audioWeAre = new Audio('https://ncs.io/track/download/b10cc907-b9d8-4285-a413-8615a2d84efd');
audioWeAre.volume = 0.25

var musicPaused = true;
function pauseAudio() {
    musicPaused = !musicPaused
    let e = document.getElementById("musiccontrol");
    if(e == null) return;
    if (musicPaused) {
        e.innerHTML = "<img src='assets/icons/play.svg'>"
        audioWeAre.pause()

    } else {
        e.innerHTML = "<img src='assets/icons/pause.svg'>"
        audioWeAre.play()
    }
}

function updateTime() {
    const d = new Date();

    const e = document.querySelector(".navbar .wrapper-account .time");
    if(e == null) return;
    e.innerHTML = d.getHours() + (d.getMinutes().toString().length == 1 ? ":0" : ":") + d.getMinutes();

    const e2 = document.querySelector(".navbar .wrapper-account .date");
    if(e2 == null) return;
    let dt = d.getDate().toString().charAt(d.getDate().toString().length - 1)
    e2.innerHTML = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()] + " " + d.getDate() + (dt == '1' ? "st" : (dt == '2' ? "nd" : (dt == '3' ? "rd" : "th")))
}
updateTime();
setInterval(updateTime, 2000);

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

function toggleColorScheme() {
    if (colorscheme === "dark") {
        document.documentElement.style.setProperty('--bg-img', 'var(--asset-bg-img-light)');
        document.documentElement.style.setProperty('--bg-img-blur', 'var(--asset-bg-img-blur-light)');

        document.documentElement.style.setProperty('--navbar-btn-hover-color', 'rgba(0 0 0 / 20%)');
        document.documentElement.style.setProperty('--navbar-bg-color', ' rgba(255 255 255 / 60%)');

        document.documentElement.style.setProperty('--window-bg-filter', 'brightness(1.25)');
        document.documentElement.style.setProperty('--window-bg-filter-reverse', 'brightness(0.75)');
        document.documentElement.style.setProperty('--color-contrast', '#000');
        document.documentElement.style.setProperty('--scrollbar-color', '#888');
        document.documentElement.style.setProperty('--window-border-color', 'linear-gradient(60deg, #db842d, #db654e, #db4872, #885691, #3e598f, #0c7788, #089986, #5b9669)');

        colorscheme = "light"

        document.getElementById("toggleColorScheme").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>`

    } else {
        document.documentElement.style.setProperty('--bg-img', 'var(--asset-bg-img-dark)');
        document.documentElement.style.setProperty('--bg-img-blur', 'var(--asset-bg-img-blur-dark)');

        document.documentElement.style.setProperty('--navbar-btn-hover-color', 'rgba(255 255 255 / 20%)');
        document.documentElement.style.setProperty('--navbar-bg-color', ' rgba(0 0 0 / 60%)');

        document.documentElement.style.setProperty('--window-bg-filter', 'brightness(0.75)');
        document.documentElement.style.setProperty('--window-bg-filter-reverse', 'brightness(1.25)');
        document.documentElement.style.setProperty('--color-contrast', '#fff');
        document.documentElement.style.setProperty('--scrollbar-color', '#555');
        document.documentElement.style.setProperty('--window-border-color', 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)');

        colorscheme = "dark"

        document.getElementById("toggleColorScheme").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>`

    }
}

windowBuilder(WINDOWTYPE.ABOUTME)