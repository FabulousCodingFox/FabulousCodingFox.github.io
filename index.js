let draggedTaskBarIcon = null;
let draggedTaskBarIconIndex = null;
let taskBar = document.querySelector('#taskbar-apps');

function handleDragStart(event) {
    const el = event.currentTarget;

    el.classList.add('dragged');
    taskBar.classList.remove('static');

    draggedTaskBarIconIndex = Number(getComputedStyle(el).getPropertyValue('--index'));

    const move = (event) => {
        let btnSize = 50;
        let maxAmount = Number(getComputedStyle(taskBar).getPropertyValue('--app-amount'));
        
        let newDraggedTaskBarIconIndex = Math.floor((event.clientX - taskBar.getBoundingClientRect().left) / btnSize);
        let draggedTaskBarIconOffset = (-((taskBar.getBoundingClientRect().left + (newDraggedTaskBarIconIndex * btnSize)) - event.clientX) / btnSize) - 0.5;
        if(newDraggedTaskBarIconIndex < 0 || (newDraggedTaskBarIconIndex == 0 && draggedTaskBarIconOffset < 0)) draggedTaskBarIconOffset = 0;
        if(newDraggedTaskBarIconIndex > maxAmount - 1 || (newDraggedTaskBarIconIndex == maxAmount - 1 && draggedTaskBarIconOffset > 0)) draggedTaskBarIconOffset = 0;
        el.style.setProperty('--offset', draggedTaskBarIconOffset);

        if(newDraggedTaskBarIconIndex != draggedTaskBarIconIndex){
            el.style.setProperty('--index', Math.min(maxAmount - 1, Math.max(0, newDraggedTaskBarIconIndex)));
            //Rebuild all indexes
            let icons = [...taskBar.children];
            //Remove the dragged item from the list
            for(let i = 0; i < icons.length; i++){
                if(icons[i] === el){
                    icons.splice(i, 1);
                }
            }
            icons.sort((a, b) => {
                let aIndex = Number(getComputedStyle(a).getPropertyValue('--index'));
                let bIndex = Number(getComputedStyle(b).getPropertyValue('--index'));
                return aIndex - bIndex;
            });
            let i = -1;

            let direction = newDraggedTaskBarIconIndex < draggedTaskBarIconIndex ? -1 : 1;
            icons.splice(draggedTaskBarIconIndex + direction, 0, el)
            for(let icon of icons){
                i++;
                if(icon === el) continue;
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
        handleDragStart(event);
    });
}