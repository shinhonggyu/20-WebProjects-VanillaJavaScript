"user strict";

const toggleBtn = document.querySelector("#toggle");
const signUpBtn = document.querySelector("#open");
const nav = document.querySelector("nav");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

signUpBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Hide modal on outside click
window.addEventListener("click", (event) => {
  event.target == modal ? modal.classList.remove("show") : false;
});
