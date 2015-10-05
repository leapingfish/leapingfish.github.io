/*
 * This is our score keeper.
 * He cheats.
 */
var score = 0;

$('#reset').on('click', reset);
$('#add5').on('click', addFive);
$('#add10').on('click', addTen);
$('#min1').on('click', minOne);

function reset() {
    score = 0;
    updateResult(score);
}

function addFive() {
    score = score + 5;
    updateResult(score);
}

function addTen() {
    score = score + 10;
    updateResult(score);
}

function minOne() {
    score = score - 1;
    updateResult(score);
}

// var pizza = value passed into fuction
function updateResult(pizza) {
    $('#result').html(pizza);
}