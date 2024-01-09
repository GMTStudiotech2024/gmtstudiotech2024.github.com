// Sidebar functionality
const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
const logoText = document.querySelector(".logo-text");

// Toggle sidebar expand/collapse
btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changeBtnIcon();
});

// Change button icon based on sidebar state
function changeBtnIcon() {
    const isExpanded = side_bar.classList.contains("expand");

    if (isExpanded) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        logoText.style.display = "inline";
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

// Close sidebar on click outside
document.addEventListener("click", function (event) {
    const isClickInside = side_bar.contains(event.target) || btn_menu.contains(event.target);
    if (!isClickInside && side_bar.classList.contains("expand")) {
        side_bar.classList.remove("expand");
        changeBtnIcon();
    }
});

// Dark mode functionality
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    setDarkModePreference(isDarkMode);
}

function setDarkModePreference(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
}

function getDarkModePreference() {
    return localStorage.getItem('darkMode') === 'true';
}

// Apply dark mode on page load
window.addEventListener('load', function () {
    const savedDarkMode = getDarkModePreference();
    if (savedDarkMode) {
        document.body.classList.toggle('dark-mode', savedDarkMode);
    }
});

// Dark mode toggle button event listener
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
    toggleDarkMode();
});

// Copy code snippet functionality
document.getElementById('copyButton').addEventListener('click', function() {
    const codeSnippet = document.getElementById('codeSnippet');
    const textArea = document.createElement('textarea');
    textArea.value = codeSnippet.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
});
