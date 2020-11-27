'use strict';

const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const toggleBtn = document.querySelector('.navbar__toggleBtn');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
