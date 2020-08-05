/* Start Swiper */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';
    var numberOfSwiperClasses = document.getElementsByClassName('swiper-container');
    if(numberOfSwiperClasses.length > 0) {
        for (var i = 0; i < numberOfSwiperClasses.length; i++) {
            var currentSwiper = numberOfSwiperClasses[i];
            var newClassSwiper = "instance-swiper"+i;
            currentSwiper.classList.add(newClassSwiper);
            new Swiper("."+newClassSwiper, {
                direction: currentSwiper.getAttribute("data-direction") || 'horizontal',
                slidesPerView: parseInt(currentSwiper.getAttribute("data-slidesPerView")) || 1,
                spaceBetween: parseInt(currentSwiper.getAttribute("data-spaceBetween")) || 30,
                speed: parseInt(currentSwiper.getAttribute("data-speed")) || 300,
                width: currentSwiper.getAttribute("data-width") || null,
                height: currentSwiper.getAttribute("data-height") || null,
                loop: currentSwiper.getAttribute("data-loop") || false,
                autoHeight: currentSwiper.getAttribute("data-autoHeight") || false,
                centeredSlides:currentSwiper.getAttribute("data-centeredSlides") || false,
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
                        slidesPerView : currentSwiper.getAttribute("data-sm") || 1,
                    },
                    768: {
                        slidesPerView : currentSwiper.getAttribute("data-md") || 1,
                    },
                    992: {
                        slidesPerView : currentSwiper.getAttribute("data-lg") || 1,
                    },
                    1200: {
                        slidesPerView : currentSwiper.getAttribute("data-xl") || 1,
                    },
                    1400: {
                        slidesPerView : currentSwiper.getAttribute("data-xxl") || 1,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
})));
/* End Swiper */
(function() {
  /* Start Video & Photo Swiper */
    // four image gallery
    var imageLinks = document.querySelectorAll('.image_container a.gallery-link')
    if(imageLinks.length > 0) {
        for (var i = 0; i < imageLinks.length; i++) {
            imageLinks[i].addEventListener('click', function(e) {
                e.preventDefault()
                BigPicture({
                    el: e.target,
                    gallery: '.image_container',
                });
            });
        }
    }
    function setClickHandler(id, fn) {
        var x = document.getElementsByClassName(id);
        var i;
        if(x.length > 0){
            for (i = 0; i < x.length; i++) {
                x[i].addEventListener("click", fn);
            }
        }
    }
    setClickHandler('video_container', function(e) {
        var className = e.target.className
        if (~className.indexOf('htmlvid')) {
            BigPicture({
                el: e.target,
                vidSrc: e.target.getAttribute('vidSrc'),
            })
        } else if (~className.indexOf('vimeo')) {
            BigPicture({
                el: e.target,
                vimeoSrc: e.target.getAttribute('vimeoSrc'),
            })
        } else if (~className.indexOf('twin-peaks')) {
            BigPicture({
                el: e.target,
                ytSrc: e.target.getAttribute('ytSrc'),
                dimensions: [1226, 900],
            })
        } else if (~className.indexOf('youtube')) {
            BigPicture({
                el: e.target,
                ytSrc: e.target.getAttribute('ytSrc'),
            })
        }
    });
    /* End Video & Photo Swiper */
    /* Start Parallax Image */
    var x = document.getElementsByClassName('parallax');
    var i;
    if(x.length > 0){
        for (i = 0; i < x.length; i++) {
            new jarallax(x[i], {
                speed: 0.2
            });
        }
    }
    /* End Parallax Image */
    /* Start Smooth Scrolling */
    let anchorlinks = document.querySelectorAll('a[href^="#"]')
    if(anchorlinks.length > 0){
        for (let item of anchorlinks) { // relitere
            item.addEventListener('click', (e)=> {
                let hashval = item.getAttribute('href')
                if(hashval !== undefined && hashval != '#'){
                    let target = document.querySelector(hashval)
                    if(target !== null){
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        })
                    }
                }
                history.pushState(null, null, '')
                e.preventDefault();
            })
        }
    }
    /* End Smooth Scrolling */
    /* Start Isotope */
    var isoWork = document.querySelector('.portfolio-content');
    if(isoWork !== null){
        var iso = new Isotope( isoWork, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });
        var isoWorkParent = document.querySelectorAll('.portfolio-filter .filter li');
        let allElements = Array.from(document.querySelectorAll('.portfolio-filter .filter li'));
        isoWorkParent.forEach(filterItem => {
            filterItem.addEventListener('click', function (e) {
                for (let element of allElements) {
                    element.classList.remove('active');
                }
                if(e.target.getAttribute("data-filter")) {
                    e.target.classList.add("active");        
                    iso.arrange({
                        filter: e.target.getAttribute("data-filter")
                    });
                }
            });
        });
    }
    /* End Isotope */
    /* Start Add Default Scroll Spy Param */
    if(window.location.pathname === "/" || window.location.href.indexOf("home") != -1) {
        document.body.setAttribute("data-spy", "scroll");
    } 
    /* End Add Default Scroll Spy Param */
    /* Start Countdown Timer */
    var numberOfCountDown = document.getElementsByClassName('count-down');
    if(numberOfCountDown.length > 0) {
        for (var i = 0; i < numberOfCountDown.length; i++) {
            var currentCountDown = numberOfCountDown[i];
            var CountDownAttr = currentCountDown.getAttribute("data-seconds");
            if(CountDownAttr > 0){
                initTimer(currentCountDown, CountDownAttr);
            }
        }
    }
    function initTimer(i, seconds) {
        var timer = new Timer();
        timer.start({precision: 'seconds', startValues: {seconds: seconds}});
        timer.addEventListener('secondsUpdated', function (e) {
            var childNodes = i.childNodes;
            for (var j = 0; j < childNodes.length; j++) {
                if (childNodes[j].className == "date-box-1") {
                    childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().days;
                }else if (childNodes[j].className == "date-box-2") {
                    childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().hours;
                }else if (childNodes[j].className == "date-box-3") {
                    childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().minutes;
                }else if (childNodes[j].className == "date-box-4") {
                    childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().seconds;
                }
            }
        });
    }
    /* End Countdown Timer */
})();