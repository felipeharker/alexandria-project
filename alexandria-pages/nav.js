// Create the navbar
const nav = document.createElement('nav');

// Create a div for the navbar header text
const navbarHeader = document.createElement('div');
navbarHeader.id = 'navbar-header';

// Create the text element for the navbar header
const headerText = document.createElement('h1');
headerText.textContent = 'A'; // The text to display in the navbar header
headerText.classList.add("h1-nav");

// Append the text to the navbar header div
navbarHeader.appendChild(headerText);

// Create the Home link
const navHome = document.createElement('a');
navHome.href = 'index.html'; // Link to the Home page
navHome.textContent = 'Home';
navHome.classList.add("link-1");

// Create the Documentation dropdown
const navDocumentation = document.createElement('div');
navDocumentation.classList.add('dropdown'); // Add dropdown class

// Create the main link for Documentation
const navDocumentationMain = document.createElement('a');
navDocumentationMain.href = 'https://github.com/felipeharker/alexandria-project/wiki'; // Placeholder link for Documentation
navDocumentationMain.textContent = 'Documentation';
navDocumentationMain.classList.add("link-5");

// Add subitems for the dropdown under Documentation
const dropdownContent = document.createElement('div');
dropdownContent.classList.add('dropdown-content');

// Create sublinks with icons for the dropdown
const subpages = [
    { 
        href: 'https://github.com/felipeharker/alexandria-project/wiki/download', 
        text: 'Download',
    },
    { 
        href: 'https://github.com/felipeharker/alexandria-project/wiki/installation-guide', 
        text: 'Install',
    },
    { 
        href: 'https://github.com/felipeharker/alexandria-project/wiki/getting-started', 
        text: 'Getting Started',
    },
    { 
        href: 'https://github.com/felipeharker/alexandria-project/wiki/Research-and-Literature', 
        text: 'Literature',
    },
    {
        href: 'https://github.com/felipeharker/alexandria-project/wiki/Frequently-Asked-Questions-(FAQs)', 
        text: 'FAQs',
    },
];

subpages.forEach(page => {
    const subLink = document.createElement('a');
    subLink.href = page.href;
    subLink.textContent = page.text;

    dropdownContent.appendChild(subLink);
});

// Append the dropdown content to the Documentation link
navDocumentation.appendChild(navDocumentationMain);
navDocumentation.appendChild(dropdownContent);

// Append all the links to the navbar
// Append the Home link to the navbar before other links
nav.appendChild(navbarHeader);
nav.appendChild(navHome)
nav.appendChild(navDocumentation);

// Append the navbar to the body or another element
document.body.insertBefore(nav, document.body.firstChild);
