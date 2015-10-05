

// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page
// function currencyFormat(number) {
//     var currency = parseFloat(number);
//     currency = currency.toFixed(2);
//     currency = '$' + currency;
//     return currency;
// }

var total = 0;
​
$('form').on('submit', updateReceipt);
// ​
// function updateReceipt() {
// ​
//     event.preventDefault();
// ​
//     var newEntry = $('input').val();
// ​
//     // Not using var here keeps
//     // us from using a local variable
//     total = parseFloat(total) + parseFloat(newEntry);
// ​
//     $('#entries').append('<div>' + currencyFormat(newEntry) + '</div>');
//     $('#total').html(currencyFormat(total));
// }
