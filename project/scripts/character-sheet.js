// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const saveBtn = document.querySelector('.save-btn');
const formElements = document.querySelectorAll('input, textarea');

// Modal elements
const skillModal = document.getElementById('add-skill-modal');
const itemModal = document.getElementById('add-item-modal');

// Buttons that open the modals
const addSkillBtn = document.getElementById('add-skill-btn');
const addItemBtn = document.getElementById('add-item-btn');

// <span> elements that close the modals
const closeSkillModal = document.getElementById('close-skill-modal');
const closeItemModal = document.getElementById('close-item-modal');

// Input fields
const newSkillInput = document.getElementById('new-skill-input');
const newItemInput = document.getElementById('new-item-input');

// Submit buttons
const submitSkillBtn = document.getElementById('submit-skill-btn');
const submitItemBtn = document.getElementById('submit-item-btn');

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    saveBtn.addEventListener('click', saveFormData);
    addSkillBtn.addEventListener('click', () => openModal(skillModal));
    addItemBtn.addEventListener('click', () => openModal(itemModal));
    closeSkillModal.addEventListener('click', () => closeModal(skillModal));
    closeItemModal.addEventListener('click', () => closeModal(itemModal));
    
    window.addEventListener('click', (event) => {
        if (event.target === skillModal) closeModal(skillModal);
        if (event.target === itemModal) closeModal(itemModal);
    });

    submitSkillBtn.addEventListener('click', () => addToList('skills-list', newSkillInput, skillModal));
    submitItemBtn.addEventListener('click', () => addToList('inventory-list', newItemInput, itemModal));
});

// Load saved data from localStorage
function loadSavedData() {
    formElements.forEach(element => {
        const savedValue = localStorage.getItem(element.id);
        if (savedValue) {
            element.value = savedValue;
        }
    });
}

// Save form data to localStorage
function saveFormData() {
    formElements.forEach(element => {
        localStorage.setItem(element.id, element.value);
    });
    alert('Character sheet saved!');
}

// Open a modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Close a modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Add a new item to a list (skills or inventory)
function addToList(listId, inputField, modal) {
    const list = document.getElementById(listId);
    const newItem = inputField.value.trim();
    
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        list.appendChild(li);
        inputField.value = ''; // Clear input field
        closeModal(modal); // Close modal
    } else {
        alert('Please enter a valid item or skill.');
    }
}

// Toggle navigation menu
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
