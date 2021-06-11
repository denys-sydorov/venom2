const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
    console.log('Вы кликнули по меню');
    menu.classList.add('is-active');
    menuCloseButton.classList.add('is-active');
});

menuCloseButton.addEventListener('click', () => {
    console.log('Вы кликнули по закрыть');
    menu.classList.remove('is-active');
    menuCloseButton.classList.remove('is-active');
});    