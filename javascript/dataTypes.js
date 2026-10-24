//8 data types

// primitive types or scalars

// String

// const firstname = 'John';

// const lastname = 'Doe';

// const fullName = firstname + " " + lastname;

// console.log(fullName)

// const product = 'Keyboard';
// const price = 1200;

// const message = `The ${product}  costs ${price}.`
// console.log(message)

// a number inside a string is still a text

// const a = "10";

// const b = "20";

// console.log(a + b);  "1020"

// console.log(Number(a) + Number(b));


// Number

// const quantity = 3;
// const price = 234.555;

// console.log(quantity * price)


// console.log(1 / 'a')

// NaN -> Not a Number

// console.log(typeof NaN)

// console.log(typeof Infinity)

// console.log(Number.isNaN(NaN))

// console.log(Number.isFinite(100))




// Boolean

// const isLoggedIn = true;

// if(isLoggedIn){
//     console.log('Show account menu')
// }else{
//     console.log("Show login button")
// }



// undefined
// default value whent eh variable is only declared

// let selectedProduct;

// const user = {
//     name:"John",
// }

// console.log(user.age)

// console.log(typeof undefined)

// null

// absence of value

// const selectedUser = null;

// console.log(typeof null)



// BigInt

// Unlike the standard Number type—which is stored as a 64-bit float and loses precision beyond ±(2⁵³ - 1)—BigInt represents arbitrary-precision integers.

// console.log(Number.MAX_SAFE_INTEGER)

// console.log(9007199254740992 === 9007199254740993) //true

// const a = 9007199254740992n;
// const b = 9007199254740993n;

// console.log(a === b)

// const largeId = BigInt("9007199254740992");

// console.log(largeId)


// transaction id
//youtube views count
// stock prices


// Symbol
// create unique values

const a = Symbol("id");
const b = Symbol("id");

console.log(a === b)

// avoiding object property collisions

// image we r building a javascript library that adds
//internal metadata to a user object

// const user = {
//     name:"John",
//     id:101
// }

// another part of the applciation wants to add an id property


// user.id = 202;


//override values


// solution use symbols

// const internalId = Symbol("id");
// const externalId = Symbol("id");

// const user = {
//     name:'John',
//     [internalId]:101,
//     [externalId]:202
// }

// console.log(user[internalId])
// console.log(user[externalId])





// //non primitive types
// Objects

// it lets u group related infp

// const user = {
//     name:'John',
//     age:30,
//     isLoggedIn:true
// }

// console.log(user.name)
// console.log(user.age)

// Arrays

// const cart = [10, 20, 30];

// // console.log(cart[0]);
// // console.log(cart.length)

// console.log(typeof cart); //object

// console.log(Array.isArray(cart));

