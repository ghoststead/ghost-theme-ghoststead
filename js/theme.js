/* Start Swiper */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';
  var numberOfSwiperClasses = document.getElementsByClassName('swiper-container');
  if(numberOfSwiperClasses.length > 0) {
    for (var i = 0; i < numberOfSwiperClasses.length; i++) {
      var currentSwiper = numberOfSwiperClasses[i];
      var newClassSwiper = "instance-swiper"+i;
      currentSwiper.classList.add(newClassSwiper);
      new Swiper("."+newClassSwiper, {
        direction: currentSwiper.getAttribute("data-direction") || 'horizontal',
        slidesPerView: parseInt(currentSwiper.getAttribute("data-slidesPerView")) || 2,
        spaceBetween: parseInt(currentSwiper.getAttribute("data-spaceBetween")) || 30,
        speed: parseInt(currentSwiper.getAttribute("data-speed")) || 300,
        width: currentSwiper.getAttribute("data-width") || null,
        height: currentSwiper.getAttribute("data-height") || null,
        loop: currentSwiper.getAttribute("data-loop") || false,
        autoHeight: currentSwiper.getAttribute("data-autoHeight") || false,
        centeredSlides:currentSwiper.getAttribute("data-centeredSlides") || false,
        freeMode: true,
        pagination: {
          el: (currentSwiper.getAttribute("data-dotshide") == 'true' ? null : '.swiper-pagination'),
          clickable: currentSwiper.getAttribute("data-paginationclickable") || false,
        },
        autoplay: {
          delay: currentSwiper.getAttribute("data-autoplaydelay") || 2500,
          disableOnInteraction: currentSwiper.getAttribute("data-disableOnInteraction") || false,
        },
        breakpoints: {
          576: {
              slidesPerView : currentSwiper.getAttribute("data-sm") || 5,
          },
          768: {
              slidesPerView : currentSwiper.getAttribute("data-md") || 5,
          },
          992: {
              slidesPerView : currentSwiper.getAttribute("data-lg") || 5,
          },
          1200: {
              slidesPerView : currentSwiper.getAttribute("data-xl") || 5,
          },
          1400: {
              slidesPerView : currentSwiper.getAttribute("data-xxl") || 5,
          },
        }
      });
    }
  }
})));
/* End Swiper */