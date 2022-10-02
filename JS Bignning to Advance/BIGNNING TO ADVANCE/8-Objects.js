// Objects reference type  
// arrays are good but not sufficient 
// for real world data 
// Objects store key value pairs 
// Objects don't have index




// *********************************************
//              How to Create Objects 
// *********************************************

const person = {
    name: "Abbas",
    age: 23,
    "skills and hobbies": ["JavaScript", "Cricket"]
};
// console.log("This is Type of" , typeof person, person);




// *********************************************
//        How to Access Data From Object  
// *********************************************

// Dot Notaition vs Bracket Notation
// person.name;        // Dot Notation
// person["name"];     // Bracket Notation Use this Method
// console.log("We Access Element Name:" , person.name);
// console.log("We Access Element Name:" , person["name"]);




// *********************************************
//   How to Add Key Value Pairs to Objects 
// *********************************************

// person.gender = "Male";     // Dot Notation
// person["gender"] = "Male";  // Bracket Notation
// // console.log("This is Type of" , typeof person, person);
// console.log(person);




// *********************************************
//      Dot Notation vs Bracket Notation
// *********************************************

// We Cannot Access "skills and hobbies" with "." DOT Notation 

// const accessWithDot = person.skills and hobbies;
// console.log(accessWithDot);


// Here We Can Use Bracket Notation to Access "skills and hobbies" 

// const accessWithBracket = person["skills and hobbies"];
// console.log(accessWithBracket);



// Exercise:
// Lets add a Key's "Value" in the Object as a Key and Print Value of this Key
// This is Just Possible with Bracket Notation

// const key = "email";

// person[key] = "Ali0123@gmail.com";
// console.log(person);





// *********************************************
//          How to Iterate a Object
// *********************************************

// for of loop
// for in loop
// Object.Keys


// for in loop

// Print Key's Value
// for(let key in person){
//     console.log(person[key]);
// }

// Print With Key Pairs and Its Value
// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }


// Object.Keys
// const iterate = Object.keys(person);
// console.log(iterate);


// // for of loop
// for (const iterator of Object.keys(person)) {
//     console.log(person[iterator]);
// }





// *********************************************
//              Computed Properties
// *********************************************

// Let's  Add obj1's Property key1 value in the "Obj" Object as a Property and set its Value is 1

//    1st Method with Computed Properties 

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "1";
// const value2 = "2";

// // This is [key1] is a Computed Properties which value is "objkey1"
// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// };
// console.log(obj);



//                                  Another Methods
// *****************************************************************************

//    2nd Method 
// const obj1 = {
//     key1 : "objkey1",     // add "objkey1" Value in "obj" Object as a Property
//     key2 : "objkey2"
//    };
//    const value1 = "1";    // add 1 Value in obj Object as a Property Value
//    const value2 = "2";

//    const obj = {

//    };

// obj[obj1["key1"]]= value1;
// console.log(obj);



// *****************************************************************************

//    3rd Method 
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "1";
// const value2 = "2";

// // This is Empty Object and Lets add Key Pairs and its Value 
// const obj = {

// };

// obj[key1] = value1;
// console.log(obj);

// obj[key2] = value2;
// console.log(obj);




// *********************************************
//              How to Clone Object     // Spread Operator
// *********************************************

const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key1: "OverWrite",
    key3: "value3",
    key4: "value4",
};

// Spread Operator
//  1st Method

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);



                        
//                                  Another Methods
// *****************************************************************************
// Spread Operator with New Key Values Pair

// const obj3 = {...obj1, ...obj2, key5 : "value5"};
// console.log(obj3);



// *****************************************************************************
// const obj3 = {..."abc"};
// console.log(obj3);






// *********************************************
//             Object Destructuring     
// *********************************************

//    1st Method ----> Declare as it is Key Pairs as a Variable
// const {name, age} = person;
// console.log(name, age);


//    2nd Method ----> Declare Key Pairs with ":"  and a Variable Name
// const {name:objDes1, age:objDes2} = person;
// console.log(objDes1, objDes2);



//    3rd Method ----> Declare Key Pairs with ":"  and a Variable Name and Use Spread Operator
//    Below remainProps is a Object to Store All remain Key Pairs and It's Values 

