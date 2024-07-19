// script.js
const testimonios = document.getElementById('testimonios');
const slider = new Slider(testimonios, {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

function Slider(element, options) {
    this.element = element;
    this.options = options;
    this.slides = element.children;
    this.currentSlide = 0;

    this.init();
}

Slider.prototype.init = function() {
    this.element.style.overflow = 'hidden';
    this.element.style.width = `${this.slides.length * 100}%`;
    this.slides.forEach((slide, index) => {
        slide.style.width = `${100 / this.slides.length}%`;
        slide.style.float = 'left';
    });
};

Slider.prototype.nextSlide = function() {
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
        this.currentSlide = 0;
    }
    this.element.style.transform = `translateX(-${this.currentSlide * 100}%)`;
};

Slider.prototype.prevSlide = function() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
    }
    this.element.style.transform = `translateX(-${this.currentSlide * 100}%)`;
};