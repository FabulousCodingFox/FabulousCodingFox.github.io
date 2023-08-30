const THEME = {
  WINDOWS11: 0,
  WINDOWS12_DARK: 1,
};

let currentTheme = localStorage.getItem("THEME");
if (currentTheme == null) {
  currentTheme = THEME.WINDOWS11;
  localStorage.setItem("THEME", currentTheme);
}

currentTheme = THEME.WINDOWS11;

const THEMEDATA = {
  [THEME.WINDOWS11]: {
    wallpaper: `<video src="assets/background/synthwave.mp4" autoplay muted loop disablePictureInPicture class="mediaFullFit"></video>`,

    css: `:root {
            --taskbar-height: 47px;
            --taskbar-button-gap: 4px;
            --taskbar-button-pad: 8px;
            --taskbar-blur: 30px;
            --taskbar-icon-open-height: 3px;
            --taskbar-icon-open-width: 15%;
            --taskbar-icon-open-color: #a99ba5;
            --taskbar-icon-active-width: 50%;
            --taskbar-icon-active-color: #0078d4;
            --window-border-radius: 5px;
            --window-border-visible: 0;
            --window-topbar-height: 40px;
            --window-topbar-icon-size: 15px;
            --window-topbar-button-width: 60px;
            --window-topbar-logo-size: 20px;
            --text-color: white;
          }
          
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: var(--theme-scrollbar-thumb-color);
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: var(--theme-scrollbar-thumb-color-hover);
          }
          
          #desktop-pane-taskbar {
            border-top: 1px solid #434343;
          }
          
          #desktop-pane-taskbar-content {
            padding-left: 9px;
            background-image: linear-gradient(to right, rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.8));
          }
          #desktop-pane-taskbar-content > .section > button {
            border-radius: 3px;
            transition: background-color 0.1s ease-in-out;
          }
          #desktop-pane-taskbar-content > .section > button:active img {
            transition: transform 0.1s ease-in-out;
            transform: scale(0.9);
          }
          #desktop-pane-taskbar-content > .section > button span {
            border-radius: 3px;
            transition: width 0.1s ease-in-out, background-color 0.1s ease-in-out;
          }
          
          #desktop-pane-taskbar-bg {
            backdrop-filter: blur(var(--taskbar-blur));
          }
          
          #desktop-pane-taskbar-content > .section:not(.nonstatic) > button:hover {
            background-color: rgba(204, 204, 204, 0.2);
          }
          
          .root-window-pane {
            height: calc(100% - var(--taskbar-height));
          }
          
          .window-container .layerTopBarButtons-topbar button {
            transition: background-color 0.1s ease-in-out;
          }
          .window-container .layerTopBarButtons-topbar button:hover {
            background-color: rgba(204, 204, 204, 0.2);
          }
          .window-container .layerTopBarButtons-topbar button.close:hover {
            background-color: rgba(245, 0, 0, 0.6);
          }
          
          .window-container .layerBackground {
            background-color: rgb(30, 30, 30);
          }
          
          @keyframes windowMinimizeAnimation {
            0% {
              transform: scale(100%) translateY(0vh);
              opacity: 100%;
            }
            100% {
              transform: translateY(100vh);
              opacity: 50%;
            }
          }
          @keyframes windowCloseAnimation {
            0% {
              opacity: 100%;
            }
            100% {
              opacity: 0%;
            }
          }
          @keyframes taskBarIconBounceUp {
            0% {
              transform: translateY(0px) scale(0.9);
            }
            50% {
              transform: translateY(-20%) scale(1);
            }
            100% {
              transform: translateY(0px) scale(1);
            }
          }
          @keyframes taskBarIconBounceDown {
            0% {
              transform: translateY(0px) scale(0.9);
            }
            50% {
              transform: translateY(20%) scale(1);
            }
            100% {
              transform: translateY(0px) scale(1);
            }
          }
          .window-container .layerContent {
            color: var(--text-color);
          }
          
          #desktop-pane-desktop {
            height: calc(100% - var(--taskbar-height));
          }
          
          #desktopInsertContainer > div.selection {
            border: 1px solid #0078d7;
            background-color: rgba(0, 120, 215, 0.2);
          }
          #desktopInsertContainer button {
            border-radius: 5px;
          }
          #desktopInsertContainer button.selected, #desktopInsertContainer button.selected2 {
            background-color: rgba(120, 120, 120, 0.4);
          }
          #desktopInsertContainer button:hover {
            background-color: rgba(120, 120, 120, 0.2);
          }
          #desktopInsertContainer button .name {
            color: var(--text-color);
            text-shadow: 1px 1px 2px black;
          }
        `,
  },

  [THEME.WINDOWS12_DARK]: {
    wallpaper: `<img src="assets/background/dark.png" class="mediaFullFit"></video>`,
    css: ``,
  },
};

function applyTheme(theme) {
  document.getElementById("theme-style").innerHTML = THEMEDATA[theme]["css"];
  document.getElementById("desktop-pane-bg").innerHTML =
    THEMEDATA[theme]["wallpaper"];
  currentTheme = theme;
  localStorage.setItem("THEME", currentTheme);
}

applyTheme(currentTheme);
