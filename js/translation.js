//
// Language change
//

// Data
let currentLanguage = localStorage.getItem("selectedLanguage") || "ENG";

const languageCodes = { ENG: "en", RUS: "ru", POR: "pt", ESP: "es" };

let translations = {};
fetch("js/json/lang.json")
    .then(response => response.json())
    .then(data => {
        translations = data;
        updateSelectedLangText();
        applyTranslations();
    })
    .catch(error => console.error("ERROR: Translation loading error:", error));

// Function for applying translations to elements
function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    if (selectedNationality && translations[currentLanguage]) {
        const nationalityText = translations[currentLanguage]["nationality-" + selectedNationality];
        if (nationalityText) {
            document.getElementById("selected-nationality").textContent = nationalityText;
        }
    }

    document.documentElement.lang = languageCodes[currentLanguage] || "en";
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

    if (targetId === "selected-nationality") {
        selectedNationality = value.toLowerCase();
        applyTranslations();
    }

    if (value === "ENG" || value === "RUS" || value === "POR" || value === "ESP") {
        currentLanguage = value;
        localStorage.setItem("selectedLanguage", currentLanguage);
        applyTranslations();
    }
}