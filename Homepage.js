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
