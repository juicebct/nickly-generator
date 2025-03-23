//
// Some addtional features for website.
//

// Function to copy nickname
function copyNickname() {
    const nicknameField = document.getElementById("nickname");
    nicknameField.select();
    document.execCommand("copy");
    alert("🎉 Nickname copied: " + nicknameField.value);
}


// Dropdown lists (for language and nationality selection)
function toggleDropdown(selector) {
    document.querySelector(selector).classList.toggle("active");
}

document.addEventListener("click", function (event) {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});

function changeSelection(selector, targetId, value) {
    document.getElementById(targetId).textContent = value;
    document.querySelector(selector).classList.remove("active");
}

// Dark Theme toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-button");
    const rootElement = document.documentElement;
    
    // Icons for light and dark themes
    const moonIcon = "<img src='icons/moon-icon.svg' alt='Dark Mode'/>";
    const sunIcon = "<img src='icons/sun-icon.svg' alt='Light Mode'/>";

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        rootElement.classList.add("dark-theme");
        themeButton.innerHTML = sunIcon;
    } else {
        rootElement.classList.remove("dark-theme");
        themeButton.innerHTML = moonIcon;
    }

    themeButton.addEventListener("click", () => {
        if (rootElement.classList.contains("dark-theme")) {
            rootElement.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
            themeButton.innerHTML = moonIcon;
        } else {
            rootElement.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
            themeButton.innerHTML = sunIcon;
        }
    });
});


/* Mobile menu */
const menuToggle = document.querySelector(".nav-toggle");
const navElements = document.querySelector(".nav");

menuToggle.onclick = function () {
    navElements.classList.toggle("active");
};