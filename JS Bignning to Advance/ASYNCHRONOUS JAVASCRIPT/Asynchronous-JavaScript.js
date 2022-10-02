// Synchronous Programming vs Asynchronous Programmimng
// Synchronous code runs in sequence. 
// This means that each operation must wait for the previous one to complete before executing. 
// Asynchronous code runs in parallel. 
// This means that an operation can occur while another one is still being processed.


// Sync is single-thread, so only one operation or program will run at a time. 
// Async is non-blocking, which means it will send multiple requests to a server. 
// Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.

// "I will finish later!"
// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()


// console.log("Script Start");
// console.log("This is Synchronous, Single Threaded");

// for (let i = 0; i < 10000; i++) {
//     console.log("Inside For Loop Waiting Finish this For Loop");
// }
// console.log("For Loop Finish");




// ***************************************************************
//                      Asynchronous Programming
// ***************************************************************


// setTimeout()
// Waiting for a Timeout
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:



// ********************
// // Example with setTimeout()
// Here We can see Script Start then print script end print immediately and after 5 sec setTimeout Execute on console.
// // This Behaviour is Called Ayschnronous Programming 

// console.log("Script Start");

// setTimeout(() => {
//     console.log("SetTimeOut Executed");
// }, 5000);

// console.log("Script End")



// ********************
// // Another Example with setTimeout()  Please Comment Above Example Code

// console.log("Script Start");

// function func() {
//     console.log("SetTimeOut Executed")
// }
// // setTimeout() take 2 arguments. 
// // 1st Function means it takes Callback and Time Duration in mili second
// // Browser gives setTimeout() id 

// const id = setTimeout(func, 2000);
// for (let i = 0; i < 1000; i++) {
//     console.log("For Loop Running");

// }
// console.log("setTimeout ID is:",id);
// console.log("Clearing setTimeout");
// clearTimeout(id);   // This Clearing SetTimeOut is Clear Time and setTimeout will not Execute if it is in Queue.
// console.log("Script End")


// Set Timeout Execute at Last Even Set Timeout Delay is Finish, because Event Loop Control btw Callback Queue and Call Stack, When Call Stack Free Event loop Allow to go Callback Queue code to Callstack and Execute 




// ********************
// setInterval()
// Waiting for Intervals:
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:


// console.log("Script Start");
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// console.log("Script End");





// ********************
// Callbacks in Synchronous Programming
// Function () takes callbacks as function and arguments, Example Below

// function func1(callbacks) {
//     console.log("My Func 1");
//     callbacks();
// }
// function func2(params) {
//     console.log("My Func 2");
// }
// func1(func2);


// Another Example Below 
// We Can Define function in arguments as Annonymous Function  
// Please Comment Above Code 

// function func1(callback) {
//     console.log("My Func 1");
//     callback();
// }
// func1(function(){
//     console.log("My Func 2");
// })



// ********************
// Callbacks in Asynchronous Programming
// Callbacks
// Callbacks hell  // Example of Change Text With Color in Intervals, Nested stTimeout , This code knows as callbacks Hell, Means Nested in Nested in Nested
// Pyramid of doom  // Example of Change Text With Color in Intervals, Nested stTimeout , This code knows as callbacks Hell, Means Nested in Nested in Nested







// ********************
// Promises
// "I Promise a Result!"

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code
// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// When the producing code obtains the result, it should call one of the two callbacks:
// Result	Call
// Success	myResolve(result value)
// Error	myReject(error object)

// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object
// You cannot access the Promise properties state and result.
// You must use a Promise method to handle promises.

// For Create Promise We Can Use new Keyword

// Here Start Promise
// For Testing Promise Remove 1 Value from Below Array 
// "Producing code" is code that can take some time
const kitchen = ["Chicken", "Rice", "Spices", "Oil"];

const Biryani = new Promise((resolve, reject) => {
    if (kitchen.includes("Chicken") && kitchen.includes("Rice") && kitchen.includes("Gas") && kitchen.includes("Spices") && kitchen.includes("Oil")) {
        resolve("Hmm! Biryani Ban Skti Hai.") // This is Callback Method
    } else {
        reject("Biryani Cancel.")             // This is Callback Methods
    }
})



// "Consuming code" is code that must wait for the result
// Here Below then() is a Method for Consuming Code 
// Example If Below Code We Didn't Understand 
// Biryani.then( ()=>{} ,()=>{} ) // // Two Callbacks 

// Biryani.then(
//     // 1st Callbacks in then() method for resolve Promise
//     (MyBiryani) => {
//         console.log("Damn I am so Hungry, Let's see What we Have?", MyBiryani);
//     },
//     //2nd Callbacks in then() method for reject Promise
//     (error) => { 
//         console.log("Biryani Cancel Because Material is Missing");
//     })

//     // Example With then() and catch() methods, please Comment Above Code

//     Biryani.then((resolve)=>{
//         console.log("Damn I am so Hungry, Let's see What we Have?", resolve);
//     }).catch((reject)=>{
//         console.log("Biryani Cancel Because Material is Missing");
//     })