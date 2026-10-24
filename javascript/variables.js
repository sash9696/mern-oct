
// console.log('hello world')

// in js the variable can hold type

// let userName = "John";

// let cartCount = 5;

// let isLoggedIn = true;

//let
//// when variable should  be reassigned


// let cartCount = 0;

// cartCount = 1;

// cartCount=2;

// console.log(cartCount)


//const
// when variable should not be reassigned

// const userName = 'John';

// userName = 'A' //type error


// const cart = {
//     items:2
// }

// cart.items = 3

// console.log(cart.items)

// cart = {items:4}
// variables.js:41 Uncaught TypeError: Assignment to constant variable.


// var

// var price = 100;

// price=200;

// console.log(price)

const productName = 'Monitor';
const price = 1200;

let quantity = 2;
let discount = 100;

const subtotal = price * quantity;
const total = subtotal - discount;

console.log(productName);
console.log(subtotal)
console.log(total)

