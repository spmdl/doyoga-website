"use strict";

var swiper = new Swiper('.courseSwiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    fill: 'row',
    rows: 2
  },
  breakpoints: {
    768: {
      spaceBetween: 30
    },
    992: {
      slidesPerView: 1.38,
      spaceBetween: 30,
      grid: {
        rows: 1
      }
    }
  },
  // 為了解決 PC 版需要 autoplay
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});
var feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  grid: {
    fill: 'row',
    rows: 3
  },
  breakpoints: {
    768: {
      slidesPerView: 2.12,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    }
  },
  navigation: {
    prevEl: ".swiper-btn-prev",
    nextEl: ".swiper-btn-next"
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});
var courseLevelSwiper = new Swiper(".courseLevelSwiper", {
  slidesPerView: 1,
  grid: {
    fill: 'row',
    rows: 3
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 1
      }
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1
      }
    }
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});
var courseRecommendSwiper = new Swiper(".courseRecommendSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  breakpoints: {
    592: {
      centeredSlides: false,
      slidesPerView: 2
    },
    720: {
      centeredSlides: true,
      slidesPerView: 2.5
    },
    992: {
      centeredSlides: false,
      slidesPerView: 3
    },
    1200: {
      centeredSlides: true,
      slidesPerView: 4.2
    }
  }
});
$(function () {
  console.log('Hello Bootstrap5');
});
//# sourceMappingURL=all.js.map
