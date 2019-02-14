const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menuButton');

menuButton.addEventListener('click', () => {
    toggleMenu();
})