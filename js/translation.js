//
// Language change
//

// Data
let currentLanguage = localStorage.getItem("selectedLanguage") || "ENG";

let translations = {};
fetch("js/json/lang.json")
    .then(response => response.json())
    .then(data => {
        translations = data;
        updateSelectedLangText();
        applyTranslations();
    });

// Function for applying translations to elements
function applyTranslations() {
    document.querySelectorAll("[lang]").forEach(element => {
        const key = element.getAttribute("lang");
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
}

// Function to update the text of the selected language in the selector
function updateSelectedLangText() {
    const selectedLangElement = document.getElementById("selected-lang");
    if (selectedLangElement) {
        selectedLangElement.textContent = currentLanguage;
    }
}

// Language change
function changeSelection(selector, targetId, value) {
    document.getElementById(targetId).textContent = value;
    document.querySelector(selector).classList.remove("active");

    if (value === "ENG" || value === "RUS" || value === "POR" || value === "ESP") {
        currentLanguage = value;
        localStorage.setItem("selectedLanguage", currentLanguage);
        applyTranslations();
    }
}