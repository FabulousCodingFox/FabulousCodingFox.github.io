const WINDOWTYPE = {
    WELCOME: 0,

    PROJECT_FREECODECAMP_RESPONSIVEWEBDEV_SURVEYFORM: 2001,
    PROJECT_FREECODECAMP_RESPONSIVEWEBDEV_TRIBUTEPAGE: 2002,

    //PROJECT_FREECODECAMP_JAVASCRIPT_PALINDROMECHECKER: 3001,

    // CERTIFICATES
    // 
}

var DATA = {
    [WINDOWTYPE.PROJECT_FREECODECAMP_RESPONSIVEWEBDEV_SURVEYFORM]: {"title": "FreeCodeCamp - Survey Form", "logo": "https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s900-c-k-c0xffffffff-no-rj-mo", "iframe": `<iframe class="projRef" src="project/FreeCodeCamp/ResponsiveWebDev/SurveyForm/"></iframe>`},
    [WINDOWTYPE.PROJECT_FREECODECAMP_RESPONSIVEWEBDEV_TRIBUTEPAGE]: {"title": "FreeCodeCamp - Tribute Page", "logo": "https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s900-c-k-c0xffffffff-no-rj-mo", "iframe": `<iframe class="projRef" src="project/FreeCodeCamp/ResponsiveWebDev/TributePage/"></iframe>`},

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