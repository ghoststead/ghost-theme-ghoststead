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
/* END particlesJS */
(function() {
    customParallaxImage();

    var checkPieChartLoaded = false;
    window.addEventListener('scroll', function() {
        var element = document.getElementsByClassName('piechartcontainer');
        if (element.length > 0) {
            var position = element[0].getBoundingClientRect();
            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0 && !checkPieChartLoaded) {
                checkPieChartLoaded = true;
                customPieChart();
            }
        }
    });
    /*
     * Enable forms that have a data-form-type attribute set to 'contact' by:
     * - append a hidden form element containing the customer api key (if not present).
     * - set the method attribute to 'POST'
     * - set the action to the /form endpoint
     * - set the redirect location (if not already present)
     */
    var formElements = document.querySelectorAll('form[data-form-type="contact"]');
    if (formElements.length > 0) {
        for (var i = 0; i < formElements.length; i++) {
            var formElement = formElements[i];

            if (!formElement.querySelector('input[name="ghoststead_api_key"]')) {
                var hiddenInputElement = document.createElement('input');
                hiddenInputElement.setAttribute('hidden', 'true');
                hiddenInputElement.setAttribute('name', 'ghoststead_api_key');
                hiddenInputElement.setAttribute('value', 'GHOSTSTEAD_API_KEY');
            }

            if (!formElement.querySelector('input[name="location"]')) {
                var locationInputElement = document.createElement('input');
                locationInputElement.setAttribute('hidden', 'true');
                locationInputElement.setAttribute('name', 'location');
                locationInputElement.setAttribute('value', './#thank-you');
            }

            formElement.appendChild(hiddenInputElement);
            formElement.setAttribute('method', 'POST');
            formElement.setAttribute('action', 'https://api.ghoststead.com/form');
        }
    }
})();
