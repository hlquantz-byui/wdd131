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
    const numPlayers = document.getElementById('num-players').value;
    const playerLevel = document.getElementById('player-level').value;
    const difficulty = document.getElementById('difficulty').value;
    
    // Randomly select an encounter from the appropriate difficulty
    const randomIndex = Math.floor(Math.random() * encounters[difficulty].length);
    const selectedEncounter = encounters[difficulty][randomIndex];
    
    // Display the result
    const resultDiv = document.getElementById('encounter-result');
    resultDiv.innerHTML = `<h3>Generated Encounter:</h3><p>${selectedEncounter}</p>`;
}

// Event listener for the button
document.getElementById('generate-encounter').addEventListener('click', generateEncounter);
