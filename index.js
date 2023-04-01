let draggedTaskBarIcon = null;
let draggedTaskBarIconIndex = null;
let taskBar = document.querySelector('#taskbar-apps');

function rebuildTaskBar() {
    let icons = [...taskBar.children];
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










function updateTime() {
    const d = new Date();

    const e = document.querySelector("#taskbar-info .time");
    if (e == null) return;
    e.innerHTML = d.getHours() + (d.getMinutes().toString().length == 1 ? ":0" : ":") + d.getMinutes();

    const e2 = document.querySelector("#taskbar-info .date");
    if (e2 == null) return;
    let dt = d.getDate().toString().charAt(d.getDate().toString().length - 1)
    e2.innerHTML = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()] + " " + d.getDate() + (dt == '1' ? "st" : (dt == '2' ? "nd" : (dt == '3' ? "rd" : "th")))
}
updateTime();
setInterval(updateTime, 2000);












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
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        element.style.display = "block";
    } else {
        element.classList.add("hidden");
    }
}
















const THEME = {
    DARK: 'DARK',
    LIGHT: 'LIGHT',
    WINDOWS10: 'WINDOWS10',
};

let currentTheme = THEME.DARK;

let DATA_THEME = {
    [THEME.DARK]: {
        "--theme-desktop-wallpaper": "url(assets/background/dark.png)",
        "--theme-navbar-bg-color": "rgba(0 0 0 / 60%)",
        "--theme-navbar-active": "#ff99a1",
        "--theme-button-color": "#fff",
        "--theme-button-hover-color": "rgba(255 255 255 / 20%)",
        "--theme-navbar-text-color": "#fff",
        "--theme-window-title-color": "#fff",

        "--theme-scrollbar-thumb-color": "#3f3f3f",
        "--theme-scrollbar-thumb-color-hover": "#5e5e5e",

        "--theme-content-text-color": "#fff",

        "--theme-startmenu-text": "#fff",
        "--theme-startmenu-apps-bg": "rgba(255 255 255 / 20%)",
        "--theme-startmenu-list-input-bg": "#000",
        "--theme-startmenu-list-item-hover": "rgba(255 255 255 / 20%)",

        "--theme-darken-a": "rgba(0 0 0 / 25%)",
        "--theme-darken-b": "rgba(0 0 0 / 12.5%)",
        "--theme-darken-c": "rgba(0 0 0 / 6.25%)",
        "--theme-darken-d": "rgba(0 0 0 / 3.125%)",
        "--theme-darken-e": "rgba(0 0 0 / 1.5625%)",

        "--theme-lighten-a": "rgba(255 255 255 / 25%)",
        "--theme-lighten-b": "rgba(255 255 255 / 12.5%)",
        "--theme-lighten-c": "rgba(255 255 255 / 6.25%)",
        "--theme-lighten-d": "rgba(255 255 255 / 3.125%)",
        "--theme-lighten-e": "rgba(255 255 255 / 1.5625%)",

        "--navbar-height": "50px",
        "--navbar-margin": "12px",
        "--navbar-border-radius": "3px",
        "--navbar-button-padding": "10px",
        "--navbar-active-height": "2px",

        "--gap": "10px",
        "--padding": "16px",

        "--window-border": "4px",
        "--window-animation-speed": "0.4s",

        "--window-topbar-height": "80px",
        "--window-controls-height": "calc(var(--window-topbar-height) / 2)",
        "--window-controls-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",
        "--window-controls-btn-image-height": "calc(var(--window-controls-height) / 2)",

        "--window-title-height": "calc(var(--window-topbar-height) / 2)",
        "--window-title-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",

        "--startmenu-height": "700px",
        "--startmenu-width": "880px"
    },

    [THEME.LIGHT]: {
        "--theme-desktop-wallpaper": "url(assets/background/light.png)",
        "--theme-navbar-bg-color": "rgba(255 255 255 / 60%)",
        "--theme-navbar-active": "#ff99a1",
        "--theme-button-color": "#000",
        "--theme-button-hover-color": "rgba(0 0 0 / 20%)",
        "--theme-navbar-text-color": "#000",
        "--theme-window-title-color": "#000",

        "--theme-scrollbar-thumb-color": "#d0d0d0",
        "--theme-scrollbar-thumb-color-hover": "#b0b0b0",

        "--theme-content-text-color": "#000",

        "--theme-startmenu-text": "#000",
        "--theme-startmenu-apps-bg": "rgba(0 0 0 / 20%)",
        "--theme-startmenu-list-input-bg": "#fff",
        "--theme-startmenu-list-item-hover": "rgba(0 0 0 / 20%)",

        "--theme-lighten-a": "rgba(0 0 0 / 25%)",
        "--theme-lighten-b": "rgba(0 0 0 / 12.5%)",
        "--theme-lighten-c": "rgba(0 0 0 / 6.25%)",
        "--theme-lighten-d": "rgba(0 0 0 / 3.125%)",
        "--theme-lighten-e": "rgba(0 0 0 / 1.5625%)",

        "--theme-darken-a": "rgba(255 255 255 / 25%)",
        "--theme-darken-b": "rgba(255 255 255 / 12.5%)",
        "--theme-darken-c": "rgba(255 255 255 / 6.25%)",
        "--theme-darken-d": "rgba(255 255 255 / 3.125%)",
        "--theme-darken-e": "rgba(255 255 255 / 1.5625%)",

        "--navbar-height": "50px",
        "--navbar-margin": "12px",
        "--navbar-border-radius": "3px",
        "--navbar-button-padding": "10px",
        "--navbar-active-height": "2px",

        "--gap": "10px",
        "--padding": "16px",

        "--window-border": "4px",
        "--window-animation-speed": "0.4s",

        "--window-topbar-height": "80px",
        "--window-controls-height": "calc(var(--window-topbar-height) / 2)",
        "--window-controls-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",
        "--window-controls-btn-image-height": "calc(var(--window-controls-height) / 2)",

        "--window-title-height": "calc(var(--window-topbar-height) / 2)",
        "--window-title-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",

        "--startmenu-height": "700px",
        "--startmenu-width": "880px"
    },

    [THEME.WINDOWS10]: {
        "--theme-desktop-wallpaper": "url(assets/background/windows10.png)",
        "--theme-navbar-bg-color": "#101010",
        "--theme-navbar-active": "#ff99a1",
        "--theme-button-color": "#fff",
        "--theme-button-hover-color": "rgba(255 255 255 / 20%)",
        "--theme-navbar-text-color": "#fff",
        "--theme-window-title-color": "#fff",

        "--theme-scrollbar-thumb-color": "#3f3f3f",
        "--theme-scrollbar-thumb-color-hover": "#5e5e5e",

        "--theme-content-text-color": "#fff",

        "--theme-startmenu-text": "#fff",
        "--theme-startmenu-apps-bg": "rgba(255 255 255 / 20%)",
        "--theme-startmenu-list-input-bg": "#000",
        "--theme-startmenu-list-item-hover": "rgba(255 255 255 / 20%)",

        "--theme-darken-a": "rgba(0 0 0 / 25%)",
        "--theme-darken-b": "rgba(0 0 0 / 12.5%)",
        "--theme-darken-c": "rgba(0 0 0 / 6.25%)",
        "--theme-darken-d": "rgba(0 0 0 / 3.125%)",
        "--theme-darken-e": "rgba(0 0 0 / 1.5625%)",

        "--theme-lighten-a": "rgba(255 255 255 / 25%)",
        "--theme-lighten-b": "rgba(255 255 255 / 12.5%)",
        "--theme-lighten-c": "rgba(255 255 255 / 6.25%)",
        "--theme-lighten-d": "rgba(255 255 255 / 3.125%)",
        "--theme-lighten-e": "rgba(255 255 255 / 1.5625%)",

        "--navbar-height": "50px",
        "--navbar-margin": "0px",
        "--navbar-border-radius": "0px",
        "--navbar-button-padding": "10px",
        "--navbar-active-height": "2px",

        "--gap": "10px",
        "--padding": "16px",

        "--window-border": "5px",
        "--window-animation-speed": "0s",

        "--window-topbar-height": "50px",
        "--window-controls-height": "calc(var(--window-topbar-height) / 1.2)",
        "--window-controls-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",
        "--window-controls-btn-image-height": "calc(var(--window-controls-height) / 2)",

        "--window-title-height": "calc(var(--window-topbar-height) / 2)",
        "--window-title-padding": "calc(calc(var(--window-topbar-height) - var(--window-controls-height)) / 2)",

        "--startmenu-height": "700px",
        "--startmenu-width": "880px"
    },
}

