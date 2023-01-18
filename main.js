const menuButton = document.querySelector('.js-mobile-menu');
const menu = document.querySelector('.js-menu');

function openMenu() {
    menu.classList.toggle('open');
    menuButton.classList.toggle('open');
}

menuButton.addEventListener('click', openMenu);