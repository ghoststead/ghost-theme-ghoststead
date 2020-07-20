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
        slidesPerView: currentSwiper.getAttribute("data-slidesPerView") || 2,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  }
})));