function applyTheme(theme) {
    for (let key in DATA_THEME[theme]) {
        document.documentElement.style.setProperty(key, DATA_THEME[theme][key]);
    }
    currentTheme = theme;
}
applyTheme(currentTheme);

const WINDOWTYPE = {
    GITHUB: 'GITHUB',
    WINKED: 'WINKED',
    BACKROOMS: 'BACKROOMS',
    MINECRAFT: 'MINECRAFT',
    VIXELS: 'VIXELS',
    VOXELTRACING: 'VOXELTRACING',
    WEBSITE: 'WEBSITE',

    ABOUTME: 'ABOUTME',
    CONTACT: 'CONTACT',
    RESUME: 'RESUME'
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
    },

    [WINDOWTYPE.WINKED]: {
        'img': 'assets/projects/winked/logosmall.png',
        'title': 'WINKED.APP',
        'content': /*html*/`
        <h1 align="center">Winked.app</h1>
        <h3 align="center">Kahoot clone</h3>
        <p align="center"><a target="_blank" href="https://github.com/Intramo/WinkedClient">https://github.com/Intramo/WinkedClient</a></p>
        <p align="center"><a target="_blank" href="https://play.winked.app">https://play.winked.app</a></p>
        <h3 align="center">
            <a href="https://github.com/Intramo/WinkedClient/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Intramo/WinkedClient.svg"></a>
            <a href="https://GitHub.com/Intramo/WinkedClient/releases/" target="_blank"><img src="https://img.shields.io/github/release/Intramo/WinkedClient.svg"></a>
            <a href="https://GitHub.com/Intramo/WinkedClient/stargazers/" target="_blank"><img src="https://img.shields.io/github/stars/Intramo/WinkedClient.svg"></a>
        </h3>
        
        <hr>

        <h3> 📜 <b>What is Winked.app?</b></h3>
        <p>Winked.app is a kahoot clone that was in development. It is a web app that allows you to create and play quiz games. I sadly never finished the creator, but the client & server are fully functional.</p>
        <p>It was made using plain html, css, js and python. The server is a python websocket server, and the client is a js websocket client. The connections can be rocky and can be easily interrupted by a bad connection, which is a problem i wanted to fix.</p>
        <p>It was made for a school project in 2 weeks, and i was the only one working on it. I was the only one who knew how to code, and i was the only one who did not want to pay the horrendous price for a kahoot subscription, which allows over 12 players in the same game.</p>

        <h3> 📸 <b>Gallery</b></h3>
        <img src="assets/projects/winked/screenshot1.png" alt="Winked.app"/>
        `
    },

    [WINDOWTYPE.BACKROOMS]: {
        'img': 'assets/projects/backrooms/logosmall.png',
        'title': 'BACKROOMS',
        'content': /*html*/`
        <h1 align="center">Backrooms</h1>
        <h3 align="center">A small proof-of-concept game</h3>
        <p align="center"><a target="_blank" href="https://github.com/FabulousCodingFox/TheBackrooms">https://github.com/FabulousCodingFox/TheBackrooms</a></p>
        <h3 align="center">
            <a href="https://github.com/FabulousCodingFox/TheBackrooms/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/FabulousCodingFox/TheBackrooms.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/TheBackrooms/releases/" target="_blank"><img src="https://img.shields.io/github/release/FabulousCodingFox/TheBackrooms.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/TheBackrooms/stargazers/" target="_blank"><img src="https://img.shields.io/github/stars/FabulousCodingFox/TheBackrooms.svg"></a>
        </h3>

        <hr>

        <h3> 📜 <b>What is Backrooms?</b></h3>
        <p>Backrooms is a small proof-of-concept game i made in 2 weeks. It is a first-person game, where you are trapped in a infinite world, inspired by the online trend of the same name in 2022.</p>
        <p>It was made using OpenGL 3.3 and Java using LWJGL. It is a very simple game, but it was a fun project to work on. Its main purpose was to setup a basic OpenGL template, and it nailed that.</p>

        <h3> 📸 <b>Gallery</b></h3>
        <img src="assets/projects/backrooms/screenshot1.png" alt="Backrooms"/>
        `
    },

    [WINDOWTYPE.VIXELS]: {
        'img': 'assets/projects/vixels/logosmall.png',
        'title': 'VIXELS',
        'content': /*html*/`
        <h1 align="center">Vixels</h1>
        <h3 align="center">A voxel game/engine</h3>
        <p align="center"><a target="_blank" href="https://github.com/FabulousCodingFox/Vixels">https://github.com/FabulousCodingFox/Vixels</a></p>
        <h3 align="center">
            <a href="https://github.com/FabulousCodingFox/Vixels/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/FabulousCodingFox/Vixels.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/Vixels/releases/" target="_blank"><img src="https://img.shields.io/github/release/FabulousCodingFox/Vixels.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/Vixels/stargazers/" target="_blank"><img src="https://img.shields.io/github/stars/FabulousCodingFox/Vixels.svg"></a>
        </h3>

        <hr>

        <h3> 📜 <b>What is Vixels?</b></h3>
        <p>Vixels is a voxel game/engine i made in 2 weeks. It uses procdeural generation to generate a world, and it uses a custom voxel engine to render the world.</p>
        <p>It was made using OpenGL 3.3 and Java using LWJGL. It is a very simple game, but it was a fun project to work on. Its main purpose was to learn modern OpenGL and GLSL</p>

        <h3> 📸 <b>Gallery</b></h3>
        <img src="assets/projects/vixels/screenshot2.png" alt="Vixels"/>
        <img src="assets/projects/vixels/screenshot1.png" alt="Vixels"/>
        `
    },

    [WINDOWTYPE.WEBSITE]: {
        'img': 'assets/icons/avatar.gif',
        'title': 'Website',
        'content': /*html*/`
        <h1 align="center">Website</h1>	
        <h3 align="center">This website</h3>
        <p align="center"><a target="_blank" href="https://github.com/FabulousCodingFox/FabulousCodingFox.github.io">https://github.com/FabulousCodingFox/FabulousCodingFox.github.io</a></p>
        <h3 align="center">
            <a href="https://github.com/FabulousCodingFox/FabulousCodingFox.github.io/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/FabulousCodingFox.github.io/releases/" target="_blank"><img src="https://img.shields.io/github/release/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
            <a href="https://GitHub.com/FabulousCodingFox/FabulousCodingFox.github.io/stargazers/" target="_blank"><img src="https://img.shields.io/github/stars/FabulousCodingFox/FabulousCodingFox.github.io.svg"></a>
        </h3>
    
        <hr>

        <h3> 📜 <b>What is this website?</b></h3>
        <p>This website is a website i made to showcase my projects. It is made using HTML, CSS and JavaScript. It uses no external libraries, and it is fully responsive.</p>
        `
    },

    [WINDOWTYPE.ABOUTME]: {
        'img': 'assets/icons/avatar.gif',
        'title': 'About me',
        'content': /*html*/`
        <h1 align="center">About me</h1>
        <h3 align="center">A little bit about me</h3>
        
        <hr>

        <h3> 📜 <b>Who am i?</b></h3>
        <p>I am a 16 year old developer from Germany. I am currently making my final year of school, and i am planning to study computer science in the future.</p>
        <p>I am a self-taught developer, and i have been programming for about 8 years now. I started with Scratch in April of 2014 and later began learning python. I started doing Java 2 years ago and stuck with it.</p>

        <h3> 📜 <b>What do i do?</b></h3>
        <p>I am a developer, and i am currently working on a few projects. I am also a part of a few teams, and i am working on a few projects with them.</p>

        <h3> 📜 <b>What are my hobbies?</b></h3>
        <p>- <b>Programming</b>: I like to program, and i am currently working on a few projects.</p>
        <p>- <b>Video games</b>: I like to play video games, mostly strategy, simulation and sandbox games. My favourite games are <a target="_blank" href="https://store.steampowered.com/app/870780/Control_Ultimate_Edition/">Control</a>, <a target="_blank" href="https://www.satisfactorygame.com/">Satisfactory</a>, <a target="_blank" href="https://www.minecraft.net/">Minecraft</a>, <a target="_blank" href="https://www.nomanssky.com/">No Mans Sky</a> and <a target="_blank" href="https://store.steampowered.com/app/823500/BONEWORKS/">Boneworks.</a></p>

        <h3> 📜 <b>My favourite...</b></h3>
        <p>...programming language: Java</p>
        <p>...game: <a target="_blank" href="https://store.steampowered.com/app/870780/Control_Ultimate_Edition/">Control</a></p>
        <p>...drink: Water</p>
        <p>...sport: Badminton</p>
        <p>...series: Dark</p>
        <p>...song: High Hopes - Pink Floyd</p>
        `
    },


    /*[WINDOWTYPE.CONTACT]: {},*/

    /*[WINDOWTYPE.RESUME]: {},*/

    /*[WINDOWTYPE.MINECRAFT]: {},*/

    /*[WINDOWTYPE.VOXELTRACING]: {},*/
}

