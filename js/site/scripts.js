/*
    drive: https://drive.google.com/drive/folders/1zAMiM9KALji-P-NXDVkMvVZkaniJwO1Q
    design terv: https://xd.adobe.com/view/9a7f6be9-c001-4340-9e60-c93d9d4ad699-cf2c/specs/
    og oldal: https://miskolcfoldmunka.hu/
*/

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 0;
    header.classList.toggle('bg-dark-blue', scrolled);
    header.classList.toggle('light-shadow', scrolled);
    header.classList.toggle('bg-transparent', !scrolled);
});

const toggler = document.getElementsByClassName("navbar-toggler")[0];

function openCloseToggler() {
    const toggler = document.querySelector('.navbar-toggler');
    
    toggler.classList.toggle('closed');
    toggler.classList.toggle('open');
}

function changeColor(clickedButtonId, className, onColor, offColor) {
    document.querySelectorAll(`.${className}`).forEach(button => {
        button.classList.toggle(onColor, button.id === clickedButtonId);
        button.classList.toggle(offColor, button.id !== clickedButtonId);
    });
}

let isThrottled = false;
let workflowCounter = 0;

function changeWorkflow(clickedButtonId) {
    changeColor(clickedButtonId, 'workflow-btn', 'dark-brown', 'white');
    workflowCounter = parseInt(document.getElementById(clickedButtonId).value);
}

function stepWorkflow(step) {
    if (isThrottled) return;

    isThrottled = true;
    workflowCounter = (workflowCounter + step + 3) % 3;
    
    changeWorkflow(`workflow-${workflowCounter}`);
    
    setTimeout(() => {
        isThrottled = false;
    }, 600);
}

