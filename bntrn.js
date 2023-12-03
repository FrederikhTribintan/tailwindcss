let currentSlide = 1;
const totalSlides = 3;

function goToNextSlide() {
 document.getElementById('slide' + currentSlide).style.transform = 'translateX(-100%)';
 currentSlide = (currentSlide + 1) % totalSlides;
 setTimeout(function () {
    document.getElementById('slide' + currentSlide).style.transform = 'translateX(0%)';
 }, 1000);
}

setInterval(goToNextSlide, 3000);