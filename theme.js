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
        "--theme-window-border-gradient": "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
        "--theme-window-border-color": "#000",
        "--theme-navbar-container-bg": "transparent",
        "--theme-window-border-radius-multiplier": "1",

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
        "--navbar-width": "unset",

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
        "--startmenu-width": "880px",
        "--startmenu-border-radius": "10px",
        "--startmenu-left": "50%",
        "--startmenu-translate-x": "-50%",
        "--startmenu-box-shadow": "unset"
    },

    [THEME.LIGHT]: {
        "--theme-desktop-wallpaper": "url(assets/background/light.png)",
        "--theme-navbar-bg-color": "rgba(255 255 255 / 60%)",
        "--theme-navbar-active": "#ff99a1",
        "--theme-button-color": "#000",
        "--theme-button-hover-color": "rgba(0 0 0 / 20%)",
        "--theme-navbar-text-color": "#000",
        "--theme-window-title-color": "#000",
        "--theme-window-border-gradient": "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
        "--theme-window-topbar-shadow-color": "#fff",
        "--theme-navbar-container-bg": "transparent",
        "--theme-window-border-radius-multiplier": "1",

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
        "--navbar-width": "unset",

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
        "--startmenu-width": "880px",
        "--startmenu-border-radius": "10px",
        "--startmenu-left": "50%",
        "--startmenu-translate-x": "-50%",
        "--startmenu-box-shadow": "unset"
    },

    [THEME.WINDOWS10]: {
        "--theme-desktop-wallpaper": "url(assets/background/windows10.png)",
        "--theme-navbar-bg-color": "#101010",
        "--theme-navbar-active": "#ff99a1",
        "--theme-button-color": "#fff",
        "--theme-button-hover-color": "rgba(255 255 255 / 20%)",
        "--theme-navbar-text-color": "#fff",
        "--theme-window-title-color": "#fff",
        "--theme-window-border-gradient": "linear-gradient(60deg, #00000000 #00000000)",
        "--theme-window-topbar-shadow-color": "transparent",
        "--theme-navbar-container-bg": "#101010",
        "--theme-window-border-radius-multiplier": "0",

        "--theme-scrollbar-thumb-color": "#3f3f3f",
        "--theme-scrollbar-thumb-color-hover": "#5e5e5e",

        "--theme-content-text-color": "#fff",

        "--theme-startmenu-text": "#fff",
        "--theme-startmenu-apps-bg": "rgba(255 255 255 / 20%)",
        "--theme-startmenu-list-input-bg": "#000",
        "--theme-startmenu-list-item-hover": "rgba(255 255 255 / 20%)",

        "--theme-darken-a": "#1f1f1f",
        "--theme-darken-b": "#101010",
        "--theme-darken-c": "#000",
        "--theme-darken-d": "#000",
        "--theme-darken-e": "#000",

        "--theme-lighten-a": "#3f3f3f",
        "--theme-lighten-b": "#5e5e5e",
        "--theme-lighten-c": "#7f7f7f",
        "--theme-lighten-d": "#9f9f9f",
        "--theme-lighten-e": "#bfbfbf",

        "--navbar-height": "50px",
        "--navbar-margin": "0px",
        "--navbar-border-radius": "0px",
        "--navbar-button-padding": "10px",
        "--navbar-active-height": "2px",
        "--navbar-width": "100%",

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
        "--startmenu-width": "880px",
        "--startmenu-border-radius": "0px",
        "--startmenu-left": "0px",
        "--startmenu-translate-x": "0px",
        "--startmenu-box-shadow": "10px -10px 15px 4px #101010",
    },
}

function applyTheme(theme) {
    for (let key in DATA_THEME[theme]) {
        document.documentElement.style.setProperty(key, DATA_THEME[theme][key]);
    }
    currentTheme = theme;
}
applyTheme(currentTheme);