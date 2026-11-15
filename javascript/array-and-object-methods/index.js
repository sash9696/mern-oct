// array methods

// map -> transform an array, returns a new array

// const nums = [1, 2, 3, 4, 4];

// const result = nums.map(function (num, index, array) {
//   return num * 2;
// });

// console.log(result)

// const users = [
//     {id:1, name:'John', age:20},
//     {id:2, name:'Pete', age:27},
//     {id:3, name:'Peter', age:26},
// ]

// // display names

// const names = users.map(user => user.name)
// console.log(names)

// filter, returns new array

// const nums = [1, 2, 3, 4, 5,6,7,8,20,49,55];

// const result = nums.filter(function(item, index, array){

//     return item > 10
// })

// console.log(result)

// reduce -> process the array and reduce it to a single accumulated value

// const nums = [10, 20, 30, 40];

// const total = nums.reduce(function (acc, curr, array) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(total)

// const users = [
//     {name:"A", active:true},
//     {name:"B", active:false},
//     {name:"C", active:true},
//     {name:"D", active:false},
// ]

// // count the active and inactive users

// // {active:activeCount, inactive:inactiveCount}

// const result = users.reduce(function(acc, user){

//     if(user.active){
//         acc.active ++;
//     }else{
//         acc.inactive ++;
//     }

//     return acc
// }, {active:0, inactive:0})

// console.log(result)

// find -> it returns first element that satisfies a given condition

// const nums = [10, 20, 30, 40];

// const result = nums.find(num => num > 25)
// console.log(result)

// findIndex -> instead of returning the matching element it returns the index
//if nothing matches it returns -1

// some() => returns true if at least one element passes

//every() => returns true when every element passes the conditon

// includes => returns boolean if an array contains particluarl value

// const nums = [10,20,30,40];

// console.log(nums.includes(10))

// indexOf => returns index of a particular value

// const users = [
//     {id:1, name:'John', age:20},
//     {id:2, name:'Pete', age:27},
//     {id:3, name:'Peter', age:26},
// ]

// // console.log(users.includes({id:2, name:'Pete', age:27}))

// console.log(users.find(user => user.id === 1))

// sort and reverse are used to rearrange elements  they both
//modify original array

// const nums = [5,20,100,3,40];

// nums.sort();

// js compares their string representations lexicographically

// so for numbers we use compare function

// nums.sort((a,b) => a - b);

// nums.sort((a,b) => b - a);

// console.log(nums)

// how to avoid modifying the original array

// toSorted() and toReversed()
//useful in react

// slice and splice

// slice()

// extracts a portion of an array and returns it in a new array
// does not modify the orignal array

// const nums = [5,20,100,3,40];

// const result = nums.slice(1,3)

// const result = nums.slice(2)

// const result = nums.slice(-2)

// console.log(result)

//splice

// add, remove or replace elements in an array
// modifies the original array

// const nums = [5,20,100,3,40];

// const result = nums.splice(startIndex, deleteCount)

// removed
// const result = nums.splice(1, 2)
// console.log(result)

// add

// nums.splice(1, 0, 222, 333)
// console.log(nums)

//replace

// nums.splice(1, 1, 222)
// console.log(nums)

// concat -> conbine arrays

// join -> convert array into a string

// const fruits = ['Apple', 'Banana', "Mango"];

// // const result = fruits.join(", ")

// // const result = fruits.join("-")
// // const result = fruits.join("")

// const result = fruits.join(" ")

// console.log(result)

// flat -> by default removes one level of nesting

// const nums = [1, [2, [3, [4]]]]

// // console.log(nums.flat(3))

// console.log(nums.flat(Infinity))

// Object Methods

// const user = {
//     name:'John',
//     age:30,
//     city:"Delhi"
// }

// const user = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "Delhi",
//   },
// };
// // const result = Object.keys(user);

// const result = Object.values(user);

// console.log(result);

// const products = {
//   laptop: 50000,
//   iphone: 70000,
//   headphones: 10000,
// };

// const prices = Object.values(products);

// const objs = Object.entries(products);
// console.log(objs)

// const total = prices.reduce((acc, price) => acc + price, 0)

// console.log(total)

// const products = [
//   ["laptop", 50000],
//   ["iphone", 70000],
//   ["headphones", 10000],
// ];

// const product = Object.fromEntries(products)

// console.log(product)





const prices = {
  laptop: 50000,
  iphone: 20000,
  headphones: 3000,
};

// output
// {
//     laptop: 55000,
//     iphone: 22000,
//     headphones: 3300,
//   };
  

// increase every price by 10 percent

// we covert it to array

// we process using array method

//we covert it back to object


const updatedPrices = Object.fromEntries(Object.entries(prices).map(([product, price]) => {

    console.log(typeof price)
    return [product, price * 110/100]
}))


console.log(updatedPrices)
