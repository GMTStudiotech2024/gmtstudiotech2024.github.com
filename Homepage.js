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


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
const contentContainer = document.querySelector('.content-container');

// Enhanced content data with additional details (modify as needed)
const enhancedContent = [
    {
        id: 'design-section',
        title: 'Design Section',
        description: 'Explore the creative design process to build visually appealing and user-friendly interfaces.',
        details: 'This section covers principles of graphic design, user experience (UX) design, and prototyping. It also delves into color theory, typography, and design software.',
        link: '#design-link',
        imageUrl: 'design.jpg' // Add image URL for the section
    },
    {
        id: 'testing-section',
        title: 'Testing Section',
        description: 'Learn about software testing methodologies and best practices to ensure high-quality code.',
        details: 'Topics include unit testing, integration testing, regression testing, and test-driven development (TDD). Understand the importance of test coverage and continuous integration (CI) in software testing.',
        link: '#testing-link',
        imageUrl: 'testing.jpg' // Add image URL for the section
    },
    {
        id: 'documentation-section',
        title: 'Documentation Section',
        description: 'Discover the importance of thorough documentation in the software development lifecycle.',
        details: 'Explore documentation tools, techniques, and tips for creating effective project documentation. This section emphasizes the significance of clear, concise, and up-to-date documentation for project success.',
        link: '#documentation-link',
        imageUrl: 'documentation.jpg' // Add image URL for the section
    },
    // Add more sections with similar structures
];

// Function to create an enhanced content box element with dynamic content
function createEnhancedContentBox(content) {
    const { id, title, description, details, link, imageUrl } = content;

    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');

    const imageElem = document.createElement('img');
    imageElem.src = imageUrl;
    imageElem.alt = title;
    contentBox.appendChild(imageElem);

    const contentDetails = document.createElement('div');
    contentDetails.classList.add('content-details');

    const titleElem = document.createElement('h2');
    titleElem.textContent = title;

    const descriptionElem = document.createElement('p');
    descriptionElem.textContent = description;

    const detailsElem = document.createElement('p');
    detailsElem.textContent = details;

    const linkElem = document.createElement('a');
    linkElem.href = link;
    linkElem.textContent = 'Learn More';

    contentDetails.appendChild(titleElem);
    contentDetails.appendChild(descriptionElem);
    contentDetails.appendChild(detailsElem);
    contentDetails.appendChild(linkElem);

    contentBox.appendChild(contentDetails);

    return contentBox;
}

// Function to append enhanced content boxes to the container
function appendEnhancedContentBoxes(contents) {
    contents.forEach(content => {
        const newContentBox = createEnhancedContentBox(content);
        contentContainer.appendChild(newContentBox);
    });
}

// Append the enhanced content to the content container
appendEnhancedContentBoxes(enhancedContent);
const calendarGrid = document.getElementById('calendarGrid');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar() {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  currentMonthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  let day = 1;
  calendarGrid.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      const calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');

      if ((i === 0 && j < firstDayOfWeek) || day > daysInMonth) {
        calendarDay.textContent = '';
      } else {
        calendarDay.textContent = day;
        if (day === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth()) {
          calendarDay.classList.add('current-month-day');
        }

        calendarDay.addEventListener('click', () => {
          handleDayClick(day);
        });

        day++;
      }

      calendarGrid.appendChild(calendarDay);
    }
  }
}

function handleDayClick(day) {
  console.log(`Selected day: ${day}`);
  // Add your logic for handling the selected day here
}

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
