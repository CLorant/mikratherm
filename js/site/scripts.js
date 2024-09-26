/*
    drive: https://drive.google.com/drive/folders/1zAMiM9KALji-P-NXDVkMvVZkaniJwO1Q
    design terv: https://xd.adobe.com/view/9a7f6be9-c001-4340-9e60-c93d9d4ad699-cf2c/specs/
    og oldal: https://miskolcfoldmunka.hu/
*/

const desktopNav = document.getElementById('desktop-nav');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 0;
    desktopNav.classList.toggle('bg-dark-blue', scrolled);
    desktopNav.classList.toggle('light-shadow', scrolled);
    desktopNav.classList.toggle('bg-transparent', !scrolled);
});

const mobileToggler = document.getElementById('mobile-toggler');

function closeNavbar() {
    mobileToggler.click();
}

const togglers = document.getElementsByClassName('navbar-toggler');

function openCloseToggler() {
    for (toggler of togglers) {
        toggler.classList.toggle('closed');
        toggler.classList.toggle('open');
    }
}

const sidebar = document.getElementById('sidebar');
const darkMobileBg = document.getElementById('dark-mobile-bg');

function toggleSidebar() {
    openCloseToggler();

    sidebar.classList.toggle('closed');
    darkMobileBg.classList.toggle('active');
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

document.getElementById("year").innerHTML = new Date().getFullYear();

function addAnimationOnScroll(elements) {
    const animateElements = () => {
        elements.forEach((element) => {
            const bounding = element.getBoundingClientRect();

            // Ignore right bounding due to right overflow use
            const topMatches =  bounding.top >= 0;
            const leftMatches = bounding.left >= 0;
            const bottomMatches = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);

            if (topMatches && leftMatches && bottomMatches) {
                element.classList.remove('initially-hidden');
                element.classList.add('animate', 'pop');
            }
        });
    }

    animateElements();
    window.addEventListener('scroll', animateElements);
}

const initiallyHidden = document.querySelectorAll('.initially-hidden');
addAnimationOnScroll(initiallyHidden);

baguetteBox.run('#gallery');