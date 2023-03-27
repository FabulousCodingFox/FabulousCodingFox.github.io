let taskBar = document.querySelector('#taskbar-apps');
const dragArea = taskBar;
new Sortable(dragArea, {
    animation: 250
});