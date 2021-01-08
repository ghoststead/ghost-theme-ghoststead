import Timer from 'easytimer/src/easytimer';

function getSeconds(end_date) {
    return new Date(end_date).valueOf() - Date.now();
}

function setContentByClassName(parent, className, content) {
    var elements = parent.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = content;
    }
}

function initTimer(element, date) {
    var timer = new Timer();
    timer.start({
        countdown: true,
        precision: 'seconds',
        startValues: {seconds: getSeconds(date)}
    });
    timer.addEventListener('secondsUpdated', function () {
        setContentByClassName(element, 'days', timer.getTimeValues().days);
        setContentByClassName(element, 'hours', timer.getTimeValues().hours);
        setContentByClassName(element, 'minutes', timer.getTimeValues().minutes);
        setContentByClassName(element, 'seconds', timer.getTimeValues().seconds);
    });
}

function setup() {
    var numberOfCountDown = document.getElementsByClassName('count-down');
    if (numberOfCountDown.length > 0) {
        for (var i = 0; i < numberOfCountDown.length; i++) {
            var currentCountDown = numberOfCountDown[i];
            var CountDownAttr = currentCountDown.getAttribute('data-date');
            if(CountDownAttr !== ''){
                initTimer(currentCountDown, CountDownAttr);
            }
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