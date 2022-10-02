// Arrays 
// Array Push 
// Array Pop 
// Array Shift 
// Array Unshift 
// Spread Operator
// Array Destructuring


// *****************************************************
//                      Arrays
// *****************************************************


const friends = ["item1", "item2", "item3", "item4"];
const mixed = [1, "item5", null, undefined];
// console.log("Friends Array" , friends);
// console.log("Mixed Array" , mixed);


// To Check this friends Array is really Array or Object? 
// const obj = {}; // This is object just for Difference Btw Array and Objects.

// console.log("This is Array? ", Array.isArray(obj));   // False. This is Object
// console.log("This is Array? ", Array.isArray(friends)); // True. This is Array


// Change 0 index value 
// friends[0]= "Shahbaz";
// console.log("Value of 0 Index of Array Friends is Replaced with item1 to Shahbaz ",friends);
// console.log("Type of Array is: " , typeof friends);




// *****************************************************
//                      Array Push 
// *****************************************************

// This Add Items to the Last Index 
// friends.push("item5");
// console.log("item5 is Pushed to the last Index of friends Array" , friends);



// *****************************************************
//                      Array Pop 
// *****************************************************

// This Removed Items from the Last Index and Returned Value We can Store any Variables  
// console.log(friends.pop(), "This is Popped We can store it in another variable ");
// console.log("item5 is Popped(Removed) from last Index of friends Array " , friends);


// *****************************************************
//                      Array Unshift
// *****************************************************

// This Add Items to the 1st Index 
// console.log(friends.unshift("item5"));
// console.log("item5 is Unshifted to the 1st Index " , friends);



// *****************************************************
//                      Array Shift 
// *****************************************************

// This Removed Items from the 1st Index and Returned Value We can Store any Variables 
// console.log(friends.shift(), "This is Shifted(Removed) and We can store it in another variable");
// console.log("item5 is Shifted(Removed) from 1st index of friends Array" , friends);


// *****************************************************
//                      Clone Array 
// *****************************************************

// 1st Method 
// Clone Array  ArrayName.slice(0)
// const cloneArray = friends.slice(0);
// console.log("Clone Array ", cloneArray);
// friends.push("item5");

// console.log("After Push item5")
// console.log("Friends Array" , friends);
// console.log("Clone Array ", cloneArray);



// 2nd Method 
// Clone Array [].concat()
// const cloneArray = [].concat(friends);
// console.log("Clone Array ", cloneArray);
// friends.push("item5");

// console.log("After Push item5")
// console.log("Friends Array" , friends);
// console.log("Clone Array ", cloneArray);



// 3rd Method (New Way)   Spread Operator...
// Clone Array [...ArrayName]
// const cloneArray = [...friends];
// console.log("Clone Array ", cloneArray);
// friends.push("item5");

// console.log("After Push item5")
// console.log("Friends Array" , friends);
// console.log("Clone Array ", cloneArray);



// *****************************************************
//                Concatinate Two Arrays   // Spread Operator...
// *****************************************************
// const concatTwoArray = [...friends, ...mixed, "item6"];
// console.log("ConcatTwoArray" , concatTwoArray);



// *****************************************************
//                  Array Destructuring
// *****************************************************

// Exercise:
// Make a Array in which 2 Elements 
// Store 1st Element in another Variable
// Store 2nd Element in another Variable

// It is Also Work But We can Use Array Destructuring 
// const arr1 = friends[0];
// const arr2 = friends[1];
// console.log(arr1, arr2);


// Array Destructuring *************Destructuring***************

// item1 assign to arr1 AND item2 assign to arr2 of friends Array

// const [arr1, arr2] = friends; 
// console.log(arr1, arr2);


// Suppose We have Three Elements of a Array.
// 1st We Store in 1st Variable and 3rd Store in 2nd Variable
// "," Skip that Element and Go for the Next Element 

// const [arr1 , , arr2] = friends;
// console.log(arr1, arr2);