// const {name:objDes1, age:objDes2, ...remainProps} = person;
// console.log(objDes1, objDes2 , remainProps);






// *********************************************
//             Object Inside Arrays     
// *********************************************

// const users = [
//     {userId:1, firstName: "Sajjad", gender:"male"},
//     {userId:2, firstName: "Bilal", gender:"male"},
//     {userId:3, firstName: "Saddam", gender:"male"},
// ]

// for(const user of users){
//     console.log(user);
// }






// *********************************************
//              Nested Destructuring     
// *********************************************

const users = [
    {userId:1, firstName: "Sajjad", gender:"01"},
    {userId:2, firstName: "Bilal", gender:"male"},
    {userId:3, firstName: "Saddam", gender:"male"},
]


//  1st Method
// const [user1, user2, user3] = users;
// console.log(user1, user2, user3);



//  2nd Method
// const [{firstName: userFirstName, userId} , , {gender}] = users;
// console.log(userFirstName, gender , userId);










// *********************************************
//              Iterables     
// *********************************************

// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Abbas";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "Abbas";
// console.log(firstName.length);
// console.log(firstName[2]);












// *********************************************
//              Object Sets     
// *********************************************

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables
// Sets (it is iterable)
// Store data  
// Sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)


// Method	        Description
// new Set()        Creates a new Set
// add()	        Adds a new element to the Set
// delete()	        Removes an element from a Set
// has()	        Returns true if a value exists
// clear()	        Removes all elements from a Set
// forEach()        Invokes a callback for each element
// values()	        Returns an Iterator with all the values in a Set
// keys()	        Same as values()
// entries()        Returns an Iterator with the [value,value] pairs from a Set
// Property	        Description
// size	            Returns the number elements in a Set


//      How to Create Object Set 
// ************************************
// const numbers = new Set([1,2,3,4,5,5]);  // 5 display once, unique items only (no duplicates allowed)
// const char = new Set("abc");
// console.log(numbers);
// // console.log(char);
// // console.log(numbers[2]);   // undefined No index-based access 





//      add() 
// ************************************

// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// numbers.add(6);     // add values
// numbers.add(char);  // add variables
// numbers.add(["item1","item2","item3"]);     // These are different arrays and it shows duplicated result, just because these arrays has diiferent memory address  
// numbers.add(["item1","item2","item3"]);     // These are different arrays and it shows duplicated result, just because these arrays has diiferent memory address 
// // console.log(numbers);




//      has() 
// ************************************
// check weather a number exist or not 
// Returns true if a value exists 

// if (numbers.has(1)) {
//     console.log("1 is Exist");
// }else{
//     console.log("1 is not Exist");
// }






//      delete()
// ************************************
// Removes an element from a Set
// numbers.delete(1); 
// console.log(numbers);




//      clear()
// ************************************
// Removes all elements from a Set
// numbers.clear(); 
// console.log(numbers);



//      forEach()
// ************************************
// Invokes a callback for each element

// console.log("This is For of Loop ");
// for (const iterator of numbers) {
//     console.log(iterator);
// }


// console.log("This is ForEach Loop ");
// numbers.forEach(element => {
//     console.log(element);
// });



//      values()
// ************************************
// Returns an Iterator with all the values in a Set

// for (const iterator of numbers.values()) {
// console.log(iterator);
    
// }





//      keys()
// ************************************
// Same as values()

// console.log(numbers.keys());





//      entries() 
// ************************************
// Returns an Iterator with the [value,value] pairs from a Set
// console.log(numbers.entries());





// ****************************************
// Find a Set Length 
// const myarr = [1,2,3,3,4,4,5,5,6];
// const uniqueElements = new Set(myarr);
// console.log("My array",myarr);
// console.log("Unique Elements",uniqueElements);

// let length = 0;
// for (const iterator of uniqueElements) {
// length++;
// }
// console.log("Set Length" , length);










// *********************************************
//              Object Maps     
// *********************************************
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.


