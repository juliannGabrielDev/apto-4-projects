const toggleTheme = document.getElementById("theme-checkbox");

if (localStorage.getItem("darkMode") === "enabled") {
    toggleTheme.checked = true;
}

toggleTheme.addEventListener("change", () => {
    if (toggleTheme.checked) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});