// Suppose We have Four Elements of a Array.
// We Store 1st Element in 1st Variable and 2nd Element in 2nd Variable and Remain All Elements Store in a New Array
// We Use Spread Operator in the last New Array to Store All Remain Elements in a New Array 
// arr3 is a New Array 

// const [arr1, arr2, ...arr3] = friends;
// console.log(arr1, arr2, "\nThis is New Array arr3:", arr3);






// *****************************************************
//                 Important Methods of Array
// *****************************************************



//                    For Each Loop
// *****************************************************
// 1st For each Loop Give us a 1st Number which store on 0 Index and So on...
// 2nd Give us a Index number. 
// And It depends to us We Print or Store Index number.
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// const arr = [1,2,3,4,5];
// function arrMultiplybyTwo (num, index){
// console.log(`The Number is: ${num * 2} and The index is: ${index}`);
// }
// arr.forEach(arrMultiplybyTwo);



// Exercise
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



//                      Map Method
// *****************************************************
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// Best Practice is When we Use Map Method don't Print direct on Console. Use Return , Example Below 




// const arr = [1,2,3,4,5];
// const arrMultiplybyTwo = (num) => {
//     return num * num;
// }
// const square = arr.map(arrMultiplybyTwo);
// console.log(square);




// Exercise
// Print Object FirstName from User Array 
// const user = [
//     { firstName: "Ali", age: 23, gender: "Male" },
//     { firstName: "Sajjad", age: 23, gender: "Male" },
//     { firstName: "Bilal", age: 23, gender: "Male" },
//     { firstName: "Sadam", age: 23, gender: "Male" },
//     { firstName: "Zain", age: 23, gender: "Male" },
//     { firstName: "Ubaid", age: 23, gender: "Male" },
//     { firstName: "Gulfam", age: 23, gender: "Male" },
// ]

// function userFirstName({ firstName }) {
//     return firstName;
// }
// const arrFirstName = user.map(userFirstName);
// console.log(arrFirstName);





//                    Filter Method
// *****************************************************
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// The filter() method callback function always return True or False Value Which mean we use Return not print on console
// It Always Store True Value Data in New Array Like Below Example

// const arr = [1,2,3,4,5];
// const isEven = function (num){
//     return num%2===0;
// }
// const arrEven = arr.filter(isEven); 
// console.log("The Filter Method always store True Values " , arrEven);







//                    Reduce Method
// *****************************************************
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// The reduce() method takes two arguments 
// 1st Accomulater Value.
// 2nd Current Value 
// By default Accomulator Pick 1st Value of Array and Current Value pick 2nd value of Array 
// We can Set Accomulator Value. 



// Exercise Print Sum of All Numbers which Store in a Array
// const arr = [1,2,3,4,5];
// function sumAll(accomulator, currenValue){
//     return accomulator + currenValue;
// }
// const Total = arr.reduce(sumAll); 
// console.log(Total);




// Exercise
// Print Sum of All Product Prices From Array

// const userCart = [
//     {userId: 1, productName: "Mobile", price:10000},
//     {userId: 2, productName: "Mobile", price:20000},
//     {userId: 3, productName: "Mobile", price:30000},
//     {userId: 4, productName: "Mobile", price:40000},
// ]

// function sumOfPrice (totalPrice, currenValue){
//     return totalPrice + currenValue.price;
// }

// const Total = userCart.reduce(sumOfPrice, 0);
// console.log(Total);


//          How is Worked Reduce
// **************************************** 
// totalPrice      currentValue     return 
// 0                 {}              10000
// 10000            20000            30000
// 30000            30000            60000
// 60000            40000            100000
// ****************************************







//                      Sort Method
// *****************************************************
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

// const arr = ["a","f","d","v","b","s","A"];
// arr.sort();
// console.log(arr);


// Please Comment Above Block
// If We Sort Numbers Then We need to make a Function. 
// Sort Numbers 

