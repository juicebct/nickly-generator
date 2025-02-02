//
// The logic for generating character nicknames is described here.
//

// Loading data from the file names.json
let namesData = {};

fetch("names.json")
    .then(response => response.json())
    .then(data => namesData = data)
    .catch(error => console.error("ERROR: Data loading error:", error));

// Main function
function generateNickname() {
    // Getting user selection...
    const gender = document.querySelector("input[name='gender']:checked")?.id;
    const nationality = document.getElementById("selected-nationality").textContent.toLowerCase();

    // Some checks so that the user cannot miss a choice
    if (!gender) {
        alert("ERROR: Please select the character's gender.");
        return;
    }
    if (nationality === "select option") {
        alert("ERROR: Please select the character's nationality.");
        return;
    }

    // Getting arrays of names and surnames...
    const firstNames = namesData[gender]?.[nationality]?.first_names;
    const lastNames = namesData[gender]?.[nationality]?.last_names;

    // Checking for availability of data for selected parameters (does the file names.json contain similar parameters and data for them)
    if (!firstNames || !lastNames) {
        alert("ERROR: No data for such parameters.");
        return;
    }

    // Random generation
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Updating nickname in nicknamebox
    document.getElementById("nickname").value = `${randomFirstName}_${randomLastName}`;
}