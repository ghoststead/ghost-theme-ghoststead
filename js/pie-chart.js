import EasyPieChart from 'easy-pie-chart';

function setPieChart(p) {
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
            childNodes.innerHTML = Math.round(percent) + '%';
        }
    });
}

function setup() {
    var checkPieChartLoaded = false;
    window.addEventListener('scroll', function () {
        var element = document.getElementsByClassName('pie-chart-container');
        if (element.length > 0) {
            var position = element[0].getBoundingClientRect();
            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0 && !checkPieChartLoaded) {
                checkPieChartLoaded = true;
                var chart = document.getElementsByClassName('pie_chart_in');
                for (var i = 0; i < chart.length; i++) {
                    setPieChart(chart[i]);
                }
            }
        }
    });
}

(function () {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setup, 1);
    } else {
        document.addEventListener('DOMContentLoaded', setup);
    }
})();
