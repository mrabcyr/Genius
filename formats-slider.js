document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        800: {
          slidesPerView: 2, 
        },
        1280: {
          slidesPerView: 3,
        }
      },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination__button',
      bulletActiveClass: 'swiper-pagination__button--active'
    },
  
    navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.carousel-button.prev',
    },
  });
});