// Initialize the Carousel with faster speed and click-based navigation
var uniteXCarousel = document.getElementById('uniteXCarousel');
var carousel = new bootstrap.Carousel(uniteXCarousel, {
    interval: 2000,  // Faster speed (change to desired interval in milliseconds)
    ride: true     // No automatic sliding
});

// Carousel buttons will control the navigation
var prevButton = document.querySelector('.carousel-control-prev');
var nextButton = document.querySelector('.carousel-control-next');

prevButton.addEventListener('click', function () {
    carousel.prev();
});

nextButton.addEventListener('click', function () {
    carousel.next();
});
