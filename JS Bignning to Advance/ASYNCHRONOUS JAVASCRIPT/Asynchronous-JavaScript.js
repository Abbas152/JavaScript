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



// *********************************************
// *********************************************
// // Example with setTimeout()
// Here We can see Script Start then print script end print immediately and after 5 sec setTimeout Execute on console.
// // This Behaviour is Called Ayschnronous Programming 

// console.log("Script Start");

// setTimeout(() => {
//     console.log("SetTimeOut Executed");
// }, 5000);

// console.log("Script End")



// *********************************************
// *********************************************
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




// *********************************************
// *********************************************
// setInterval()
// Waiting for Intervals:
// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:


// console.log("Script Start");
// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// console.log("Script End");





// *********************************************
// *********************************************
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



// *********************************************
// *********************************************
// Callbacks in Asynchronous Programming
// Callbacks
// Callbacks hell  // Example of Change Text With Color in Intervals, Nested stTimeout , This code knows as callbacks Hell, Means Nested in Nested in Nested
// Pyramid of doom  // Example of Change Text With Color in Intervals, Nested stTimeout , This code knows as callbacks Hell, Means Nested in Nested in Nested







// *********************************************
// *********************************************
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
// // *****
// "Producing code" is code that can take some time

// const kitchen = ["Chicken", "Rice", "Spices", "Oil"];

// const Biryani = new Promise((resolve, reject) => {
//     if (kitchen.includes("Chicken") && kitchen.includes("Rice") && kitchen.includes("Gas") && kitchen.includes("Spices") && kitchen.includes("Oil")) {
//         resolve("Hmm! Biryani Ban Skti Hai.") // This is Callback Methods
//     } else {
//         reject("Biryani Cancel.")             // This is Callback Methods
//     }
// })


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

// // Example With then() and catch() methods, please Comment Above Code

// Biryani.then((resolve)=>{
//     console.log("Damn I am so Hungry, Let's see What we Have?", resolve);
// }).catch((reject)=>{
//     console.log("Biryani Cancel Because Material is Missing");
// })





// ********************************************
// ********************************************
// // Promise With Function 

// function MyBiryani() {
//     const kitchen = ["Chicken", "Rice", "Gas", "Spices", "Oil"];
//     const Biryani = new Promise((resolve, reject) => {
//         if (kitchen.includes("Chicken") && kitchen.includes("Rice") && kitchen.includes("Gas") && kitchen.includes("Spices") && kitchen.includes("Oil")) {
//             resolve("Hmm! Biryani Ban Skti Hai.") // This is Callback Methods
//         } else {
//             reject("Biryani Cancel.")             // This is Callback Methods
//         }
//     })
//     return Biryani;
// }

// MyBiryani().then(
//         // 1st Callbacks in then() method for resolve Promise
//         (MyBiryani) => {
//             console.log("Damn I am so Hungry, Let's see What we Have?", MyBiryani);
//         },
//         //2nd Callbacks in then() method for reject Promise
//         (error) => { 
//             console.log("Biryani Cancel Because Material is Missing");
//         })



// // Example With then() and catch() methods, please Comment Above Code
// MyBiryani().then((resolve)=>{
//         console.log("Damn I am so Hungry, Let's see What we Have?", resolve);
//     }).catch((reject)=>{
//         console.log("Biryani Cancel Because Material is Missing");
//     })





// ********************************************
// ********************************************
// // Promise and setTimeout With Function 

// function myPromise() {
//    const Result = new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(() => {
//             if (value) {
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000);
//     })
//     return Result;
// }

// myPromise().then(()=>{console.log("Resolved")})
// .catch(()=>{console.log("Reject")})






// ********************************************
// ********************************************
// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(1);
// myPromise.then((value)=>{
//     console.log(value);
// })



// then()
// then Method Always Return Promise. Please Comment Above Code

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("Hey");
//     })
// }

// myPromise()
// .then((value)=>{
//     console.log(value);
//     value += " Buddy";
//     return value  // It is Return Promise Like retrun Promise.resolve(value)
// })

// .then((value)=>{
//     console.log(value);
//     value += " Are You Ok";
//     return value;
// })  

// .then((value)=>{
//     console.log(value);
// })  






// *********************************************
// *********************************************
// AJAX
// AJAX is a developer's dream, because you can:

// Read data from a web server - after the page has loaded
// Update a web page without reloading the page
// Send data to a web server - in the background

// ******
// What is AJAX?
// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.
// AJAX just uses a combination of:

// ******
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
// AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

// ******
// Modern Browsers (Fetch API)
// Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.
// The Fetch API interface allows web browser to make HTTP requests to web servers.
// If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.

// ******
// We don't use data in XML format anymore. 
// we use JSON now. 

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)


// ******
// 1.) xmlHTTPRequest (old way of doing)
// Start Here 

// MDN Refference for XHR ReadyState 
// Value	State	               Description
// 0	    UNSENT	               Client has been created. open() not called yet.
// 1	    OPENED	               open() has been called.
// 2	    HEADERS_RECEIVED	   send() has been called, and headers and status are available.
// 3	    LOADING	Downloading;   responseText holds partial data.
// 4	    DONE	               The operation is complete.

