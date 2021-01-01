import GhostFinder from 'ghost-finder/dist/ghost-finder';

function setup() {
    var input = document.querySelector('[data-search-input]');
    var result = document.querySelector('[data-search-result]');
    var contentApiKey = document.querySelector('[data-content-api-key]');
    if (input && result && contentApiKey) {
        new GhostFinder({
            input: '[data-search-input]',
            showResult: '[data-search-result]',
            contentApiKey: '[data-content-api-key]',
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