let firstName = "Abbas";
let lastName = "Abbas123456789";
console.log("FirstName 0 Index is: " + firstName[0]);
console.log("This is First Name Length is: " + firstName.length);

console.log("LastName 0 Index is: " + lastName[0]);
console.log("This is Last Name Length is: " + lastName.length);

console.log(lastName[lastName.length-1]);
console.log(lastName[lastName.length-2]);
console.log(lastName[lastName.length-3]);
console.log(lastName[lastName.length-4]  + "\n\n");


// trim();
// toUpperCase();
// toLowerCase();
// slice();


// trim();
// trim() Function Remove Extra Spaces 
let nameWithSpace = "       Abbas       ";
console.log(nameWithSpace);
let newNameWithSpace = nameWithSpace.trim();
console.log("This is Trimed Space \n" + newNameWithSpace + "\n\n");

// toUpperCase();
// toUpperCase() Function Capitalize All Letters.
let upperCaseName = "abbas";
console.log("This is default Letters " + upperCaseName);
let newUpperCaseName = upperCaseName.toUpperCase();
console.log("This is Changed to UPPER CASE Letters " + newUpperCaseName + "\n\n");

// toLowerCase();
// toLowerCase() Function Lower Case All Letters.
let LowerCaseName = "Abbas";
console.log("This is default Letters " + LowerCaseName);
let newLowerCaseName = LowerCaseName.toLowerCase();
console.log("This is Changed to lower case Letters " + newLowerCaseName  + "\n\n");

//slice()
// Extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).

let sliceName = "Abbas";
console.log("This is default Letters " + sliceName);
let newsliceName = sliceName.slice(0,2);
console.log("This is Sliced String 0 to 2: " + newsliceName);
