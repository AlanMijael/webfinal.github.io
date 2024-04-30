const galleries = document.querySelectorAll('.gallery-carousel');

galleries.forEach(galleryCarousel => {
  const images = galleryCarousel.querySelectorAll('img');
  const imageWidth = images[0].offsetWidth;

  let currentIndex = 0;

  function moveNext() {
    currentIndex++;
    if (currentIndex >= images.length-3) {
      currentIndex = 0;
    }
    galleryCarousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
  }

  setInterval(moveNext, 2000);
});