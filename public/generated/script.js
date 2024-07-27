// script.js
const testimonios = document.querySelectorAll('.testimonio');
const slider = document.getElementById('testimonios-slider');

let currentSlide = 0;

testimonios.forEach((testimonio, index) => {
    testimonio.style.transform = `translateX(${index * 100}%)`;
});

slider.addEventListener('click', (e) => {
    if (e.target.classList.contains('testimonio')) {
        const targetIndex = Array.prototype.indexOf.call(testimonios, e.target);
        currentSlide = targetIndex;
        testimonios.forEach((testimonio, index) => {
            testimonio.style.transform = `translateX(${index * 100}%)`;
        });
    }
});