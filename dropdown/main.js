const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');
const ul = document.querySelector('.dropdown-menu');

ul.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    const value = event.target.textContent.trim();
    toggleButton.innerText = value;
    toggleButton.classList.add('selected');
    menu.classList.remove('show');
    nextButton.removeAttribute('disabled');
  }
});

dropdown.addEventListener('mouseenter', () => {
  menu.classList.add('show');
});

dropdown.addEventListener('mouseleave', () => {
  menu.classList.remove('show');
});

// toggleButton.addEventListener('click', function () {
//   menu.classList.toggle('show');
// });

// toggleButton.addEventListener('blur', function () {
//   menu.classList.remove('show');
// });
