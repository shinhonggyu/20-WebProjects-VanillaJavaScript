const toggleBtn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextBtn = document.querySelector('.next-button');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

toggleBtn.addEventListener('blur', () => {
  menu.classList.remove('show');
});

options.forEach((option) => {
  option.addEventListener('click', selectOption);
});

function selectOption() {
  const value = this.textContent;
  toggleBtn.textContent = value;
  toggleBtn.classList.add('selected');
  nextBtn.removeAttribute('disabled');
}
