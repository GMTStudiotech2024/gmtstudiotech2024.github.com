// Existing JavaScript code
const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
const logoText = document.querySelector(".logo-text");

btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changebtn();
});

function changebtn() {
    const isExpanded = side_bar.classList.contains("expand");

    if (isExpanded) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        logoText.style.display = "inline";
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    const isClickInside = side_bar.contains(event.target) || btn_menu.contains(event.target);
    if (!isClickInside && side_bar.classList.contains("expand")) {
        side_bar.classList.remove("expand");
        changebtn();
    }
});

function updateContent() {
    updateTime();
    updateProgress();
}

function updateTime() {
    const timeElement = document.querySelector('.Time');
    const taiwanTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei' });
    timeElement.textContent = `Current Time in Taiwan: ${taiwanTime}`;
}

function updateProgress() {
    const currentDate = new Date();
    const dayOfYear = getDayOfYear(currentDate);

    // Set progress for HTML, CSS, and JS
    setProgress('html-progress', dayOfYear);
    setProgress('css-progress', dayOfYear);
    setProgress('js-progress', dayOfYear);
}

// Function to get the day of the year
function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to set the progress
function setProgress(progressId, dayOfYear) {
    const progressElement = document.getElementById(progressId);
    const progressValue = (dayOfYear / 365) * 100;

    // Set the progress width
    progressElement.style.width = `${progressValue}%`;
}

// Call the functions initially
updateContent();

// Update the content every second (for testing purposes)
setInterval(updateContent, 1000);

// Toggle visibility of content box section details
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const form = document.getElementById(`${sectionId}-form`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Add task to the list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const tasksList = document.querySelector('#tasks-section ul');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    tasksList.appendChild(newTask);
    taskInput.value = '';
}

// Modal functions
function openModal(task) {
    const modal = document.getElementById('details-modal');
    const taskDetails = document.getElementById('task-details');
    taskDetails.textContent = `Task Details: ${task}`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}

// Sample usage of openModal function
document.querySelector('#tasks-section ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        openModal(event.target.textContent);
    }
});

// New JavaScript functions for Design section
function toggleDesignSection() {
    const section = document.getElementById('design-section');
    const form = document.getElementById('design-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addDesignTask() {
    const designInput = document.getElementById('design-input');
    const designTasksList = document.querySelector('#design-section ul');
    const newDesignTask = document.createElement('li');
    newDesignTask.textContent = designInput.value;
    designTasksList.appendChild(newDesignTask);
    designInput.value = '';
}

function openDesignModal(designTask) {
    const modal = document.getElementById('details-modal');
    const designDetails = document.getElementById('task-details');
    designDetails.textContent = `Design Task Details: ${designTask}`;
    modal.style.display = 'flex';
}

// New JavaScript functions for Testing section
function toggleTestingSection() {
    const section = document.getElementById('testing-section');
    const form = document.getElementById('testing-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addTestingTask() {
    const testingInput = document.getElementById('testing-input');
    const testingTasksList = document.querySelector('#testing-section ul');
    const newTestingTask = document.createElement('li');
    newTestingTask.textContent = testingInput.value;
    testingTasksList.appendChild(newTestingTask);
    testingInput.value = '';
}

function openTestingModal(testingTask) {
    const modal = document.getElementById('details-modal');
    const testingDetails = document.getElementById('task-details');
    testingDetails.textContent = `Testing Task Details: ${testingTask}`;
    modal.style.display = 'flex';
}

// New JavaScript functions for Documentation section
function toggleDocumentationSection() {
    const section = document.getElementById('documentation-section');
    const form = document.getElementById('documentation-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addDocumentationTask() {
    const documentationInput = document.getElementById('documentation-input');
    const documentationTasksList = document.querySelector('#documentation-section ul');
    const newDocumentationTask = document.createElement('li');
    newDocumentationTask.textContent = documentationInput.value;
    documentationTasksList.appendChild(newDocumentationTask);
    documentationInput.value = '';
}

function openDocumentationModal(documentationTask) {
    const modal = document.getElementById('details-modal');
    const documentationDetails = document.getElementById('task-details');
    documentationDetails.textContent = `Documentation Task Details: ${documentationTask}`;
    modal.style.display = 'flex';
}

// Call the functions initially
updateContent();

// Update the content every second (for testing purposes)
setInterval(updateContent, 1000);
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
