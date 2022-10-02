

// ****************************************
// Find Square 

// function squareNumber(num) {
//     return num * num;
// }

// console.log(squareNumber(5));



// ****************************************
// Find Area of Rectangle 

// function area(w,l){
//     return w*l;
// }
// console.log(typeof area(5,2));



// ****************************************
// const arr = [1,2,3,4,5];

// function arrMultiplybyTwo (num, index){
//     for (let i = 0; i < arr.length; i++) {
//          num = arr[i] * 2 ;
//          index = i;
//          console.log("The Index is: " , index);
//          console.log("The Number is: " , num);
//          console.log("");
//     }
// }
// arrMultiplybyTwo();



// ****************************************
// For Each Loop

// const arr = [1,2,3,4,5];
// function arrMultiplybyTwo (num, index){
//   console.log(`The Number is: ${num * 2} and The index is: ${index}`);
// }
// // arrMultiplybyTwo();

// arr.forEach(arrMultiplybyTwo);



// ****************************************
// Print Object FirstName from User Array 
// const user = [
//     {firstName: "Ali", age: 23, gender:"Male"},
//     {firstName: "Sajjad", age: 23, gender:"Male"},
//     {firstName: "Bilal", age: 23, gender:"Male"},
//     {firstName: "Sadam", age: 23, gender:"Male"},
//     {firstName: "Zain", age: 23, gender:"Male"},
//     {firstName: "Ubaid", age: 23, gender:"Male"},
//     {firstName: "Gulfam", age: 23, gender:"Male"},
// ]

// function userFirstName ({firstName}){
//     console.log(firstName);
// }
// user.forEach(userFirstName);






// ****************************************
// Sort Low to High Prices Realworld Example 
// const userCart = [
//     {proId: 1, proName: "Mobile", price:5000},
//     {proId: 1, proName: "Mobile", price:1000},
//     {proId: 1, proName: "Mobile", price:3500},
//     {proId: 1, proName: "Mobile", price:500},
//     {proId: 1, proName: "Mobile", price:800},
// ]

// function sortPrice (a,b){
//     return a.price-b.price;
// }
// const sorted = userCart.sort(sortPrice);
// console.log(sorted);
// console.log(userCart);









// // ****************************************
// // Make a Function Which Takes Input and Store in a Object and Return this Object. 
// // 1st Method 

// const userMethod = {
//     about : function () {return `${this.firstName} is ${this.age} years old`;},
//     is18 : function () {return this.age >= 18;},
// }
// function creatUser(firstName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethod.about;
//     user.is18 = userMethod.is18;
//     return user;
// }

// const user1 = creatUser("Abbas", "Abbas@gmail.com",12,"My Address");
// // console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());
// const user2 = creatUser("Ali", "Ali@gmail.com",13,"My Address");
// console.log(user2.is18());
// console.log(user2.about());













// 2nd Method 

// const userMethod = {
//     about : function () {return `${this.firstName} is ${this.age} years old`;},
//     is18 : function () {return this.age >= 18;},
// }
// function creatUser(firstName, email, age, address) {
//     const user = Object.create(userMethod);
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = creatUser("Abbas", "Abbas@gmail.com",12,"My Address");
// // console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());
// const user2 = creatUser("Ali", "Ali@gmail.com",13,"My Address");
// console.log(user2.is18());
// console.log(user2.about());





// ****************************************
// Above We Create a Different Object and Then Set Proto(Reference or Address) to a creatUser Function
// Now You don't Need to Create a Different Object and Then Set Proto.
// Create a Function And Add userMethod Object Functions Using Prototype


// function creatUser(firstName, email, age, address) {
//     const user = Object.create(creatUser.prototype);
//     user.firstName = firstName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// creatUser.prototype.about = function () {return `${this.firstName} is ${this.age} years old`;};
// creatUser.prototype.is18 = function () {return this.age >= 18;};
// const user1 = creatUser("Abbas", "Abbas@gmail.com",12,"My Address");
// // console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());
// const user2 = creatUser("Ali", "Ali@gmail.com",13,"My Address");
// console.log(user2.is18());
// console.log(user2.about());









// ****************************************
// Parent Class / Base Class / Super Class
// class Animals{
//     constructor(name, age){
//         console.log("Constructor Called");
//         this.name = name;
//         this.age= age;
//     }
//     eat(food){return `The ${this.name} Eat ${food}`;}
// }


// // Child Class / Derived Class / Sub Class 
// // Here We Extend Animal Parent Class in Dog Sub Class 

// class Dog extends Animals{   

// }
// // object / instance
// const animal1 = new Dog("Cat", 2)
// const animal2 = new Dog("Lion", 5)
// console.log(animal1.eat("Animal Food"));
// console.log(animal2.eat("Meat"));
// console.log(animal1);
// console.log(animal2);
// console.log(typeof animal1);


