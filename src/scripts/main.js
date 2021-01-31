'use strict';

const button = document.querySelector('.nav__toggle');
const menuMobLinks = document.querySelector('.nav__list');

menuMobLinks.addEventListener('click', (event) => {
  toggleMenu();
});

button.addEventListener('click', (event) => {
  event.preventDefault();
  toggleMenu();
});

function toggleMenu() {
  if (button.classList.contains('nav__toggle--active')) {
    button.classList.remove('nav__toggle--active');
  } else {
    button.classList.add('nav__toggle--active');
  }
}
