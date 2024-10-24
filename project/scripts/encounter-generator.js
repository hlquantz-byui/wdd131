const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// encounter-generator.js

// Predefined encounters
const encounters = {
    easy: [
        "1 Goblin",
        "2 Giant Rats",
        "1 Wolf",
        "1 Bandit",
        "1 Giant Spider"
    ],
    medium: [
        "2 Goblins",
        "1 Ogre",
        "3 Giant Rats",
        "1 Worg",
        "1 Skeleton Warrior"
    ],
    hard: [
        "1 Troll",
        "2 Ogres",
        "1 Zombie Giant",
        "3 Bandits",
        "1 Vampire Spawn"
    ]
};

// Function to generate encounters
function generateEncounter() {
    const numPlayers = parseInt(document.getElementById('num-players').value);
    const playerLevel = parseInt(document.getElementById('player-level').value);
    const difficulty = document.getElementById('difficulty').value;

    // Validate inputs
    if (isNaN(numPlayers) || numPlayers <= 0) {
        alert("Please enter a valid number of players.");
        return;
    }
    if (isNaN(playerLevel) || playerLevel <= 0) {
        alert("Please enter a valid player level.");
        return;
    }

    // Filter encounters based on player level (for demonstration purposes)
    const filteredEncounters = encounters[difficulty].filter(encounter => {
        // Placeholder logic: you can adjust this based on actual level requirements for each encounter
        if (difficulty === 'easy' && playerLevel < 3) return true;
        if (difficulty === 'medium' && playerLevel >= 3 && playerLevel < 6) return true;
        if (difficulty === 'hard' && playerLevel >= 6) return true;
        return false;
    });

    // Check if there are any valid encounters
    if (filteredEncounters.length === 0) {
        alert("No suitable encounters found for the given player level.");
        return;
    }

    // Randomly select an encounter from the filtered encounters
    const randomIndex = Math.floor(Math.random() * filteredEncounters.length);
    const selectedEncounter = filteredEncounters[randomIndex];

    // Display the result
    const resultDiv = document.getElementById('encounter-result');
    resultDiv.innerHTML = `
        <h3>Generated Encounter:</h3>
        <p>${selectedEncounter}</p>
    `;
}

// Event listener for the button
document.getElementById('generate-encounter').addEventListener('click', generateEncounter);
