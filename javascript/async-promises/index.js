// simulate api call

// function getUser(callback) {
//   console.log("Fetching user...");

//   setTimeout(() => {

//     const error = `Something went wrong`;
//     const user = {
//       id: 1,
//       name: "John",
//       age: 30,
//     };
//     callback(error,user);
//   }, 2000);
// }

// function displayUser(error,user) {

//     if(error){
//         console.log('Error: ', error);
//         return;
//     }
//   console.log('User',user);
// }

// getUser(displayUser);

// Imagine we need to perform 3 operations
//fetch user details
//fetch the user's orders
//fetch the details of the first order

//each operation depends on the result of previous one

// using callbacks

// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User fetched");

//     callback({ id: 101, name: "John" });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     console.log("Orders fetched");

//     callback([{ orderId: 501 }]);
//   }, 1000);
// }

// function getOrderDetails(orderId, callback) {
//   setTimeout(() => {
//     console.log("Order details fetched");

//     callback({ orderId, product: "Iphone" });
//   }, 1000);
// }

// callback hell
// getUser((user) => {
//   getOrders(user.id, (orders) => {
//     getOrderDetails(orders[0].orderId, (details) => {
//       console.log(details);
//     });
//   });
// });

// inversion of control

// Promises
// cleaner way to handle async code
//

// 3 states
//pending
//fulfilled
//rejected

// function getUser() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching user...");

//     const error  = 'Somethign went wrong'

//     if(error){
//         reject(error)
//     }

//     setTimeout(() => {
//       const user = {
//         id: 1,
//         name: "John",
//       };

//       resolve(user)
//     }, 2000);
//   });
// }

// console.log(getUser())

// getUser()
//     .then((user) => {
//         console.log(user)
//     })
//     .catch((error)=>{
//         console.log("Error: ", error)
//     })

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 101,
//         name: "John",
//       });
//     }, 1000);
//   });
// }

// function getOrders(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ orderId: 501 });
//     }, 1000);
//   });
// }

// function getOrderDetails(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ orderId, product: "Iphone" });
//     }, 1000);
//   });
// }

// promise hell
// getUser()
//     .then((user) => {
//         console.log("User: ", user)
//         return getOrders(user.id)
//     })
//     .then((order) => {
//         console.log("Order: ", order)
//         return getOrderDetails(order.orderId)
//     })
//     .then((details) => {
//         console.log("details: ", details)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })
//     .finally(()=> {
//         console.log('Request completed')
//     })

// async await (uses promises)
// more elegant way of writing async code

// async function getOrderData(params) {
//   const user = await getUser();
//   console.log("User: ", user);

//   const order = await getOrders(user.id);

//   console.log("Order: ", order);

//   const details = await getOrderDetails(order.orderId);
//   console.log("Details: ", details);
// }

// getOrderData();

// function getName():Promise<string>{
//     return Promise.resolve('John')
// }

// function getNum():Promise<number>{
//     return Promise.resolve(400)
// }

// interface User{
//     id:Number;
//     name: String
// }

// function getUser():Promise<User>{
//     return Promise.resolve({
//         id:101,
//         name:'John'
//     })
// }

// union

// function getUser():Promise<User | string | null >{
//     return Promise.resolve({
//         id:101,
//         name:'John'
//     })
// }

// console.log('Start')

// setTimeout(() => {
//     console.log('Timeout')
// }, 0)

// Promise.resolve().then(() => {
//     console.log('Promise')
// })

// console.log('End')

// console.log('1')

// setTimeout(() => {
//     console.log('2')
// }, 0)

// Promise.resolve().then(() => {
//     console.log('3')
// }).then(() => {
//     console.log('4')
// })

// console.log('5')

// remeber this intrview trick
// once synchronous code finishes, then javascript drains microtask queue before taking the next macro task

// fetch API

// http request to server

// fetch("https://jsonplaceholder.typicode.com/users")

// async function getUsers() {

//     try {

//         const response = await fetch ("https://jsonplaceholder.typicode.com/users")
//         console.log(response)

//         const user = await response.json();
//         console.log(user)

//     } catch (error) {

//     }

// }

// getUsers();

// fetch ("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((user) => {
//         console.log(user)
//     })

//creating the user
async function createUser() {
  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John",
      age: 30,
    }),
  });
  return await response.json();
}


// replace the existing user


async function updateUser() {
    const response = await fetch("/users/101", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Peter",
        age: 20,
      }),
    });
    return await response.json();
  }
  
//   PATCH - partiall update


async function updateUserAge() {
    const response = await fetch("/users/101", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: 50,
      }),
    });
    return await response.json();
  }

//   remove

async function deleteUser() {
    const response = await fetch("/users/101", {
      method: "Delete",
    });
    return  response;
  }


//   API error codes



// Promise methods


// lets assume each api takes 1 sec
  const user = await getAllUsers();
  const order = await getOrders();
  const details = await getNotifications();

//   then total time of rhis code would be 3 s

// in taht case u can make parallel requests using Promise.all()

 const [users, orders, notifications] =  await Promise.all([
    getAllUsers(),
    getOrders(),
    getNotifications()
])

// total tike would be approx 1 sec

// promise all will rject with the the first rejection rejection

// Promise.all

// Promise.allSettled

// Promise.race()

// Promise.any()



// Polifills