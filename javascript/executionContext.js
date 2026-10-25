// var a = 10;

// var b = 20;

// var result = a + b;

// console.log(result)

// var name = 'John';
// var age = 20;

// function greet(){
//     console.log("Hello !")
// }

// var result = greet();

// console.log(result)

// console.log(a);

// var a = 10;

// console.log(a)

// function greet() {
//   console.log("Hello World!");
// }

// greet();
// greet();
// greet();

// function x() {
//   y();
// }

// function y() {
//   z();
// }

// function z() {
//   console.log(10);
// }
// x();

// Hoisting
// console.log(a)
// x()
// var a = 10
// function x(){
//     console.log(20)
// }

// temporal dead zone
// console.log(a)
// x()
// let a = 10
// function x(){
//     console.log(20)
// }

// function vs block scope

//var is function scope

//let and const is block scope

// var a  = 10;

// function x(){
//     var a  = 20;

//     console.log(a)

// }

// x()

// console.log(a)

// let a  = 10;

// {
//     let a  = 20;

//     console.log(a)

// }

// console.log(a)

// var a  =10;

// var a  = 20;

// let b = 10

// let b = 20;

// function x() {
//   y();
// }

// function y() {
//   z();
// }

// function z() {
//  a  = 10
//  console.log(a)
// }
// x();
// console.log(a)

// function first(){
//     console.log("first start")
//     second()
//     console.log("first end")
// }

// function second(){
//     console.log('second')
// }

// first()

console.log(a);

var a = 10;

function x() {
  console.log(a);
  var a = 20;
}

x();
console.log(a);
