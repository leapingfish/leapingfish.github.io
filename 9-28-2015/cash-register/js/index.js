// save var for 0
// Input number
// Get Value from input
// Populate two fields
        // List of receipt items
        // Totoal number
//

var total = 0;

$('#entry').on('submit',enter);

function enter(event) {

    event.preventDefault();

    var entry = $('#newEntry').val();

    var entry = parseFloat(entry);

    currency = currencyFormat(entry);
    // $33.00

    $('#entries').append('<div>' + currency + '</div>');

    total += entry;
    // 33

    $('#total').html(currencyFormat(total));

    // Reset value to empty
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
