function nextImage(n) {
  const slides = document.querySelectorAll(".slides");
  hideSlide(n);

  if (n == slides.length - 1) {
    n = 0;
  } else {
    n++;
  }
  showSlide(n);
  return n;
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slides");
  slides[n].classList = "slides show";
}

function hideSlide(n) {
  const slides = document.querySelectorAll(".slides");
  slides[n].classList = "slides";
}

export { showSlide, nextImage };
