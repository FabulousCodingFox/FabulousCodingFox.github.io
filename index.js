//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const windowAboutMe = /*html*/`

<div class="sidebar">
    <div class="wrapper">
        <h3>👋 Welcome!</h3>
        <button onclick="loadwindowtext(this, '#00')">😜 Intro</button>
    </div>
    <div class="wrapper">
        <h3>💙 My favourite...</h3>
        <button onclick="loadwindowtext(this, '#10')">📕 Book</button>
        <button onclick="loadwindowtext(this, '#11')">📺 Film</button>
        <button onclick="loadwindowtext(this, '#12')">🎬 Show</button>
        <button onclick="loadwindowtext(this, '#13')">🎨 Painting</button>
        <button onclick="loadwindowtext(this, '#14')">🎮 Game</button>
        <button onclick="loadwindowtext(this, '#15')">🎵 Song</button>
        <button onclick="loadwindowtext(this, '#16')">🍕 Food</button>
        <button onclick="loadwindowtext(this, '#17')">😎 Location</button>

    </div>
</div>

<div class="details #00" style="display: initial">
    <h1 align="center">Hi <span class="wave">👋</span>, I am FabulousFox</h1>
    <h3 align="center">Im a 16yo software developer from Dortmund, Germany</h3>

    <hr>

    <h3> 💻 <b>Programming Languages</b></h3>
    <ul>
        <li>☕Java</li>
        <li>🐀C++</li>
        <li>🐍Python</li>
        <li>🟨Javascript</li>
    </ul>

    <h3> 🚀 <b>APIs/Frameworks/Methods</b></h3>
    <ul>
        <li>🧮Databases: SQL</li>
        <li>📜Web: Html/Css, Js/Ts, Bootstrap</li>
        <li>⚡API: FastAPI, Flask</li>
        <li>📗Minecraft: Bukkit/Spigot/Paper, Datapacks</li>
        <li>👾Graphics: Pygame, (Modern OpenGL), Vulkan</li>
    </ul>
</div>

<div class="details #10" style="display: none">
    <h1 align="center">📕 Book</h1>
    <p align="center"><img src="https://m.media-amazon.com/images/I/81oqUi82tyL.jpg" width="30%"></p>
    <p align="center">Einen Scheiß muss ich</p>
</div>

<div class="details #11" style="display: none">
    <h1 align="center">📺 Film</h1>
    <p align="center"><img src="https://upload.wikimedia.org/wikipedia/en/Back_to_the_Future.jpg" width="30%"></p>
    <p align="center">Back to the Future</p>
</div>

<div class="details #14" style="display: none">
    <h1 align="center">Control</h1>
    <img src="https://rare-gallery.com/uploads/posts/317336-Control-Video-Game-4K.jpg" width="100%">
    <p align="center">I love the story, the gameplay, the graphics, the music, the characters, the world, the atmosphere, the everything. It's just a masterpiece.</p>
    <img src="https://c4.wallpaperflare.com/wallpaper/630/821/224/control-control-2019-pc-game-office-federal-bureau-of-control-hd-wallpaper-preview.jpg" width="100%">
    <p align="center">The Bureau of Control is a secret organization that investigates paranormal phenomena. The Bureau is led by Jesse Faden, who is the new Director of the Bureau. The Bureau is located in the Oldest House, a building that is said to be haunted by the ghost of a former Director of the Bureau.</p>
    <img src="https://pbs.twimg.com/media/DxFijDDWoAACWx8.jpg" width="100%">
    <p align="center">One of the greatest things about Control are the innovative weapons. The game has a wide variety of weapons, each with their own unique abilities. The most common weapon is the Service Weapon, which is a pistol that can be used to shoot enemies. Furthermore, the player has the ability to throw debris at enemies</p>

</div>

`


const windowGithub = /*html*/`
<h1 align="center">Hi <span class="wave">👋</span>, I am FabulousFox</h1>
<h3 align="center">I mostly code useless stuff</h3>

