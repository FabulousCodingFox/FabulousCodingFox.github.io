const WINDOWTYPE = {
    // Generic
    WELCOME: 0,

    // Scratch
    PROJECT_2015_06_MICECHASE: 2015_06_001,
    PROJECT_2016_07_SCREENSAVER: 2016_07_001,
    PROJECT_2016_07_LABYRINTH: 2016_07_002,
    PROJECT_2017_02_MATHANDMUSIC: 2017_02_001, //~

    // Web
    PROJECT_2017_05_WEBSITE_EXPERIMENTS: 2017_05_001,
    PROJECT_2018_01_SELFWEBDEV_ROYALOPERAHOUSE: 2018_01_001,
    PROJECT_2018_04_SELFWEBDEV_NEW_WEBSITE: 2018_04_001,
    PROJECT_2018_06_SELFWEBDEV_WEBSITE: 2018_06_001,
    PROJECT_2023_08_FREECODECAMP_RESPONSIVEWEBDEV_SURVEYFORM: 2023_08_001,
    PROJECT_2023_08_FREECODECAMP_RESPONSIVEWEBDEV_TRIBUTEPAGE: 2023_08_002,

    // Python
    PROJECT_2016_08_6SQUARES: 2016_08_001,
    PROJECT_2017_01_PEACE: 2017_01_001,
    PROJECT_2017_08_ATOM: 2017_08_001, //~
    PROJECT_2018_10_PAINT: 2018_10_001,
}

var DATA = {
    [WINDOWTYPE.PROJECT_2023_08_FREECODECAMP_RESPONSIVEWEBDEV_SURVEYFORM]: {"title": "FreeCodeCamp - Survey Form", "logo": "assets/typeicons/freecodecamp.png", "iframeSrc": "projects/2023/08/SurveyForm/"},
    [WINDOWTYPE.PROJECT_2023_08_FREECODECAMP_RESPONSIVEWEBDEV_TRIBUTEPAGE]: {"title": "FreeCodeCamp - Tribute Page", "logo": "assets/typeicons/freecodecamp.png", "iframeSrc": "projects/2023/08/TributePage/"},
    [WINDOWTYPE.PROJECT_2018_01_SELFWEBDEV_ROYALOPERAHOUSE]: {"title": "Royal Opera House", "logo": "assets/typeicons/web.png", "iframeSrc": "projects/2018/01/RoyalOperaHouse/"},
    [WINDOWTYPE.PROJECT_2018_04_SELFWEBDEV_NEW_WEBSITE]: {"title": "New Website", "logo": "assets/typeicons/web.png", "iframeSrc": "projects/2018/04/NewWebsite/"},
    [WINDOWTYPE.PROJECT_2018_06_SELFWEBDEV_WEBSITE]: {"title": "Website", "logo": "assets/typeicons/web.png", "iframeSrc": "projects/2018/06/Website/"},
    [WINDOWTYPE.PROJECT_2017_05_WEBSITE_EXPERIMENTS]: {"title": "Website Experiments", "logo": "assets/typeicons/web.png", "iframeSrc": "projects/2017/05/WebsiteExperiments/"},
    
    [WINDOWTYPE.PROJECT_2016_07_SCREENSAVER]: {"title": "Screensaver", "logo": "assets/typeicons/scratch.png", "iframeSrc": "https://scratch.mit.edu/projects/154258041/embed"},
    [WINDOWTYPE.PROJECT_2017_02_MATHANDMUSIC]: {"title": "Math and Music", "logo": "assets/typeicons/scratch.png", "iframeSrc": "https://scratch.mit.edu/projects/97033394/embed"},
    [WINDOWTYPE.PROJECT_2015_06_MICECHASE]: {"title": "Mice Chase", "logo": "assets/typeicons/scratch.png", "iframeSrc": "https://scratch.mit.edu/projects/94452473/embed"},
    [WINDOWTYPE.PROJECT_2016_07_LABYRINTH]: {"title": "Labyrinth", "logo": "assets/typeicons/scratch.png", "iframeSrc": "https://scratch.mit.edu/projects/154260818/embed"},

    [WINDOWTYPE.PROJECT_2016_08_6SQUARES]: {"title": "6 Squares", "logo": "assets/typeicons/python.png"},
    [WINDOWTYPE.PROJECT_2017_01_PEACE]: {"title": "Peace", "logo": "assets/typeicons/python.png"},
    [WINDOWTYPE.PROJECT_2017_08_ATOM]: {"title": "Atom", "logo": "assets/typeicons/python.png"},  
    [WINDOWTYPE.PROJECT_2018_10_PAINT]: {"title": "Paint", "logo": "assets/typeicons/python.png"},

    [WINDOWTYPE.WELCOME]: {
        "generateFixedtaskbar": true,
        "logo": "assets/icons/avatar.gif",
        "title": "Welcome",
        "content":`
            <h1 align="center">Hi <span class="wave">👋</span>, I am Fabian</h1>
            <h3 align="center">Im a software developer</h3>
            <p align="center">(<a target="_blank" href="https://github.com/FabulousCodingFox">https://github.com/FabulousCodingFox</a> || <a href="javscript:void(0)">https://fabianfuchs.de/</a>)</p>
            
            <hr>

            <h3> 💻 <b>Programmiersprachen</b></h3>
            <ul>
                <li>☕Java</li>
                <li>📗C#</li>
                <li>🐀C / C++ / Zig</li>
                <li>🐍Python</li>
                <li>🟨Javascript / Typescript</li>
                <li>🟣PHP</li>
            </ul>

            <hr>
        
            <h3> 🚀 <b>APIs/Frameworks/Methods</b></h3>
            <ul>
                <li>🧮Databases: (Postgree-)SQL</li>
                <li>📜Web: Html/Css, Js/Ts, Bootstrap, Sass/Scss</li>
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