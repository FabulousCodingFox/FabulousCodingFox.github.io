let draggedTaskBarIcon = null;
let draggedTaskBarIconIndex = null;
let taskBar = document.querySelector('#taskbar-apps');

function handleDragStart(event) {
    const el = event.currentTarget;

    el.classList.add('dragged');

    draggedTaskBarIconIndex = Number(getComputedStyle(el).getPropertyValue('--index'));
    console.log(draggedTaskBarIconIndex);

    const move = (event) => {
        let btnSize = 50;
        
        let newDraggedTaskBarIconIndex = Math.floor((event.clientX - taskBar.getBoundingClientRect().left) / btnSize);
        let draggedTaskBarIconOffset = (-((taskBar.getBoundingClientRect().left + (newDraggedTaskBarIconIndex * btnSize)) - event.clientX) / btnSize) - 0.5;
        el.style.setProperty('--offset', draggedTaskBarIconOffset);

        if(newDraggedTaskBarIconIndex !== draggedTaskBarIconIndex){
            el.style.setProperty('--index', newDraggedTaskBarIconIndex);

            /*// Adjust the other items index
            for (let taskBarIcon of taskBar.children) {
                let taskBarIconIndex = Number(getComputedStyle(taskBarIcon).getPropertyValue('--index'));

                if(taskBarIconIndex === newDraggedTaskBarIconIndex){
                    taskBarIcon.style.setProperty('--index', draggedTaskBarIconIndex);
                }
            }


            // Adjust other items

            for (let taskBarIcon of taskBar.children) {
                let taskBarIconIndex = Number(getComputedStyle(taskBarIcon).getPropertyValue('--index'));

                if(taskBarIconIndex === newDraggedTaskBarIconIndex){
                    taskBarIcon.style.setProperty('--index', newDraggedTaskBarIconIndex - 1);
                }


        
            }*/

            draggedTaskBarIconIndex = newDraggedTaskBarIconIndex;
        }
    };

    const up = () => {
        removeEventListener("pointermove", move);
        removeEventListener("pointerup", up);

        el.style.setProperty('--offset', "0");

        el.classList.remove('dragged');
    };

    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
}

for (let taskBarIcon of taskBar.children) {
    taskBarIcon.addEventListener('pointerdown', (event) => {
        handleDragStart(event);
    });
}