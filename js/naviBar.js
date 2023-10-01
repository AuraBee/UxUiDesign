// navibar.js

// Function to create and render the navbar
export function renderNavbar() {
    // Get the container element where the navbar will be added
    const navbarContainer = document.getElementById('navbarContainer');

    // Creates the navbar element
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar'); // Classe here added for styling
    // Create an unordered list (ul) for the navbar links
    const navList = document.createElement('ul');

    // Create individual list items (li) for the navbar links
    const homeNavItem = document.createElement('li');
    homeNavItem.textContent = 'Home'; // Set the text content
    const aboutNavItem = document.createElement('li');
    aboutNavItem.textContent = 'About';
    const contactNavItem = document.createElement('li');
    contactNavItem.textContent = 'Contact';

    // Append list items to the navbar
    navList.appendChild(homeNavItem);
    navList.appendChild(aboutNavItem);
    navList.appendChild(contactNavItem);

    // Append the list to the navbar
    navbar.appendChild(navList);

    // Append the navbar to the container
    navbarContainer.appendChild(navbar);
}

// renderNavbar()