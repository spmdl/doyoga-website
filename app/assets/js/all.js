var swiper = new Swiper('.courseSwiper', {
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
    768: {
      spaceBetween: 30,
    }
  },
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    fill: 'row',
    rows: 2,
  },
  // 為了解決 PC 版需要 autoplay
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false
  // }
});

$(function() {
  console.log('Hello Bootstrap5');
});