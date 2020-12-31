import Shuffle from 'shufflejs';

function clearActive(container) {
    container.querySelectorAll('.active[data-filter]').forEach(function (element) {
        element.classList.remove('active');
    });
}

function dataFilter(element) {
    var attr = element.getAttribute('data-filter');
    try {
        return JSON.parse(attr);
    } catch (e) {
        return attr;
    }
}

function setup() {
    var container = document.querySelector('.portfolio-content');
    if (container) {
        var shuffleInstance = new Shuffle(container, {
            itemSelector: '.grid-item'
        });

        document.querySelectorAll('[data-filter]').forEach(function (element) {
            element.addEventListener('click', function() {
                clearActive(container);
                shuffleInstance.filter(dataFilter(element));
                element.classList.add('active');
            });
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