// Method	       Description
// new Map()       Creates a new Map object
// set()	       Sets the value for a key in a Map
// get()	       Gets the value for a key in a Map
// clear()	       Removes all the elements from a Map
// delete()        Removes a Map element specified by a key
// has()	       Returns true if a key exists in a Map
// forEach()       Invokes a callback for each key/value pair in a Map
// entries()       Returns an iterator object with the [key, value] pairs in a Map
// keys()	       Returns an iterator object with the keys in a Map
// values()        Returns an iterator object of the values in a Map
// Property        Description
// size	           Returns the number of Map elements



// Maps is an iterable
// Store data in ordered fashion
// Store key value pair (like object)
// Duplicate keys are not allowed like objects
// Different between maps and objects
// Objects can only have string or symbol as key 
// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "Abbas",
//     age: 7,
//     1:"one"
// }




//          new Map()       
// ************************************
// Creates a new Map object
// const myarr = new Map();



//          set()       
// ************************************
// Sets the value for a key in a Map
// myarr.set("firstName", "Abbas");
// myarr.set(1, "one");            // 1 is a Number not String. Object Store Key Pairs in String or Symbol  But in the  Map We can Store Number, String, Array.  
// // console.log(myarr);

//          get()
// ************************************
// Gets the value for a key in a Map
// const getter = myarr.get("firstName");
// console.log(getter);



//          keys()
// ************************************
// Returns an iterator object with the keys in a Map
// const allKey = myarr.keys();
// console.log(allKey);






// *********************************************
//        Clone Using Object.Assign     
// *********************************************

// const obj5 = {
//     id: 1,
//     fName: "Sajjad"
// }
// const obj6 = Object.assign({} , obj5); // Object.assign({}, Clone Object Name...) tell that create a Object 
// obj5.gender = "Male";
// console.log(obj5);
// console.log(obj6);









// *********************************************
//      Create Object Using Object.create()   
// *********************************************
// const obj11 = {
//     key1: "Value1",
//     key2: "Value2",
// }

// const obj22 = Object.create(obj11);    // Object.create is Create a Object and We Can access another Object in Object Which Created by Object.create by Passing Object, Function, Anything Else Name.
// obj22.key3 = "Value3";
// console.log(obj22);
// console.log(obj22.__proto__);  

// __proto__  === [[Prototype]]    It is Just a Reference of another Object, Function and Anything Else.
//          AND 
//  Prototype is Defferent from Above. 



// Exercise
// ****************************************
// Make a Function Which Takes Input and Store in a Object and Return this Object. 
// 1st Method 

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
// Here We Access userMethod Object using Object.create 
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






// *********************************************
//              Optional Chaining     
// *********************************************
// By Chance userData property Doesn't Exist at that time, and We Know That Property will Exist in Future We Use Optional Chaining.
// Where we get values we use Question Mark ? before . Dot 

// const userData = {
//     firstName : "Abbas",
//     address:{houseNumber:1234}  // If We Remove This Address, the Result will be Undefined on Console with No Errors. 
// }

// console.log(userData?.firstName);
// console.log(userData?.address?.houseNumber);






// ********************************************************************************************************************************
//                                                  Object Oriented Programming
// ********************************************************************************************************************************


// **************************************************
//                   Prototype
// **************************************************
// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

// *********************
// Adding Properties and Methods to Objects.
// Sometimes you want to add new properties (or methods) to all existing objects of a given type.
// Sometimes you want to add new properties (or methods) to an object constructor.

// *********************
// Using the prototype Property.
// The JavaScript prototype property allows you to add new properties to object constructors:

// This is Normal Function and We Can Treat it as Function and Object 
// Function Gives us a Empty Object and We can add our own properties and its values in prototype using .prototype

// function singHello() {
//     return "Hello World";
// }

// console.log(singHello());

// // javascript function ===> function  + object
// // We Can our Own Properties to Function protoype
// // Only Functions Provide Prototype Property

// singHello.prototype.newProp = "This is New Property Value";
// singHello.prototype.newAnotherProp = "This is Another Prototype Property Value";

// console.log(singHello.prototype.newProp);
// console.log(singHello.prototype.newAnotherProp);
// console.log(singHello.prototype);


// // name property ---> tells function name;
// console.log(singHello.name);





// Exercise Same Which We Solve in proto and [[prototype]]
// The creatUser Function is Constructor Function.
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








