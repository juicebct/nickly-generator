//
// Some addtional features for website like: copying nicknames to clipboard, dropdown lists logic.
//

// Function to copy nickname
function copyNickname() {
    const nicknameField = document.getElementById("nickname");
    nicknameField.select();
    document.execCommand("copy");
    alert("Nickname copied: " + nicknameField.value);
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

// Dark Theme (range input)
document.addEventListener("DOMContentLoaded", () => {
    const rangeInput = document.getElementById("theme-range");
    const rootElement = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        rootElement.classList.add("dark-theme");
        rangeInput.value = "1";
    } else {
        rootElement.classList.remove("dark-theme");
        rangeInput.value = "0";
    }

    rangeInput.addEventListener("input", () => {
        if (rangeInput.value === "1") {
            rootElement.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            rootElement.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    });
});

/* Mobile menu */
const menuToggle = document.querySelector(".nav-toggle");
const navElements = document.querySelector(".nav");

menuToggle.onclick = function () {
    navElements.classList.toggle("active");
};