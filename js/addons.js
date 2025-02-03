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