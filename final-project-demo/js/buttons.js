const backToTop = document.getElementById("btn-back-top");
const btnTheme = document.getElementById("btn-theme");

const btnShowMenu = document.getElementById("btn-show-menu");
const btnHideMenu = document.getElementById("btn-hide-menu");

const menu = document.getElementById("menu");

// Back to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Theme button

// Menu button
btnShowMenu.addEventListener("click", () => {
    menu.classList.add("show");
});
btnHideMenu.addEventListener("click", () => {
    menu.classList.remove("show");
});