// const arr = [1,9,2,5,8,7,4];
// function sortNumbers(a,b){
//     return a-b;
// }
// const sorted = arr.sort(sortNumbers);
// console.log(sorted);




// RealWorld Example 
// ****************************************
// Sort Low to High Prices Realworld Example 

// const userCart = [
//     {proId: 1, proName: "Mobile", price:5000},
//     {proId: 2, proName: "Mobile", price:1000},
//     {proId: 3, proName: "Mobile", price:3005},
//     {proId: 4, proName: "Mobile", price:500},
//     {proId: 5, proName: "Mobile", price:800},
// ]

// function sortPrice (a,b){
//     return a.price-b.price;
// }
// const sorted = userCart.sort(sortPrice);
// console.log(sorted);
// console.log("We Can see the Original Array has been Changed: " , userCart);












//                      Find Method
// *****************************************************
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.


// Search a String Which Length is 3

// const arr = ["Abbas", "Ali", "Shahbaz", "Hussain"];
// function isLength3 (str){
//     return str.length === 3;
// }
// const ans = arr.find(isLength3);
// console.log(ans);


// RealWorld Example 
// ****************************************
// const users = [
//         {userId: 1, proName: "Mobile", price:5000},
//         {userId: 2, proName: "Mobile", price:1000},
//         {userId: 3, proName: "Mobile", price:3005},
//         {userId: 4, proName: "Mobile", price:500},
//         {userId: 5, proName: "Mobile", price:800},
//     ]

// function findPro(num){
//     return num.userId === 5;
// }
// const ans = users.find(findPro);
// console.log(ans);



//                      Every Method
// *****************************************************
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array


// Check Every Number is Even 

// const arr = [2,4,6,8,10];
// function isEven (num){
//     return num%2 === 0;
// }
// const ans = arr.every(isEven);
// console.log(ans);



// Check All Product Are Less Than 3000?

// const users = [
//             {userId: 1, proName: "Mobile", price:5000}, 
//             {userId: 2, proName: "Mobile", price:1000},
//             {userId: 3, proName: "Mobile", price:3005},
//             {userId: 4, proName: "Mobile", price:500},
//             {userId: 5, proName: "Mobile", price:800},
//         ]

//     function findPro(num){
//         return num.price < 3000;  // Change Price in Array Object to see Difference
//     }
//     const ans = users.every(findPro);
//     console.log(ans);





//                      Some Method
// *****************************************************
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Check Some Number is Even 

// const arr = [1,3,5,8,11];
// function isEven (num){
//     return num%2 === 0;
// }
// const ans = arr.some(isEven);
// console.log(ans);




// Check All Products Some Product Price is 3005?

// const users = [
//             {userId: 1, proName: "Mobile", price:5000}, 
//             {userId: 2, proName: "Mobile", price:1000},
//             {userId: 3, proName: "Mobile", price:3005},
//             {userId: 4, proName: "Mobile", price:500},
//             {userId: 5, proName: "Mobile", price:800},
//         ]

//     function findPro(num){
//         return num.price > 1000;  // Change Price in Array Object to see Difference
//     }
//     const ans = users.some(findPro);
//     console.log(ans);







//                      Fill Method
// *****************************************************
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.


// Create a Array which based on 10 Elements 0;

// const arr = new Array(10).fill(0);
// console.log(arr);




// Create a Array which based on 10 Elements 1 to 10 AND Change index[2] to index[5] Value 0;
// const arr = [1,2,3,4,5,6,7,8,9];
// arr.fill(0,2,5);             // fill(Value, Start, End)
// console.log(arr);







//                      Splice Method
// *****************************************************
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// The splice() method We can Store Deleted Items in any Variable
// start , delete , insert 

// const arr = ["item1", "item2", "item3", "item4"];

// const del = arr.splice(0, 2, "item Inserted", "Item Insert", "Whoo");
// console.log(arr);
// console.log(del);







