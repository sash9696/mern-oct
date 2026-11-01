//here inner fucn can access variables declared in outer function . this is called lexical scoping
// function outer(){
//     let count = 10;

//     function inner(){
//         console.log(count)
//     }

//     inner();
// }

// outer();

// function outer(){
//     let count = 10;
//     function inner(){
//         console.log(count)
//     }
//     return inner;
// }
// const result = outer();
// result();

// function outer(){
//     let count = 0;
//     function inner(){
//         count ++;
//         console.log(count)
//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();
// counter();

// function outer(){
//     let count = 0;
//     function inner(){
//         count ++;
//         console.log(count)
//     }
//     return inner;
// }
// const counter1 = outer();
// const counter2 = outer();
// every call to outer() creates a sperate lexical environment
// counter1();
// counter1();
// counter2();
// counter1();
// counter2();

// function createCounter(){
//     let count = 5;
//     return function (){
//         count += 2;
//         return count;
//     }

// }
// const a = createCounter();
// const b = createCounter();

// console.log(a())
// console.log(a())
// console.log(b())
// console.log(a())
// console.log(b())

// let count = 0;

// function increment() {
//   count++;
// }

// function decrement() {
//   count--;
// }

// increment();

// console.log(count);

// count = 1000;

// problem without closure is count is globally accessible, any part of app can change it accidentally

//solution with closures

// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     decrement: function () {
//       count--;
//     },
//     reset: function () {
//       count = 0;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }
// const counter = createCounter();
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.getCount())
// counter.decrement()
// console.log(counter.getCount())
// counter.reset();
// console.log(counter.getCount())
// console.log(counter.count)
// counter.count = 1000;
// console.log(counter.getCount())

// function secretHolder() {
//   let secret = 100;
//   return {
//     getSecret() {
//       return secret;
//     },
//     changeSecret(value) {
//       secret = value;
//     },
//   };
// }

// const obj = secretHolder();
// obj.secret = 500;
// console.log(obj.getSecret());
// obj.changeSecret(900);
// console.log(obj.getSecret());

// closure with loops
// for(var i = 1; i <=3 ; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }


// for(var i = 1; i <=3 ; i++){
//     setTimeout(function(){ //A
//         console.log('A: ', i);
//     }, 1000);
//     i++;
//     setTimeout(function(){ //B
//         console.log('B: ', i);
//     }, 1000);


    
// }
// two most imp concepts here is
//loop execution -> happens synchronously
//Callback execution -> happens later after the loop finishes


// first loop iteration
//   i = 1

//   i<=3 is true

//   settime callback A1 is scheduled

//   i++ 
//   i = 2

//   settimeout callback B1 is scheduled

//   i = 2

//   second loop iteration

//     i = 3

//     i<=3 is true

//     settimeout callback A2 is scheduled

//   i = 4

//   settimeout callback B2 is scheduled

//   third loop iteration

//   i = 5

//   i<=3 is false

//   loop ends

// for(let i = 1; i <=3 ; i++){
//     setTimeout(function(){ //A
//         console.log('A: ', i);
//     }, 1000);
//     i++;
//     setTimeout(function(){ //B
//         console.log('B: ', i);
//     }, 1000);
    
// }
//each iteration is a seprate binding in case of let
// iteration 1
// i = 1
// schedule A
// i++ -> i = 2

// schedule B


// iteration 2
// for loop i++ i = 3

// schedule A
// i++ -> i = 4

// schedule B
