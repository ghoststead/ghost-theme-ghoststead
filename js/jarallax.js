// noinspection ES6CheckImport
import {jarallax} from 'jarallax';

function setup() {
    var elements = document.getElementsByClassName('parallax');
    for (var i = 0; i < elements.length; i++) {
        new jarallax(elements[i], {
            speed: 0.2
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