function openWindow(type, icon) {
    if (!document.getElementById("startmenu").classList.contains("hidden")) startmenu_toggle();
    let window = windowBuilder(type);
    windows.push(new Window(window, icon));
}

function windowBuilder(type) {
    let d = DATA[type];

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
                        <img class="logo" src="${d["img"]}">
                            <p>${d["title"]}</p>
                        </div>
                        <div class="controls">
                            <button class="min"><img src="assets/icons/minus.svg"></button>
                            <button class="max"><img src="assets/icons/square-rounded.svg"></button>
                            <button class="close"><img src="assets/icons/x-circle.svg"></button>
                        </div>
                    </div>
                    <div class="content-pane styled">
                        ${d["content"]}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `;
}

let startmenuSearchListElement = document.getElementById("startmenu-search-list");
let e = Object.keys(WINDOWTYPE).sort();
for (const type in e) {
    const d = DATA[e[type]];
    if (d == undefined) continue;
    startmenuSearchListElement.insertAdjacentHTML("beforeend", /*html*/`<button onclick="openWindow(WINDOWTYPE.${e[type]}, null)"><img src="${d["img"]}"> <span>${d["title"]}</span></button>`);
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
        if (predefinedTaskBarIcon == null) {
            let logo = this.windowTopbarElement.querySelector(".logo").src;
            let cont = `<button class="open active" style="--index: ${taskbar_amount}; --offset: 0"><span></span><img src="${logo}"></button>`
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
            this.parentWindowContainerElement.classList.add("hidden");
            this.taskBarIcon.classList.remove("active");
        } else {
            this.parentWindowContainerElement.classList.remove("hidden");
            this.setWindowActive();
            this.setTaskbarActive();
        }
        this.isMinimized = m;
    }

    setPos(x, y) {
        if (resized != this || this.windowWidth > windowMinWidth) {
            this.windowPosX = x;
            this.parentWindowContainerElement.style.setProperty('--x', this.windowPosX + "px");
        }
        if (resized != this || this.windowHeight > windowMinHeight) {
            this.windowPosY = y;
            this.parentWindowContainerElement.style.setProperty('--y', this.windowPosY + "px");
        }
    }

    setDimensions(w, h) {
        this.windowWidth = w;
        this.windowHeight = h;
        this.parentWindowContainerElement.style.setProperty('--w', Math.max(windowMinWidth, w) + "px");
        this.parentWindowContainerElement.style.setProperty('--h', Math.max(windowMinHeight, h) + "px");
    }

    remove() {
        this.parentWindowContainerElement.style.opacity = '0%';
        if (!this.taskBarIcon.classList.contains("persistent")) {
            let t = document.getElementById("taskbar-apps");
            this.taskBarIcon.remove();
            rebuildTaskBar();
            t.style.setProperty('--app-amount', Number(getComputedStyle(t).getPropertyValue("--app-amount")) - 1);
        } else {
            this.taskBarIcon.classList.remove("open");
            this.taskBarIcon.classList.remove("active");
        }

        const temp = this.parentWindowContainerElement;
        temp.classList.add("hidden");
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

openWindow(WINDOWTYPE.GITHUB, null);