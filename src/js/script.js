// *** CAROUSEL ***
const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const premierItem = document.querySelector('.carousel__item');

if (carousel && prevButton && nextButton && premierItem) {
  // Recalculer au clic pour tenir compte du redimensionnement et de l'espace entre images.
  const getScrollAmount = () => {
    const scrollAmount = premierItem.clientWidth;
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    return scrollAmount + gap;
  };

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });
}
