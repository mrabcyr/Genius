document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        480: {
          slidesPerView: 2, 
          spaceBetween: 20, 
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
  
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletClassActive: 'pagination__button--active'
    },
  
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },
  });
});