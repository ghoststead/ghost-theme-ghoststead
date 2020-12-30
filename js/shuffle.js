import Shuffle from 'shufflejs';

function clearActive() {
    document.querySelectorAll('*[data-filter]').forEach(function (element) {
        element.classList.remove('active');
    });
}

function dataFilter(element) {
    let attr = element.getAttribute('data-filter');
    try {
        return JSON.parse(attr);
    } catch (e) {
        return attr;
    }
}

function setup() {
    let element = document.querySelector('.portfolio-content');
    if (element) {
        let shuffleInstance = new Shuffle(element, {
            itemSelector: '.grid-item'
        });

        document.querySelectorAll('[data-filter]').forEach(function (item) {
            item.addEventListener('click', function() {
                clearActive();
                shuffleInstance.filter(dataFilter(item));
                item.classList.add('active');
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
