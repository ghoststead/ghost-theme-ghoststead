function setup() {
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
}

(function () {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(setup, 1);
    } else {
        document.addEventListener('DOMContentLoaded', setup);
    }
})();
