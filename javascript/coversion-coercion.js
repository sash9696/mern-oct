
// explicitly
// const age = "25";

// const result  = Number(age);

// console.log(result);
// console.log(typeof result);


// implicit coercion
// coercion refers to the automatic conversion Javascript performs when evaluating expressions

// const age = '25';

// const result = age - 5;

// console.log(result)

// + operator is a trap

// console.log(5 + 2)

// console.log("5" + 2)

// console.log(5 + "2")
// console.log("Hello " +  "World")


// when one operand is a string the + operator will convert the other value to string and
//concatenates them
// this is a part of javascript's specific primitive conversion rules

// const quantity = "5";
// const price = 100;

// console.log(quantity + price);

//safe approach

// const quantity = Number("5");
// const price = 100;

// console.log(quantity + price);


//  3 ways to convert values to numbers

// console.log(Number(42))
// console.log(Number(3.14))

// parseInt() -> parse an integer from beginning of the string

// console.log(parseInt('42px', 10))
// console.log(parseInt('3.99', 10))


// parseFlat() -> parse an floating point number from beginning of the string

// console.log(parseFloat('3.99'))



// Truthy and fals values

// if("hello"){
//     console.log('This runs')
// }



// Falsy values

// false
// 0, -0, 0n
// ""
// null
// undefined
// NaN

// Truthy values
// {}, []
// "0", "falsy"



// console.log(Boolean("false"))

// console.log(Boolean("0"))

// console.log(Boolean([]))

// console.log(Boolean({}))

// console.log(Boolean(""))

// console.log(Boolean(0))




// Equality == vs ===
// js may convert the operands before comparing them

// Loose equality ==

// console.log( 5 == '5');

// console.log(0 == false)

// console.log(null == undefined)



//Strict equality ===

// js compares without performing the usual loose -equality type coercion


// console.log( 5 === '5');

// console.log(0 === false)

// console.log(5 === 5)


// use === and !==


// console.log([] == false)


// hw

// conditionals
//operators
//loops



// tomorrow

// functions(first class citizens)
// diff with variables
// hoisting
// tempral dead zone
// how js works under the hood
// Event Loop
// Callback, queues
// timers, web apis

// subsequent classes
// map and array methods
// prototypes
// Async programmming, promises, callbacks, async await


// for(let i = 0; i < 10; i++){
//     console.log(i)
// }



// const productIds  = [101, 205, 310, 450];

// const targetId =310;

// for(const id of productIds){
    
//     if(id === targetId){
//         console.log(`product found: ${id}`);
//         break;
//     }
// }

const stockLevels = [5,0, 3, 0, 8];

for(const stock of stockLevels){
    if(stock === 0){
        continue
    }

    console.log(`Available stock: ${stock}`)
}