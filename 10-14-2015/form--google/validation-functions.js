$(document).ready(function() {
    $('form').on('submit', function(event) {

        // Prevent form submission
        event.preventDefault();

        console.log('submit form');

        // Get the form instance
        var $form = $(event.currentTarget);

        // Use Ajax to submit form data
        // var url = 'https://script.google.com/macros/s/AKfycbzy3UKiaESk9y2ccnBkdSgCo1zxJ0Kx0qE0_eKro7QYE5yFKJVH/exec';
        // 1nqgexVCLWp8jpzOO4JSAjtou-PD2UIaX0pMfYalsunI
        var url = 'https://docs.google.com/forms/d/1nqgexVCLWp8jpzOO4JSAjtou-PD2UIaX0pMfYalsunI/formResponse';
        var redirectUrl = 'success-page.html';

        var data = $form.serialize();
        console.log(data);
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        }).fail(function(data) {
            console.warn("Error! Data: " + data.statusText);
            // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                $(location).attr('href',redirectUrl);
            }
        });
    });
});
