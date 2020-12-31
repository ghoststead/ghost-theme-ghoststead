'use strict';

import Swiper from 'swiper/bundle';

function setup() {
    var numberOfSwiperClasses = document.getElementsByClassName('swiper-container');
    if (numberOfSwiperClasses.length > 0) {
        for (var i = 0; i < numberOfSwiperClasses.length; i++) {
            var currentSwiper = numberOfSwiperClasses[i];
            var newClassSwiper = 'instance-swiper'+i;
            currentSwiper.classList.add(newClassSwiper);
            new Swiper('.'+newClassSwiper, {
                direction: currentSwiper.getAttribute('data-direction') || 'horizontal',
                slidesPerView: parseInt(currentSwiper.getAttribute('data-slidesPerView')) || 1,
                spaceBetween: parseInt(currentSwiper.getAttribute('data-spaceBetween')) || 30,
                speed: parseInt(currentSwiper.getAttribute('data-speed')) || 300,
                width: currentSwiper.getAttribute('data-width') || null,
                height: currentSwiper.getAttribute('data-height') || null,
                loop: currentSwiper.getAttribute('data-loop') || false,
                autoHeight: currentSwiper.getAttribute('data-autoHeight') || false,
                centeredSlides:currentSwiper.getAttribute('data-centeredSlides') || false,
                pagination: {
                    el: (currentSwiper.getAttribute('data-dotshide') === 'true' ? null : '.swiper-pagination'),
                    clickable: currentSwiper.getAttribute('data-paginationclickable') || false,
                },
                autoplay: {
                    delay: currentSwiper.getAttribute('data-autoplaydelay') || 2500,
                    disableOnInteraction: currentSwiper.getAttribute('data-disableOnInteraction') || false,
                },
                breakpoints: {
                    576: {
                        slidesPerView : currentSwiper.getAttribute('data-sm') || 1,
                    },
                    768: {
                        slidesPerView : currentSwiper.getAttribute('data-md') || 1,
                    },
                    992: {
                        slidesPerView : currentSwiper.getAttribute('data-lg') || 1,
                    },
                    1200: {
                        slidesPerView : currentSwiper.getAttribute('data-xl') || 1,
                    },
                    1400: {
                        slidesPerView : currentSwiper.getAttribute('data-xxl') || 1,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
}

(function () {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setup, 1);
    } else {
        document.addEventListener('DOMContentLoaded', setup);
    }
})();
