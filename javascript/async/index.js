// problem with js synchronous nature

// fetch a data from the server
//if the detching operation takes 5 secs

// other js tasks would have to wait

// Thats why asynchronous js is the solution

// certain operations that are taking time can be initiated without blocking the continuation of the
//current js execution

// console.log('Start')

// setTimeout(function(){
//     console.log('Inside timeout')
// }, 2000)

// console.log('End')

// console.log('Start')

// setTimeout(function(){
//     console.log('Inside timeout')
// }, 0)

// console.log('End')

// function blockForOneSecond(){
//     const start = Date.now();
//     while(Date.now() - start < 1000){
//         // blocking for 1 sec
//     }
//     console.log('Blocking finished')
// }

// console.log('Start')

// setTimeout(function(){
//     console.log('Inside timeout')
// }, 0)

// blockForOneSecond();

// console.log('End')

// console.log('A')
// setTimeout(function(){
//     console.log('B')

// }, 0)
// console.log('C')
// setTimeout(function(){
//     console.log('D')

// }, 0)

// console.log('E')

// console.log("Start");
// setTimeout(function () {
//   console.log("Timeout 1");

//   setTimeout(function () {
//     console.log("Nested Timeout ");
//   }, 0);
// }, 0);

// setTimeout(function () {
//   console.log("Timeout 2 ");
// }, 0);

// function test() {
//   console.log("Inside test ");

//   setTimeout(function () {
//     console.log("Timeout 3 ");
//   }, 0);

//   console.log("test finished ");
// }

// test();

// console.log("End");

// HW questions
//works
// for(let i = 1; i <=3 ; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// for (var i = 1; i <= 3; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }



// Closures
// Promises, Async Await