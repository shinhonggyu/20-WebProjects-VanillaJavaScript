const signup = document.querySelector('.signup-form');
const checkAll = document.querySelector('.form-check-all input');
const checkboxes = document.querySelectorAll('.form-group input');
const submitButton = document.querySelector('button');

const agreements = {
  termsOfService: false,
  privacyPolicy: false,
  allowPromotions: false,
};

signup.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit');
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('input', toggleCheckbox);
});

function toggleCheckbox(event) {
  const { checked, id } = event.currentTarget;
  console.log(checked, id);
  if (!checked) {
    checkAll.checked = false;
  }
  agreements[id] = checked;
  console.log(agreements);
  this.parentNode.classList.toggle('active');
  toggleSubmitButton();
}

function toggleSubmitButton() {
  const { termsOfService, privacyPolicy } = agreements;
  if (termsOfService && privacyPolicy) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
  }
}

checkAll.addEventListener('click', (event) => {
  const { checked } = event.currentTarget;
  if (checked) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
      agreements[checkbox.id] = true;
      checkbox.parentNode.classList.add('active');
    });
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      agreements[checkbox.id] = false;
      checkbox.parentNode.classList.remove('active');
    });
  }
  toggleSubmitButton();
});
