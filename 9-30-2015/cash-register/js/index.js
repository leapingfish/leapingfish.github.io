var total = 0;

$('#entry').submit(enter);

function enter(event) {

    event.preventDefault();

    var entry = $('#newEntry').val();
    var entry = parseFloat(entry);
    currency = currencyFormat(entry);

    $('#entries').append('<div>' + currency + '</div>');

    total += entry;

    $('#total').html(currencyFormat(total));

    $('#newEntry').val('');
}

// A SUPER handy function that makes
// our normal values look pretty
function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}
