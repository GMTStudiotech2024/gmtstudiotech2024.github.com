// Sidebar functionality
const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
const logoText = document.querySelector(".logo-text");

btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changeBtn();
});

function changeBtn() {
    const isExpanded = side_bar.classList.contains("expand");

    if (isExpanded) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        logoText.style.display = "inline";
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

document.addEventListener("click", function (event) {
    const isClickInside = side_bar.contains(event.target) || btn_menu.contains(event.target);
    if (!isClickInside && side_bar.classList.contains("expand")) {
        side_bar.classList.remove("expand");
        changeBtn();
    }
});

// Dark mode functionality
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    setDarkModePreference(isDarkMode ? 'dark' : 'light');
}

function setDarkModePreference(mode) {
    localStorage.setItem('darkMode', mode);
}

function getDarkModePreference() {
    return localStorage.getItem('darkMode');
}

window.addEventListener('load', function () {
    const savedDarkMode = getDarkModePreference();
    if (savedDarkMode) {
        document.body.classList.toggle('dark-mode', savedDarkMode === 'dark');
    }
});

// Sidebar state in local storage
function setSidebarState(expanded) {
    localStorage.setItem('sidebarExpanded', expanded);
}

function getSidebarState() {
    return localStorage.getItem('sidebarExpanded') === 'true';
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const isExpanded = sidebar.classList.toggle('expand');
    setSidebarState(isExpanded);
}

// Handle form submission
const form = document.getElementById('eventForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const startDate = document.getElementById('startDateInput').value;
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descInput').value;

    const record = {
        startDate,
        title,
        description
    };

    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));

    displayRecords();
    form.reset();
});

// Dark mode toggle button event listener
const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', function () {
    isDarkMode = !isDarkMode;

    const iconElement = darkModeToggle.querySelector('i');
    iconElement.classList.toggle('bx-rotate-180');
    iconElement.style.color = isDarkMode ? '#ffffff' : '';

    toggleDarkMode();
});

// Display saved dark mode preference on load
window.addEventListener('load', function () {
    const savedDarkMode = getDarkModePreference();
    if (savedDarkMode) {
        document.body.classList.toggle('dark-mode', savedDarkMode === 'dark');
    }
});
