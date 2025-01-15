// JavaScript source code
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav_container ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
