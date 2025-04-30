const navbar = document.querySelector(".navbar");
let lastPositionY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > lastPositionY && window.scrollY > 200) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
    lastPositionY = window.scrollY;
});