//
// Character nicknames generation
//


// Data
let namesData = {};

fetch("js/json/names.json")
    .then(response => response.json())
    .then(data => namesData = data)
    .catch(error => console.error("ERROR: Data loading error:", error));

// Generation
function generateNickname() {
    const gender = document.querySelector("input[name='gender']:checked")?.id;
    const nationality = document.getElementById("selected-nationality").textContent.toLowerCase();

    if (!gender) {
        alert("ERROR: Please select the character's gender.");
        return;
    }
    if (nationality === "select option") {
        alert("ERROR: Please select the character's nationality.");
        return;
    }

    const firstNames = namesData[gender]?.[nationality]?.first_names;
    const lastNames = namesData[gender]?.[nationality]?.last_names;

    if (!firstNames || !lastNames) {
        alert("ERROR: No data for such parameters. Please use all parameters!");
        return;
    }

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    document.getElementById("nickname").value = `${randomFirstName}_${randomLastName}`;
}