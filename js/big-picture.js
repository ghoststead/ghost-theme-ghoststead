import BigPicture from 'bigpicture/src/BigPicture';

function setup() {
    var imageLinks = document.querySelectorAll('.image-container a.gallery-link');
    for (var i = 0; i < imageLinks.length; i++) {
        imageLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            BigPicture({
                el: e.target,
                gallery: '.image-container',
            });
        });
    }

    var videoLinks = document.querySelectorAll('.video-container a.gallery-link');
    for (var j = 0; j < videoLinks.length; j++) {
        videoLinks[j].addEventListener('click', function (e) {
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
}

(function () {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setup, 1);
    } else {
        document.addEventListener('DOMContentLoaded', setup);
    }
})();