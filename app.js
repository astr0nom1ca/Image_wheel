document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = `${index * slideWidth}px`; // Position each slide
    });

    let currentSlideIndex = 0;

    const moveToSlide = (index) => {
        const offset = -index * slideWidth;
        track.style.transform = `translateX(${offset}px)`; // Move track
        currentSlideIndex = index;
    };

    const nextSlide = () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length; // Wrap around
        moveToSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Wrap around
        moveToSlide(prevIndex);
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});


