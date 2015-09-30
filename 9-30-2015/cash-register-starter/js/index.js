// WRITE CODE HERE
// To create a cash register

// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page
function currencyFormat(number) {
    var currency = parseFloat(number);
    currency = currency.toFixed(2);
    currency = '$' + currency;
    return currency;
}
