let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  let nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

function changeSlide(n) {
  let newIndex = (currentSlide + n + slides.length) % slides.length;
  showSlide(newIndex);
}

function goToSlide(n) {
  showSlide(n);
}

// Auto-play every 3 seconds
setInterval(nextSlide, 3000);

// Initial show
showSlide(currentSlide);


