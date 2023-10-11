// navibar.js

// Function to create and render the navbar
export function renderNavbar() {
    // Gets the container element where the navbar will be added
    const navbarContainer = document.getElementById('navbarContainer');

    // Creates the navbar element
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar'); // Classe here added for styling
    // Creates the unordered list (ul) for the navbar links
    const navList = document.createElement('ul');

    // Creates individual list items (li) for the navbar links
    const homeNavItem = document.createElement('li');
    homeNavItem.textContent = 'Home'; // Set the text content
    const aboutNavItem = document.createElement('li');
    aboutNavItem.textContent = 'About';
    const contactNavItem = document.createElement('li');
    contactNavItem.textContent = 'Contact';

    // Appends list items to the navbar
    navList.appendChild(homeNavItem);
    navList.appendChild(aboutNavItem);
    navList.appendChild(contactNavItem);

    // Appends the list to the navbar
    navbar.appendChild(navList);

    // Appends the navbar to the container
    navbarContainer.appendChild(navbar);
}

// renderNavbar()