<p align="center">(<a href="https://github.com/FabulousCodingFox" target="_blank">https://github.com/FabulousCodingFox</a> || <a href="https://fabulouscodingfox.github.io/" target="_blank">https://fabulouscodingfox.github.io/</a>)</p>

<hr>

<h3> 💻 <b>Programming Languages</b></h3>
<ul>
    <li>🐍Python</li>
    <li>☕Java</li>
    <li>🟥Html+Css+Js+PHP</li>
</ul>

<h3> 🚀 <b>APIs/Frameworks/Methods</b></h3>
<ul>
    <li>🧮SQL</li>
    <li>📗Bukkit/Spigot/Paper, Datapacks</li>
    <li>📜Html/Css, Flask, Eel</li>
    <li>👾Pygame, Modern OpenGL, Ray Marching/Tracing/Casting</li>
</ul>

<hr>

<h3> 📫 <b>Contact</b></h3>
<ul>
    <li>💬Discord: FabulousFox#9057</li>
</ul>

<hr>

<p><img src="https://github-readme-stats.vercel.app/api/top-langs?username=FabulousCodingFox&show_icons=true&locale=en&langs_count=10&theme=dracula" alt="FabulousCodingFox" /><img src="https://github-readme-stats.vercel.app/api?username=FabulousCodingFox&show_icons=true&locale=en&theme=dracula" alt="FabulousCodingFox" /></p>
`



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const windowJava =  /*html*/`
<div class="sidebar">
    <div class="wrapper">
        <h3>🔨 Skills</h3>
        <button onclick="loadwindowtext(this, '#0')">Compact</button>
        <button onclick="loadwindowtext(this, '#1')">Skillset</button>
    </div>
    <div class="wrapper">
        <h3>🚧 APIs / Frameworks</h3>
        <button onclick="loadwindowtext(this, '#2')">LWJGL3</button>
        <button onclick="loadwindowtext(this, '#3')">Bukkit</button>
    </div>
    <div class="wrapper">
        <h3>👷‍♂️ Projects</h3>
        <button onclick="loadwindowtext(this, '#4')">Sulfurium</button>
        <button onclick="loadwindowtext(this, '#5')">Vixels</button>
        <button onclick="loadwindowtext(this, '#6')">Backrooms</button>
    </div>
</div>

<div class="details #0" style="display: initial">
    <h1 align="center">Compact</h1>
    <p>None</p>
</div>

<div class="details #1" style="display: none">
    <h1 align="center">Skillset</h1>

    <h3>Features</h3>
    <ul>
        <li>Data Structures: Arrays, Linkedlist, Arraylist, Stack, Queue, ...</li>
        <li>Objects: Classes, Interfaces, Objects, Inheritance, Abstraction, ...</li>
        <li>Packages</li>
        <li>Loops: for, while & forEach</li>
        <li>Exceptions</li>
        <li>Conditionals: If & Switch</li>
        <li>Functions</li>
        <li>Serialization</li>
        <li>Networking: HttpURLConnection, Sockets, ...</li>
        <li>Streams</li>
        <li>Threads</li>
    </ul>

    <h3>IDEs</h3>
    <ul>
        <li>IntelliJ IDEA (Ultimate & Community)</li>
        <li>VS Code</li>
        <li>BlueJ</li>
    </ul>

    <h3>Libraries</h3>
    <ul>
        <li>SimpleJSON</li>
    </ul>

    <h3>Build Tools</h3>
    <ul>
        <li>Maven</li>
        <li>IntelliJ</li>
    </ul>
</div>

<div class="details #2" style="display: none">
    <h1 align="center">LWJGL 3</h1>
    
    <h3>Submodules</h3>
    <ul>
        <li>OpenGL 3 & 4</li>
        <li>GLFW</li>
        <li>STB</li>
    </ul>
</div>

<div class="details #3" style="display: none">
    <h1 align="center">Bukkit</h1>
    <!-- TODO -->
</div>

<div class="details #4" style="display: none">
    <h1 align="center">Sulfurium</h1>
    <center><a href="https://sulfurium.net/" target="_blank">https://sulfurium.net/</a></center>
</div>

<div class="details #5" style="display: none">
    <center><h1>Vixels</h1></center>
    <center><a href="https://github.com/FabulousCodingFox/Vixels" target="_blank">https://github.com/FabulousCodingFox/Vixels</a></center>
    <center><p><img src="https://user-images.githubusercontent.com/78906517/177133758-ed6fdfba-556d-41c0-bc66-9cabc5320cb7.png" style="width: 100%; max-width:600px"></p></center>
</div>

<div class="details #6" style="display: none">
    <center><h1>The Backrooms</h1></center>
    <center><a href="https://github.com/FabulousCodingFox/TheBackrooms" target="_blank">https://github.com/FabulousCodingFox/TheBackrooms</a></center>
    <center><p><img src="https://user-images.githubusercontent.com/78906517/208268991-8869c2bc-e129-40a7-b541-8dd6ba6fa1ee.png" style="width: 100%; max-width:600px"></p></center>
</div>
`



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const windowPython =  /*html*/`
<div class="sidebar">
    <div class="wrapper">
        <h3>🔨 Skills</h3>
        <button onclick="loadwindowtext(this, '#0')">Compact</button>
        <button onclick="loadwindowtext(this, '#1')">Skillset</button>
    </div>
    <div class="wrapper">
        <h3>🚧 APIs / Frameworks</h3>
        <button onclick="loadwindowtext(this, '#2')">Pygame</button>
        <button onclick="loadwindowtext(this, '#3')">Numpy</button>
        <button onclick="loadwindowtext(this, '#4')">Flask</button>
    </div>
    <div class="wrapper">
        <h3>👷‍♂️ Projects</h3>
        <button onclick="loadwindowtext(this, '#5')">Pygame Collection</button>
        <button onclick="loadwindowtext(this, '#6')">FoxScript</button>
    </div>
</div>

<div class="details #0" style="display: initial">
    <h1 align="center">Compact</h1>
    <p>None</p>
</div>

<div class="details #1" style="display: none">
    <h1 align="center">Skillset</h1>
    
    <h3>Features</h3>
    <ul>
        <li>Data Structures: Lists, Dictionaries, Tuples, Sets, ...</li>
        <li>Loops & conditionals</li>
        <li>Type Casting & Exceptions</li>
        <li>Recursion & Sorting Algorithms</li>
        <li>Iterators</li>
        <li>Decorators</li>
        <li>Lambdas</li>
        <li>Objects: Classes, Inheritance, Methods, ...</li>
        <li>Custom & Builtin Modules -> PyPI & Pip</li>
        <li>Exceptions</li>
    </ul>

    <h3>IDEs</h3>
    <ul>
        <li>VS Code</li>
        <li>Pycharm</li>
    </ul>
</div>

<div class="details #2" style="display: none">
    <h1 align="center">Pygame</h1>
    <!-- TODO -->
</div>

<div class="details #3" style="display: none">
    <h1 align="center">Numpy</h1>
    <!-- TODO -->
</div>

<div class="details #4" style="display: none">
    <h1 align="center">Flask</h1>
    <!-- TODO -->
</div>

<div class="details #5" style="display: none">
    <h1 align="center">Pygame Collection</h1>
    <!-- TODO -->
</div>

<div class="details #6" style="display: none">
    <h1 align="center">FoxScript</h1>
    <!-- TODO -->
</div>
`



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const windowOpenGL =  /*html*/``



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const windowHTML =  /*html*/`
<div class="sidebar">
    <div class="wrapper">
        <h3>🌍Languages</h3>
        <button onclick="loadwindowtext(this, '#0')">HTML</button>
        <button onclick="loadwindowtext(this, '#1')">CSS</button>
        <button onclick="loadwindowtext(this, '#2')">JS</button>
        <button onclick="loadwindowtext(this, '#3')">PHP</button>
    </div>
    <div class="wrapper">
        <h3>🚧 APIs / Frameworks</h3>
        <button onclick="loadwindowtext(this, '#4')">Bootstrap</button>
    </div>
    <div class="wrapper">
        <h3>👷‍♂️ Projects</h3>
        <button onclick="loadwindowtext(this, '#5')">Portfolio</button>
        <button onclick="loadwindowtext(this, '#6')">Winked!</button>
    </div>
</div>

<div class="details #0" style="display: initial">
    <h1 align="center">HTML</h1>
    <!-- TODO -->
</div>

<div class="details #1" style="display: none">
    <h1 align="center">CSS</h1>
    <!-- TODO -->
</div>

<div class="details #2" style="display: none">
    <h1 align="center">JS</h1>
    <!-- TODO -->
</div>

<div class="details #3" style="display: none">
    <h1 align="center">PHP</h1>
    <!-- TODO -->
</div>

<div class="details #4" style="display: none">
    <h1 align="center">Bootstrap</h1>
    <!-- TODO -->
</div>

<div class="details #5" style="display: none">
    <h1 align="center">Portfolio</h1>
    <!-- TODO -->
</div>

<div class="details #6" style="display: none">
    <center><h1>Winked!</h1></center>
    <center><a href="https://github.com/Intramo/WinkedClient" target="_blank">https://github.com/Intramo/WinkedClient</a></center>
    <center><p><img src="https://user-images.githubusercontent.com/78906517/210170319-e2fa2fcc-e4ba-4320-bf29-b247c90ebf3f.png" style="width: 100%; max-width:600px"></p></center>
</div>
`



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function last(array) {
    return array[array.length - 1];
}

function updateTime() {
    const d = new Date();

    const e = document.querySelector(".navbar .wrapper-account .time");
    e.innerHTML = d.getHours() + (d.getMinutes().toString().length == 1 ? ":0" : ":") + d.getMinutes();

    const e2 = document.querySelector(".navbar .wrapper-account .date");
    let dt = d.getDate().toString().charAt(d.getDate().toString().length - 1)
    e2.innerHTML = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()] + " " + d.getDate() + (dt == '1' ? "st" : (dt == '2' ? "nd" : (dt == '3' ? "rd" : "th")))


}
updateTime();
setInterval(updateTime, 2000);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
    return `<div class="window-container">
                <div class="window">
                    <div class="content">
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
            </div>`
}


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
        this.windowContent = content;
        this.isMaxximized = false
        this.isMinimized = false

        document.querySelector("body").insertAdjacentHTML('beforeend', this.windowContent);
        this.wd = last(document.querySelector("body").getElementsByClassName("window-container"));
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

function closePopup() {
    const temp = document.getElementById("popup");
    temp.style.opacity = '0%';
    setTimeout(function () { temp.remove(); }, 500);
}


var audioWeAre = new Audio('https://ncs.io/track/download/b10cc907-b9d8-4285-a413-8615a2d84efd');
audioWeAre.volume = 0.25

var musicPaused = true;
function pauseAudio() {
    musicPaused = !musicPaused
    if (musicPaused) {
        document.getElementById("musiccontrol").innerHTML = "<img src='assets/icons/play.svg'>"
        audioWeAre.pause()

    } else {
        document.getElementById("musiccontrol").innerHTML = "<img src='assets/icons/pause.svg'>"
        audioWeAre.play()
    }
}


window.addEventListener('resize', function (event) {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;
    if ((x / y) < 1) {
        document.getElementById("pageBlocker").style.display = "flex"
    } else {
        document.getElementById("pageBlocker").style.display = "none"
    }
});


spawnWindow(windowBuilder('assets/icons/github.png', 'GitHub', windowAboutMe));

