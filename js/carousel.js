

// // Get references to the elements
// // export function carouselHeading() {
// // const carouselContainer = document.getElementById("carousel-container")
// // const carouselTitle= document.createElement('h1');
// // carouselTitle.classList.add('carouselTitle');
// // carouselContainer.textContent += 'Welcome to Londinium Azamysson';
// // }

// const carouselImg = document.querySelectorAll('carouselImg');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// // Array of image URLs
// const imageUrls = [
//   './images/image1.jpg',
//   './images/image2.jpg',
//   './images/image3.jpg',
//   './images/image4.jpg',
//   './images/image5.jpg',
//   // Add more image URLs here
// ];

// let currentIndex = 0;


// // Function to display the current image
// export function showImage(index) {
//     carouselImg.src += imageUrls[index];
//   }

// // Event listeners for previous and next buttons
// prevBtn.addEventListener('click', () => {
//     currentIndex += (currentIndex - 1 + imageUrls.length) % imageUrls.length;
//     showImage(currentIndex);
//   });
  
//   nextBtn.addEventListener('click', () => {
//     currentIndex += (currentIndex + 1) % imageUrls.length;
//     showImage(currentIndex);
//   });
  
//   // Initialize the carousel with the first image
//   showImage(currentIndex);



