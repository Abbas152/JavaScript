

// **************************************************
//                      Methods
// **************************************************
// function inside object
// In Method the Key Pairs Contain a Function Example Below 
// We Need an Object because Method is Function inside Object 


// const person = {
//     firstName: "Ali",
//     age : 23,
//     about: function () {
//         console.log(`The Name is: ${this.firstName} and the Age is: ${this.age}.`)
//     }
// }
// person.about();


// First of All We create Object and then we set value a Function to key about, This Process is Called Methods.  







// **************************************************
//                   this Keyword
// **************************************************

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
// this is not a variable. It is a keyword. You cannot change the value of this.

// const myFunc = () => {
//     "use strict"
//     console.log(this);
// }
// myFunc();



// function myFunc() {
//       "use strict"   // Worked only Function Declaration
//     console.log(this);
// }
// myFunc();






// **************************************************
//                   call()
// **************************************************
// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

// function hello(){
//     console.log("Hello World");
// }
// hello.call();

// Exercise 
// Create 2 Objects and obj1 have a Method Which Name is about then Print obj2 fName and Age calling Method from obj1.

// 1st Method Use Call() with Objects 
    // const obj1 = {
    //     firstName: "Ali",
    //     age : 23,
    //     about: function (hobby, favNum) {
    //         console.log(`The FirstName is: ${this.firstName} and the Age is: ${this.age}. Hobbies of ${this.firstName} is: ${hobby} The Favourit Number is: ${favNum}.`)
    //     }
    // }
    // const obj2 = {
    //     firstName: "Abbas",
    //     age : 20,
    // }

    // obj1.about.call(obj2, "Coding", 1); // Here We can Pass Arguments to the Parameter 





// 2nd Method Use Call() with Objects 
// Here We Declare Function outside from Object 
//  function about(hobby, favNum) {
//     console.log(`The FirstName is: ${this.firstName} and the Age is: ${this.age}. Hobbies of ${this.firstName} is: ${hobby} The Favourit Number is: ${favNum}.`)
// }
// const obj1 = {
//     firstName: "Ali",
//     age : 23,
// }
// const obj2 = {
//     firstName: "Abbas",
//     age : 20,
// }

// about.call(obj2, "Coding", 1); // Here We can Pass Arguments to the Parameter 




    
// **************************************************
//                   apply()
// **************************************************
// apply work Same as call(). The Difference is that We can pass Arguments in Array. Example Below

// function about(hobby, favNum) {
//     console.log(`The FirstName is: ${this.firstName} and the Age is: ${this.age}. Hobbies of ${this.firstName} is: ${hobby} The Favourit Number is: ${favNum}.`)
// }
// const obj1 = {
//     firstName: "Ali",
//     age : 23,
// }
// const obj2 = {
//     firstName: "Abbas",
//     age : 20,
// }

// about.apply(obj2, ["Coding", 1]); // Here We can Pass Arguments to the Parameter in Array









// **************************************************
//                   bind()
// **************************************************
// bind() doesn't Print on Console it returns a Function. We Can Assign a variable to it.

// / Here We Declare Function outside from Object 

//  function about(hobby, favNum) {
//     console.log(`The FirstName is: ${this.firstName} and the Age is: ${this.age}. Hobbies of ${this.firstName} is: ${hobby} The Favourit Number is: ${favNum}.`)
// }
// const obj1 = {
//     firstName: "Ali",
//     age : 23,
// }
// const obj2 = {
//     firstName: "Abbas",
//     age : 20,
// }

// const ans = about.bind(obj2, "Coding", 1); // Here We can Pass Arguments to the Parameter 

// ans();  







// **************************************************
//                   new Keyword
// **************************************************



