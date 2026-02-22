// DOM
const body = document.querySelector('body');
const darkButton = document.querySelector('#darkButton');
const whiteButton = document.querySelector('#whiteButton');

// Eventos
darkButton.addEventListener('click', () => {
    body.classList.remove('white');
    body.classList.add('dark');

    document.querySelector('.active').classList.remove('active');
    darkButton.classList.add('active');
});

whiteButton.addEventListener('click', () => {
    body.classList.remove('dark');
    body.classList.add('white');

    document.querySelector('.active').classList.remove('active');
    whiteButton.classList.add('active');
});