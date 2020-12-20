/* Start Swiper */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';
    var numberOfSwiperClasses = document.getElementsByClassName('swiper-container');
    if(numberOfSwiperClasses.length > 0) {
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
                    el: (currentSwiper.getAttribute('data-dotshide') == 'true' ? null : '.swiper-pagination'),
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
})));
/* End Swiper */
/* Start Video & Photo Swiper */
// four image gallery
function customImageGallery(){
    var imageLinks = document.querySelectorAll('.image_container a.gallery-link');
    if(imageLinks.length > 0) {
        for (var i = 0; i < imageLinks.length; i++) {
            imageLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
                BigPicture({
                    el: e.target,
                    gallery: '.image_container',
                });
            });
        }
    }
    setClickHandler('video_container', function(e) {
        var className = e.target.className;
        if (~className.indexOf('htmlvid')) {
            BigPicture({
                el: e.target,
                vidSrc: e.target.getAttribute('vidSrc'),
            });
        } else if (~className.indexOf('vimeo')) {
            BigPicture({
                el: e.target,
                vimeoSrc: e.target.getAttribute('vimeoSrc'),
            });
        } else if (~className.indexOf('twin-peaks')) {
            BigPicture({
                el: e.target,
                ytSrc: e.target.getAttribute('ytSrc'),
                dimensions: [1226, 900],
            });
        } else if (~className.indexOf('youtube')) {
            BigPicture({
                el: e.target,
                ytSrc: e.target.getAttribute('ytSrc'),
            });
        }
    });
}
function setClickHandler(id, fn) {
    var x = document.getElementsByClassName(id);
    var i;
    if(x.length > 0){
        for (i = 0; i < x.length; i++) {
            x[i].addEventListener('click', fn);
        }
    }
}
/* End Video & Photo Swiper */
/* Start Parallax Image */
function customParallaxImage(){
    var x = document.getElementsByClassName('parallax');
    if(x.length > 0){
        for (var i = 0; i < x.length; i++) {
            new jarallax(x[i], {
                speed: 0.2
            });
        }
    }
}
/* End Parallax Image */
/* Start Smooth Scrolling */
/* function customSmoothScrolling(){
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    if(anchorLinks.length > 0){
        for (var i = 0; i < anchorLinks.length; i++) {
            var item = anchorLinks[i];
            item.addEventListener('click', function (e) {
                var hashval = item.getAttribute('href');
                if(hashval !== undefined && hashval !== '#'){
                    var target = document.querySelector(hashval);
                    if(target !== null){
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                history.pushState(null, null, '');
                e.preventDefault();
            });
        }
    }
}
*/
/* End Smooth Scrolling */
/* Start Isotope */
function customIsotope(){
    var isoWork = document.querySelector('.portfolio-content');
    if(isoWork !== null){
        var iso = new Isotope(isoWork, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });
        var isoWorkParent = document.querySelectorAll('.portfolio-filter .filter li');
        var allElements = Array.from(document.querySelectorAll('.portfolio-filter .filter li'));
        isoWorkParent.forEach(function(filterItem) {
            filterItem.addEventListener('click', function (e) {
                for (var i = 0; i < allElements.length; i++) {
                    allElements[i].classList.remove('active');
                }
                if(e.target.getAttribute('data-filter')) {
                    e.target.classList.add('active');
                    iso.arrange({
                        filter: e.target.getAttribute('data-filter')
                    });
                }
            });
        });
    }
}
/* End Isotope */
/* Start Add Default Scroll Spy Param */
function customScrollSpyParam(){
    var mainHeader = document.querySelector('#main-header');
    if (mainHeader) {
        if (!mainHeader.classList.contains('header-inner')) {
            document.body.setAttribute('data-bs-spy', 'scroll');
        }
    }
}
/* End Add Default Scroll Spy Param */
/* Start Countdown Timer */
function customCountdownTimer(){
    var numberOfCountDown = document.getElementsByClassName('count-down');
    if(numberOfCountDown.length > 0) {
        for (var i = 0; i < numberOfCountDown.length; i++) {
            var currentCountDown = numberOfCountDown[i];
            var CountDownAttr = currentCountDown.getAttribute('data-date');
            if(CountDownAttr !== ''){
                initTimer(currentCountDown, CountDownAttr);
            }
        }
    }
}
function GetSeconds(end_date){
    var date_now = new Date();
    var date_future = new Date(end_date);
    var diff =(date_future.getTime() - date_now.getTime()) / 1000;
    diff /= 60;
    var minutes = Math.abs(Math.round(diff));
    return minutes * 60;
}

