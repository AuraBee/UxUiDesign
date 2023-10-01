export function renderArticle() {
    // Get the container element where the navbar will be added
    const mainArticleEl = document.getElementById('main-article-el');
    // Creates the navbar element
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('heroDiv'); // Classe here added for styling
    // Create an unordered list (ul) for the navbar links
    const heroList = document.createElement('div');


// Create individual list items (li) for the heroDiv elements 
const heroTitle= document.createElement('h1');
heroTitle.classList.add('heroTitle');
heroTitle.textContent = 'Main Title/Co. Name Here'; // Set the text content
const heroSubTitle = document.createElement('h2');
heroSubTitle.classList.add('heroSubTitle'); // Classe here added for styling
heroSubTitle.textContent = 'Sub title/tag-line goes here!';
const heroContent = document.createElement('p');
heroContent.classList.add('heroContent'); // Classe here added for styling
heroContent.textContent = 
'A few lines here around product, ctas and so on'

// Append list items to the  heroDiv
heroList.appendChild(heroTitle);
heroList.appendChild(heroSubTitle);
heroList.appendChild(heroContent);

// Append the list to the  heroDiv
heroDiv.appendChild(heroList);

 // Append the  heroDiv to the mainArticleEl div
 mainArticleEl.appendChild(heroDiv);


}