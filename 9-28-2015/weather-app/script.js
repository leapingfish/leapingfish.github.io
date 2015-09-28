$('button').on('click', convertTemperature);

function convertTemperature(event) {

    var tempCelcius = $('#tempCelcius').val();
    var tempFahrenheit = parseInt(tempCelcius * 1.8 - 64, 10);

    updateHTML(tempFahrenheit);
    updateBackground(tempFahrenheit);
}

function updateHTML(temperature) {
    $('#result').html(temperature);
}

function updateBackground(temperature) {
    if(temperature < 40) {
        $('body').css('background-color', 'lightsteelblue');
    } else if (temperature < 70) {
        $('body').css('background-color', 'blanchedalmond');
    } else {
        $('body').css('background-color', 'orange');
    }
}
