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
    customParallaxImage();
    var blogSearchInput = document.querySelector('#blog-search-input');
    var blogSearchResult = document.querySelector('#blog-search-result');
    if (blogSearchInput !== null && blogSearchResult !== null) {
        new GhostFinder({
            input: '#blogsearch-input',
            showResult: '#blogsearch-result',
            contentApiKey: 'CONTENT_API_KEY',
        });
    }
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
    if(typeof particlesJS !== 'undefined') {
        var particlesElement = document.getElementsByClassName('particles-box');
        if (particlesElement.length === 1) {
            if (particlesElement[0].id === 'particles-box') {
                customParticlesJS();
            }
        }
    }
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
