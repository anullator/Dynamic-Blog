// VARIABLE DECLARATIONS

// toggle button
const toggleBtnEl = document.querySelector(".toggle-mode");
const bodyEl = document.querySelector("body");

// dark icon
const darkModeIcon = "&#127771;";
//light icon
const lightModeIcon = "&#9728;&#65039;";


window.onload = () => {
    // const startMode = toggleBtnEl.dataset.theme;
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
    // console.log(bodyEl.dataset.theme);
}

function handleToggle() {
    const currMode = bodyEl.dataset.theme;
    toggleMode(currMode);
} 

// Add event listeners

toggleBtnEl.addEventListener("click", handleToggle);

