
document.addEventListener("DOMContentLoaded", function () {
    // const sliderContainer = document.getElementById("slider-container");
    const sliderImage = document.getElementById("slider-image");
    const sliderText = document.getElementById("slider-text");
    const radioButtonsContainer = document.getElementById("radio-buttons");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Define your object containing images and text
    const slides = [
        {
            image: "./images/image1.jpg",
            text: "Slide 1 text here",
        },
        {
            image: "./images/image2.jpg",
            text: "Slide 2 text here",
        },
        {
            image: "./images/image3.jpg",
            text: "Slide 3 text here",
        },
        {
            image: "./images/image4.jpg",
            text: "Slide 4 text here",
        },
        {
            image: "./images/image5.jpg",
            text: "Slide 5 text here",
        },
    ];

    let currentSlideIndex = 0;

    // Function to update the displayed slide
    function updateSlide() {
        const currentSlide = slides[currentSlideIndex];
        sliderImage.src = currentSlide.image;
        sliderText.textContent = currentSlide.text;

        // Update the corresponding radio button
        const radioButtons = document.querySelectorAll(".radio-button");
        radioButtons.forEach((radioButton, index) => {
            radioButton.checked = index === currentSlideIndex;
        });
    }

    // Function to generate radio buttons
    function generateRadioButtons() {
        for (let i = 0; i < slides.length; i++) {
            const radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "slider-radio";
            radioButton.classList.add("radio-button");
            radioButton.addEventListener("click", () => {
                currentSlideIndex = i;
                updateSlide();
            });
            radioButtonsContainer.appendChild(radioButton);
        }
        // Set the first radio button as checked by default
        const firstRadioButton = document.querySelector(".radio-button");
        if (firstRadioButton) {
            firstRadioButton.checked = true;
        }
    }

    // Event listeners for previous and next buttons
    prevButton.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

    nextButton.addEventListener("click", () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlide();
    });

    // Initialize the slider
    generateRadioButtons();
    updateSlide();
});










// // document.addEventListener("DOMContentLoaded", function () {
// //     const images = [
// //     './images/image1.jpg',
// //     './images/image2.jpg',
// //     './images/image3.jpg',
// //     './images/image4.jpg',
// //     './images/image5.jpg', ];
// //     const sliderImage = document.getElementById("slider-image");
// //     const radioButtonsContainer = document.getElementById("radio-buttons");
// //     const prevButton = document.getElementById("prev-button");
// //     const nextButton = document.getElementById("next-button");

// //     let currentImageIndex = 0;

// //     // Function to update the displayed image
// //     function updateImage() {
// //         sliderImage.src += images[currentImageIndex];
// //         // Update the corresponding radio button
// //         const radioButtons = document.querySelectorAll(".radio-button");
// //         radioButtons.forEach((radioButton, index) => {
// //             radioButton.checked = index === currentImageIndex;
// //         });
// //     }

// //     // Function to generate radio buttons
// //     function generateRadioButtons() {
// //         for (let i = 0; i < images.length; i++) {
// //             const radioButton = document.createElement("input");
// //             radioButton.type = "radio";
// //             radioButton.name = "slider-radio";
// //             radioButton.classList.add("radio-button");
// //             radioButton.addEventListener("click", () => {
// //                 currentImageIndex = i;
// //                 updateImage();
// //             });
// //             radioButtonsContainer.appendChild(radioButton);
// //         }
// //         // Set the first radio button as checked by default
// //         const firstRadioButton = document.querySelector(".radio-button");
// //         if (firstRadioButton) {
// //             firstRadioButton.checked = true;
// //         }
// //     }

// //     // Event listeners for previous and next buttons
// //     prevButton.addEventListener("click", () => {
// //         currentImageIndex += (currentImageIndex - 1 + images.length) % images.length;
// //         updateImage();
// //     });

// //     nextButton.addEventListener("click", () => {
// //         currentImageIndex += (currentImageIndex + 1) % images.length;
// //         updateImage();
// //     });

// //     // Initialize the image slider
// //     generateRadioButtons();
// //     updateImage();
// // });