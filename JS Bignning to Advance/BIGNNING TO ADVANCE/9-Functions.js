// ***********************************************************
//              How To Create a Function
// ***********************************************************

// function singHappyBirthday() {
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();

// *****************************************
// Exercise:

// function sum(a,b) {
//     console.log("Total is: " , a + b);
// }
// sum(4,4);


// *****************************************
// Exercise:

// function oddOrEven(num) {
//    return num % 2 === 0;
// }
// console.log(oddOrEven(10));


// *****************************************
// Exercise: 

// function firstChar(str){
//     return str[0];
// }
// console.log(firstChar("Abbas"));


// *****************************************
// Exercise: 

// function findTarget(arr1, target){
//     for(let arr = 0; arr<arr1.length; arr++)
//     if (arr1[arr]===target) {
//         return arr;
//     }
//     return -1;
// }
// console.log(findTarget([1,2,3,4,5], 4));



// ***********************************************************
//                      Function Expression
// ***********************************************************
// In Function Expression We Assign a function to a Variable 

// Exercise:
// const happyBirthday = function(){
//     console.log("Happy Birthday To You...");
// }


// Exercise:
// const sum = function(a,b) {
//     console.log("Total is: " , a + b);
// }
// sum(4,4);








// ***********************************************************
//                      Arrow Function
// ***********************************************************
// This is Normal Function 
// function singHappyBirthday() {
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();

// This is Arrow Function 
// const singHappyBirthday = () => {
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();


// *****************************************
// Exercise:

// function sum(a,b) {
//     console.log("Total is: " , a + b);
// }
// sum(4,4);


// *****************************************
// Exercise:
// This is Normal Function 
// function oddOrEven(num) {
//    return num % 2 === 0;
// }
// console.log(oddOrEven(10));


// This is Arrow Function 
// const oddOrEven = (num) => {
//    return num % 2 === 0;
// }
// console.log(oddOrEven(10));



//              Another Examples
// *****************************************
// This is Arrow Function (We Remove Small Brackets Around parameters)

// const oddOrEven = num => {
//    return num % 2 === 0;
// }
// console.log(oddOrEven(10));





//              Another Examples
// *****************************************
// This is Arrow Function  (We remove Curly Braces and return keyword)

// const oddOrEven = num => num % 2 === 0;

//  console.log(oddOrEven(10));








// ***********************************************************
//                  Function Hoisting
// ***********************************************************

// We Can Access a Function Befor Declaration BUT This worked only for Function Declaration. Not Worked in Arrow and Function Expressions. This Behaviour is Called Hoisting.

// singHappyBirthday();

// function singHappyBirthday() {
//     console.log("Happy Birthday To You...");
// }





// ***********************************************************
//                Function inside Function
// ***********************************************************


// function singHappyBirthday() {
//     function printName(nam) {
//         nam =  prompt("Enter Name");
//         return nam;
//     }
//     console.log(printName() , "Happy Birthday To You...");
// }
// singHappyBirthday();








// ***********************************************************
//                Function Default Parameters
// ***********************************************************
// Default Parameter is a Value which We set in Parameters by Default

// function sum(a, b = 0) {
//     console.log("Total is: ", a + b);
// }
// sum(4);


// Old Fassion When Default Params is Not Exist 

// function sum(a, b) {
//     if(typeof b === "undefined"){
//         b = 0; 
//     }
//     return a + b;
// }
// console.log(sum(4));





// ***********************************************************
//                Function Rest Parameters
// ***********************************************************
// In Rest Parameters We assign all Arguments at 1 Variable

// function addAll(...num) {
//     let sum = 0;
//     for(let i = 0; i<num.length; i++){
//        sum = sum + num[i];
//     }
//     return sum;
// }
// console.log(addAll(10,100,100));






// ***********************************************************
//                Parameters Destructuring
// ***********************************************************
// We Use Where we Get Object Key Pair Values  

// const person = {
//     firstName: "Abbas",
//     gender: "Male"
// }

// 1st Method  
// function objDetails(obj) {
//     console.log(person.firstName);
//     console.log(person.gender);
// }




// 2nd Method   
// function objDetails({firstName, gender}) {
//     console.log(firstName);
//     console.log(gender);
// }

// objDetails(person);





// ***********************************************************
//                Callback Functions
// ***********************************************************
// First of All We can Assign Any type of Value to Function Parameter. 

//  const myFunc = (anyValue) =>{
//     console.log(typeof anyValue);
// }

// Please UnComment One By One. 
// myFunc(5); 
// myFunc("Abbas");
// myFunc({name:"Ali"});



// Now Its Callback Functions
// ****************************************
// We Assign myFunc2 as a Arguments to myFunc Parameters It is called Callback Functions

// const myFunc2 = (params) => {
//     console.log("Inside My Function2");
//     console.log(`My name is ${params}`);
// }

// const myFunc = (callback)=> {
//     console.log("I am a Function and I call another Functions ");
//     callback("Abbas");
// }

// myFunc(myFunc2);





// ***********************************************************
//              Function Returning Functions
// ***********************************************************

// function func1()  {
//     const hello = ()=>{
//         console.log("Hello World");
//     }
//     return hello();  // Here is Function Return a Function.
// }

// const ans = func1;
// ans();











// Practice 
// ****************************

// function sum(a, b) {
//     console.log(a + b);
// }

// // sum(5,5);

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(isEven(10));

// function firstChar(anyString) {
//     return anyString[0];
// }

// // console.log(firstChar(prompt("Enter Your Character")));



// // const findTarget = function (arr, target) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === target) {
// //             return i;
// //         }
// //     }
// //     console.log("Not Found 404");
// // }


// // This is Arrow Function Example Just Remove "function" keyword and add ()=>{}

// const findTarget = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     console.log("Not Found 404");
// }
// const myarr = [2, 6, 7, 9, 10, 11, 15, 19];

// // Converting String to Number 
// let target = +prompt("Enter You Number");
// // console.log(typeof target);

// const answer = findTarget(myarr, target);
// console.log(answer);