// First of All We Need XMLHttpRequest Object Which Contains Some Methods and We can Use That Methods.

// Below Here We Call Constructor of XMLHttpRequest Object, And Store All These Object Methods in XHR

// const URL = "https://jsonplaceholder.typicode.com/posts";  // URL for GET Request
// const XHR = new XMLHttpRequest();
// // console.log(XHR);

// // console.log(XHR.readyState);   // 0 Here We Check readyState Before Open()
// XHR.open("GET",URL);
// // console.log(XHR.readyState);   // 1 Here We Check readyState After Open()



// // **********
// // // Method 1 for Check State during Changing 
// // XHR.onreadystatechange = function(){
// //     // console.log(XHR.readyState);
// //     if (XHR.readyState === 4) {
// //         // console.log(XHR.response);
// //         const response = XHR.response;
// //         const data = JSON.parse(response);   // Convert JSON data to JavaScript Object for Parsing.
// //         console.log(typeof data);
// //         console.log(data);
// //     }
// // }



// // **********
// // // Method 2 for Check State, It Works Only when State is 4. 
// // // Here We Don't Need to Set Condition if readyState === 4 then show response like onreadystatechange.

// // XHR.onload = function(){
// //     console.log(XHR.readyState);
// //     const response = XHR.response;
// //     const data = JSON.parse(response);
// //     console.log(data);
// // }

// XHR.send(); // Uncomment It
// // console.log(XHR.readyState);   // 1 Here We Check readyState After Send()




// *********************************************
// *********************************************
// // Error Handling
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const XHR = new XMLHttpRequest();

// XHR.open("GET", URL);
// // Error Handling. Only Work If Status code is 200 and less than 300 
// XHR.onload = function(){  // Only Works When readyState is 4.
//     if (XHR.status >= 200 && XHR.status < 300 ) {    
//         const data = JSON.parse(XHR.response);
//         console.log(data);
//     }
// }

// // Only Works When Networks Error Occurs
// XHR.onerror = () => { 
//     console.log("Network Error");
// }
// XHR.send();




// // **********
// Exercise Using XmlHTTPRequest. Access Posts and Posts/4 

// const URL1 = "https://jsonplaceholder.typicode.com/posts";
// const XHR1 = new XMLHttpRequest();

// XHR1.open("GET", URL1);
// const UserGivenID = +prompt("Enter Post ID");

// XHR1.onload = () => {
//     if (XHR1.status >= 200 && XHR1.status < 300) {
//         const data = JSON.parse(XHR1.response);
//         console.log(data);


//         const URL2 = `${URL1}/${UserGivenID}`;
//         const XHR2 = new XMLHttpRequest();
//         XHR2.open("GET", URL2);
//         const ID = XHR2[UserGivenID];  // Example  XHR2[2] 
//         XHR2.onload = () => {
//             if (XHR2.status >= 200 && XHR2.status < 300) {
//                 const data1 = JSON.parse(XHR2.response);
//                 console.log("Your Given Post ID is Below");
//                 console.log(data1.id);
//                 console.log(data1);
//             }
//         }
//         XHR2.send();
//     }
// }

// XHR1.send();



// // **********
// // Exercise Using XmlHTTPRequest Use Promise. Access Posts and Posts/4 
// const URL1 = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url){
//     return new Promise((resolve, reject) => {
//         const XHR1 = new XMLHttpRequest();
//         XHR1.open(method,url)
//        XHR1.onload = function(){
//         if (XHR1.status >= 200 && XHR1.status < 300) {
//             resolve(XHR1.response)
//         } else {
//             reject(new Error("Something Went Wrong"));
//         }
//         XHR1.onerror = function(){
//             reject(new Error("Network Error"));
//         }
//     }
//         XHR1.send();
//     })
// }

// sendRequest("GET",URL1)
// .then(response=>{
//     const data1 = JSON.parse(response);
//     console.log(data1);
//     return data1;
// })
// .then(data1=>{
//     const ID = data1[3].id;
//     return ID;
// })
// .then(ID=>{
//     const URL2 = `${URL1}/${ID}`;
//     console.log(URL2);
//     return sendRequest("GET", URL2);
// })
// .then(newResponse=>{
//     const newData = JSON.parse(newResponse);
//     console.log(newData);
// })
// .catch(error=>{
//     console.log(error);
// })





// *********************************************
// *********************************************
// Fetch
// The Fetch API interface allows web browser to make HTTP requests to web servers.
// No need for XMLHttpRequest anymore.
// With the Help of Fetch We Can Request with a Single Line.
// It Request "GET" Method Automatically. 
// Fetch Always Return Promise.
// Instead JSON.parse(respone) In Fetch We Use callback.json() for Getting Correct Values.

const URL1 = "https://jsonplaceholder.typicode.com/posts";

fetch(URL1) // It return Promise
    .then(response=>{
        const data = response.json();
        console.log(data);
        return data;
    })
    .then(data=>{
        console.log(data);
    })