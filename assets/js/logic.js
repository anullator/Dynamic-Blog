// VARIABLE DECLARATIONS

// elements
const toggleBtnEl = document.querySelector(".toggle-btn");
const bodyEl = document.querySelector("body");

// icons
const darkModeIcon = "&#127771;";
const lightModeIcon = "&#9728;&#65039;";

//sets inital color theme
window.onload = () => {
    const startMode = bodyEl.dataset.theme;
    toggleMode(startMode);
}

// Toggle between light and dark mode
function toggleMode(currMode) {
    if (currMode === "light") {
        bodyEl.setAttribute("data-theme", "dark");
        toggleBtnEl.innerHTML = darkModeIcon;
    } else {
        bodyEl.setAttribute("data-theme", "light");
        toggleBtnEl.innerHTML = lightModeIcon;
    }
}

// toggle handler
function handleToggle() {
    const currMode = bodyEl.dataset.theme;
    toggleMode(currMode);
} 

// event listeners
toggleBtnEl.addEventListener("click", handleToggle);