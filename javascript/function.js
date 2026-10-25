

// function calculateDiscount (price){
//     const discount  = price * 0.10;

//     return price - discount;
// }


// console.log(calculateDiscount(1000))


// function a(a,...args){

//     console.log(args)

// }

// a(10,20,30)



// functions are called first class citizens


// named function expression

// const taxCalculate = function calculateTax(amount){
//     return amount * 0.18;
// }


// console.log(taxCalculate(1000))

//unnamed function expression
// const taxCalculate = function (amount){
//     return amount * 0.18;
// }


// console.log(taxCalculate(1000))



// return a function from a function


function a(){


    console.log(10);

    return function (){
        console.log(20)
    }

}


// const y = a();

// y()

// function multiply (a,b){
//     return a * b
// }


// const multiply = (a,b) => {
//     return a * b
// }


// const multiply = (a,b) =>  a * b;


// console.log(multiply(10,20))


// const double = number => number * 2;



// pass fucntion as argument

// function greet(){
//     console.log('Hello! ')
// }

// function executeFunction(callback){
//     callback();
// }


// executeFunction(greet)


// function add(a,b){
//     return a + b
// }

// function multiply(a,b){
//     return a * b;
// }

// function calculate(a,b, operation){
//     return operation(a,b)
// }

// console.log(calculate(10,20, add))
// console.log(calculate(10,20, multiply))




// return function from a function

// function createMultiplier(multiplier){
//     return function(number){
//         return number * multiplier
//     }
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5))
// console.log(triple(5))


//store functions in arrays and objects

const operations = [
    (a,b) => a + b,
    (a,b) => a - b,
    (a,b) => a * b,
]

// console.log(operations[0](10,5))
// console.log(operations[1](10,5))
// console.log(operations[2](10,5))

const calculator = {
    add:(a,b) => a + b,
    substract:(a,b) => a - b,
    multiply:(a,b) => a * b,
}

console.log(calculator.add(10,20))
console.log(calculator.multiply(10,20))