function initTimer(i, date) {
    var timer = new Timer();
    var seconds = GetSeconds(date);
    timer.start({precision: 'seconds', startValues: {seconds: seconds}});
    timer.addEventListener('secondsUpdated', function () {
        var childNodes = i.childNodes;
        for (var j = 0; j < childNodes.length; j++) {
            if (childNodes[j].className === 'date-box-1') {
                childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().days;
            }else if (childNodes[j].className === 'date-box-2') {
                childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().hours;
            }else if (childNodes[j].className === 'date-box-3') {
                childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().minutes;
            }else if (childNodes[j].className === 'date-box-4') {
                childNodes[j].childNodes[0].innerHTML = timer.getTimeValues().seconds;
            }
        }
    });
}
/* End Countdown Timer */
/* Start Pie Chart */
function customPieChart(){
    var chart = document.getElementsByClassName('pie_chart_in');
    if(chart.length > 0) {
        for (var i = 0; i < chart.length; i++) {
            customSetPieCharts(chart[i]);
        }
    }
}
function customSetPieCharts(p){
    var pie_chart_size = p.getAttribute('data-size') || '160',
        pie_chart_animate = p.getAttribute('data-animate') || '2000',
        pie_chart_width = p.getAttribute('data-width') || '6',
        pie_chart_color = p.getAttribute('data-color') || '#84ba3f',
        pie_chart_track_color = p.getAttribute('data-trackcolor') || 'rgba(0,0,0,0.10)',
        pie_chart_line_Cap = p.getAttribute('data-lineCap') || 'round';
    var childNodes = p.querySelector('span.middle');

    new EasyPieChart(p, {
        size: Number(pie_chart_size),
        animate: Number(pie_chart_animate),
        trackColor: pie_chart_track_color,
        lineWidth: Number(pie_chart_width),
        barColor: pie_chart_color,
        scaleColor: false,
        lineCap: pie_chart_line_Cap,
        onStep: function (from, to, percent) {
            childNodes.innerHTML = Math.round(percent)+'%';
        }
    });
}
/* End Pie Chart */
/* Start particlesJS */
function customParticlesJS(){
    particlesJS('particles-box',
        {
            'particles': {
                'number': {
                    'value': 80,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#ffffff'
                },
                'shape': {
                    'type': 'circle',
                    'stroke': {
                        'width': 0,
                        'color': '#000000'
                    },
                    'polygon': {
                        'nb_sides': 5
                    },
                    'image': {
                        'src': 'img/github.svg',
                        'width': 100,
                        'height': 100
                    }
                },
                'opacity': {
                    'value': 0.5,
                    'random': false,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 5,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 40,
                        'size_min': 0.1,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#ffffff',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 6,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': true,
                        'mode': 'repulse'
                    },
                    'onclick': {
                        'enable': true,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 400,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 400,
                        'size': 40,
                        'duration': 2,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true,
            'config_demo': {
                'hide_card': false,
                'background_color': '#b61924',
                'background_image': '',
                'background_position': '50% 50%',
                'background_repeat': 'no-repeat',
                'background_size': 'cover'
            }
        }
    );
}
/* END particlesJS */
(function() {
    customImageGallery();
    customParallaxImage();
    //customSmoothScrolling();
    customScrollSpyParam();
    customCountdownTimer();
    var isoContent = document.querySelector('.portfolio-content');
    if(isoContent !== null) {
        customIsotope();
    }
    var blogSearchInput = document.querySelector('#blogsearch-input');
    var blogSearchResult = document.querySelector('#blogsearch-result');
    if(blogSearchInput !== null && blogSearchResult !== null) {
        new GhostFinder({
            input: '#blogsearch-input',
            showResult: '#blogsearch-result',
            contentApiKey: 'CONTENT_API_KEY',
        });
    }
    var checkPieChartLoaded = false;
    window.addEventListener('scroll', function() {
        var element = document.getElementsByClassName('piechartcontainer');
        if(element.length > 0) {
            var position = element[0].getBoundingClientRect();
            // checking for partial visibility
            if(position.top < window.innerHeight && position.bottom >= 0 && !checkPieChartLoaded) {
                checkPieChartLoaded = true;
                customPieChart();
            }
        }
    });
    if(typeof particlesJS !== 'undefined') {
        var particlesElement = document.getElementsByClassName('particles-box');
        if(particlesElement.length === 1) {
            if(particlesElement[0].id === 'particles-box') {
                customParticlesJS();
            }
        }
    }
    /*
     * Enable forms that have a data-form-type attribute set to 'contact' by:
     * - append a hidden form element containing the customer id.
     * - set the method attribute to 'POST'
     * - set the action to the /form endpoint
     */
    var formElements = document.querySelectorAll('form[data-form-type="contact"]');
    if(formElements.length > 0) {
        for (var i = 0; i < formElements.length; i++) {
            var hiddenInputElement = document.createElement('input');
            hiddenInputElement.setAttribute('hidden', 'true');
            hiddenInputElement.setAttribute('name', 'ghoststead_api_key');
            hiddenInputElement.setAttribute('value', 'GHOSTSTEAD_API_KEY');
            formElements[i].appendChild(hiddenInputElement);
            formElements[i].setAttribute('method', 'POST');
            formElements[i].setAttribute('action', 'https://api.ghoststead.com/form');
        }
    }
})();
