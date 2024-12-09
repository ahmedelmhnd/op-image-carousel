let slideIndex = 0; // Shared index

function nextImage() {
  const slides = document.querySelectorAll(".slides");
  hideSlide();

  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slides");
  slides[slideIndex].style.display = "block";
}

function hideSlide(n) {
  const slides = document.querySelectorAll(".slides");
  slides[slideIndex].style.display = "none";
}

function autoSlides() {
    let i;
    let slides = document.querySelectorAll(".slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex == slides.length) {slideIndex = 0}
    slides[slideIndex].style.display = "block";
    setTimeout(() => autoSlides(slideIndex), 2000); // Change image every 2 seconds
  }

export { showSlide, nextImage, autoSlides };