// **************************************************
//                   new keyword
// **************************************************
// 1.) this = {}
// 2.) return {} 
//

// The new Keyword create relation between functions and set automatically values of function. 
// The New Keyword Create this object and Return this Object 


// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
 


// **************************************************
//                   hasOwnProperty
// **************************************************
// We Can Check the key pairs with the help of hasOwnProperty which not have Own property hasOwnProperty Ignore these Key Pairs 

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
// // console.log(user1.is18());
// // console.log(user1.about());
// const user2 = creatUser("Ali", "Ali@gmail.com",13,"My Address");
// // console.log(user2.is18());
// // console.log(user2.about());


// for(let key in user1){
//     // console.log(key);
//     if(user1.hasOwnProperty(key)){  // Just Because this hasOwnProperty We can see and Print creatUser has Own Keys
//         console.log(key);
//     }
// }














// **************************************************
//                      Class
// **************************************************
// 2015 / es6 
// class keyword 
// class are fake
// class constructor return automatically object

// class CreatUser{
//     constructor(firstName, email, age, address){
//     console.log("Constructor Called");
//     this.firstName = firstName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// about(){return `${this.firstName} is ${this.age} years old`;}
// is18(){return this.age >= 18;}
// }

// // We Cannot Create Object Without new Keyword 
// //object / instance 

// const user1 = new CreatUser("Abbas", "Abbas@gmail.com",5,"my address"); // Here We Create Object and Constructor Called Automatically.
// console.log(user1);
// // We can Access Anything Like Object 
// console.log(user1.firstName);
// console.log(user1.is18());
// // We can See any User Prototype 
// console.log(Object.getPrototypeOf(user1));



// *********************
// Inheritance 

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





// *********************
// super() 
// We Use Parent Class in Sub Class and Parent Class Constructor is not Enough but we Use it Now We Can Create Sub Class Constructor and in this Cunstructor we Use Super() keyword

// // Parent Class / Base Class / Super Class
// class Animals{
//     constructor(name, age){
//         console.log("Constructor Called");
//         this.name = name;
//         this.age= age;
//     }
//     // This is Methods 
//     eat(food){return `The ${this.name} Eat ${food}`;}
//     run() { return `${this.name} is Running At ${this.speed}kmph`};

// }


// // Child Class / Derived Class / Sub Class 
// // Here We Extend Animal Parent Class in Dog Sub Class 

// class Dog extends Animals{   
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed;
//     }
// }

// class Lion extends Dog{
// }
// // object / instance
// const animal1 = new Dog("Dog", 2, 30)
// const animal2 = new Lion("Lion", 5, 70)
// // call Methods 
// console.log(animal1.eat("Animal Food"));
// console.log(animal2.eat("Meat"));
// console.log(animal1.run());
// console.log(animal2.run());
// // print Objects 
// console.log(animal1);
// console.log(animal2);
// console.log(typeof animal1);





// *********************
// getter and setter

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     // This is Getter Get Method Give us a Function as a Property.
//     // We Can Access Getter Function as a Property.  Example person1.fullName.
//     // If I Don't Use get We will not access like example above.
//     // We access like this. Example person.fullName(). 
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // This is Setter Set Method. We can Set and Modifie Function or Property After Creating Object.
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Abbas", "Ali", 23);
// console.log(person1);
// person1.fullName = "Maani Jutt";
// console.log(person1.fullName);









// *********************
// Static Methods and Static Properties.


// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     // It is Not Accessible by a Object. 
//     // We Can Access this Just with Class Name like Person.classInfo()

//     // Static Methods
//     static classInfo(){ return `This is Class Info`}

//     // Static Property
//     static prop = "This is Static Property";


//     // This is Getter Get Method Give us a Function as a Property.
//     // We Can Access Getter Function as a Property.  Example person1.fullName.
//     // If I Don't Use get We will not access like example above.
//     // We access like this. Example person.fullName(). 
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // This is Setter Set Method. We can Set and Modifie Function or Property After Creating Object.
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Abbas", "Ali", 23);
// console.log(person1);
// person1.fullName = "Maani Jutt";
// console.log(person1.fullName);
// console.log(Person.classInfo());
// console.log(Person.prop);
// // console.log(person1.classInfo());



