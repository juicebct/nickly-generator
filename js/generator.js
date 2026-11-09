//
// Character nicknames generation
//


// Data
let namesData = {};
let selectedNationality = "";

fetch("js/json/names.json")
    .then(response => response.json())
    .then(data => namesData = data)
    .catch(error => console.error("ERROR: Data loading error:", error));

// Generation
function generateNickname() {
    const gender = document.querySelector("input[name='gender']:checked")?.id;
    const nationality = selectedNationality;

    if (!gender) {
        alert("ERROR: Please select the character's gender.");
        return;
    }
    if (!nationality) {
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

    const nickname = `${randomFirstName}_${randomLastName}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");

    document.getElementById("nickname").value = nickname;
}