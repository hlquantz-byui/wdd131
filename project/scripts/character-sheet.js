const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.querySelector('.save-btn');
    const formElements = document.querySelectorAll('input, textarea');

    // Load saved data from localStorage if available
    formElements.forEach(element => {
        const savedValue = localStorage.getItem(element.id);
        if (savedValue) {
            element.value = savedValue;
        }
    });

    // Save form data to localStorage on button click
    saveBtn.addEventListener('click', () => {
        formElements.forEach(element => {
            localStorage.setItem(element.id, element.value);
        });
        alert('Character sheet saved!');
    });
});

// Get modal elements
const skillModal = document.getElementById('add-skill-modal');
const itemModal = document.getElementById('add-item-modal');

// Get buttons that open the modals
const addSkillBtn = document.getElementById('add-skill-btn');
const addItemBtn = document.getElementById('add-item-btn');

// Get <span> elements that close the modals
const closeSkillModal = document.getElementById('close-skill-modal');
const closeItemModal = document.getElementById('close-item-modal');

// Get input fields
const newSkillInput = document.getElementById('new-skill-input');
const newItemInput = document.getElementById('new-item-input');

// Get submit buttons
const submitSkillBtn = document.getElementById('submit-skill-btn');
const submitItemBtn = document.getElementById('submit-item-btn');

// Open modals
addSkillBtn.onclick = function() {
    skillModal.style.display = 'block';
}

addItemBtn.onclick = function() {
    itemModal.style.display = 'block';
}

// Close modals
closeSkillModal.onclick = function() {
    skillModal.style.display = 'none';
}

closeItemModal.onclick = function() {
    itemModal.style.display = 'none';
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == skillModal) {
        skillModal.style.display = 'none';
    }
    if (event.target == itemModal) {
        itemModal.style.display = 'none';
    }
}

// Add skill to list
submitSkillBtn.onclick = function() {
    const skillList = document.getElementById('skills-list');
    const newSkill = newSkillInput.value.trim();
    if (newSkill) {
        const li = document.createElement('li');
        li.textContent = newSkill;
        skillList.appendChild(li);
        newSkillInput.value = ''; // Clear input field
        skillModal.style.display = 'none'; // Close modal
    }
}

// Add item to inventory
submitItemBtn.onclick = function() {
    const inventoryList = document.getElementById('inventory-list');
    const newItem = newItemInput.value.trim();
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        inventoryList.appendChild(li);
        newItemInput.value = ''; // Clear input field
        itemModal.style.display = 'none'; // Close modal
    }
}