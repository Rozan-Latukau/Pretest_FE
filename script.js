// Fungsi untuk membuat carousel berjalan otomatis
function moveCarousel(carouselId, interval) {
    const carousel = document.getElementById(carouselId);
    let currentPosition = 0;

    return function() {
        const cardWidth = carousel.querySelector('.card-profil').offsetWidth;
        const totalCards = carousel.querySelectorAll('.card-profil').length;
        const newPosition = currentPosition - cardWidth;

        if (newPosition <= -(totalCards - 1) * cardWidth) {
            currentPosition = 0;
        } else {
            currentPosition = newPosition;
        }

        carousel.style.transform = `translateX(${currentPosition}px)`;
    };
}

// Fungsi untuk membuat testimonial carousel berjalan otomatis
function moveTestimonialCarousel(carouselId, interval) {
    const testimonialCarousel = document.getElementById(carouselId);
    let currentPosition = 1;

    return function() {
        const cardWidth = testimonialCarousel.querySelector('.card-testimoni').offsetWidth;
        const totalCards = testimonialCarousel.querySelectorAll('.card-testimoni').length;
        const newPosition = currentPosition - cardWidth;

        if (newPosition <= -(totalCards - 1) * cardWidth) {
            currentPosition = 0;
        } else {
            currentPosition = newPosition;
        }

        testimonialCarousel.style.transform = `translateX(${currentPosition}px)`;
    };
}

// Panggil fungsi untuk membuat carousel berjalan otomatis
const carouselMove = moveCarousel('card-carousel', 1500);

// Panggil fungsi untuk membuat testimonial carousel berjalan otomatis
const testimonialCarouselMove = moveTestimonialCarousel('card-testimoni', 3000);

// Panggil setInterval setelah definisi fungsi
setInterval(carouselMove, 1500);
setInterval(testimonialCarouselMove, 3000);