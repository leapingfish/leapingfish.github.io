console.log('What month is it?');

var mini = ['cheese', 'olives', 'pepperoni', 'pineapple'];

console.log(mini[2]);

// 1. Use this array to console.log your birth month
// ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var birthMonth = 3;

if(birthMonth < 7) {
    halfMonth = birthMonth + 6;
} else {
    halfMonth = birthMonth - 6;
}

console.log(months[2]);
console.log(months[halfMonth]);

var pizzaRecipe = {
    timeToCook: 30,
    toppings: ['cheese', 'olives', 'pepperoni', 'pineapple']
};