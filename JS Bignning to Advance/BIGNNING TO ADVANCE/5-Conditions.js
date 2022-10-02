// *********************************************
//    Ternary Operator / Conditional operator. 
// *********************************************

// let age1 = 17;
// let playGame = age1>=18 ? "Play Cricket!" : "Hide and Seek!";
// console.log(playGame);


// *********************************************
//              if else conditions. 
// *********************************************

// let age = 19;
// let firstName = "Abbas";
// let lastName = "Ali";
// let favnum = prompt("Enter your Number");

// if (age> 18 && firstName==="Abbas" && lastName ==="Ali" && favnum==07) {
//     console.log(`Congratulations the if conditions is true `);
// }
// else(
//     console.log(`Sorry the if conditions is false`)
// )


// *********************************************
//          Nested if else conditions. 
// *********************************************

// let winningNumber = 7;
// let userGuess = +prompt("Guess a Number"); //+ symbol convert string to number

// if (userGuess===winningNumber) {
//     console.log("Congratulations You Guess the Right Number!"); 
// } else {
//     if (userGuess>winningNumber) {
//         console.log("Too High");
//     } else {
//         console.log("Too Low");
//     }
// }



// *********************************************
//          Nested if else conditions. 
// *********************************************

// let tempInDegree = +prompt("Enter the Temprature in Degree");

// if (tempInDegree>40) {
//     console.log("Too Hot Outside");
//     console.log("Temprature is Greater than 40");
//     console.log("Your Input is: " + tempInDegree);
// }
// else if(tempInDegree>30){
//     console.log("Let's Go for Swimming");
//     console.log("Temprature is Greater than 30");
//     console.log("Your Input is: " + tempInDegree);

// }
// else if(tempInDegree>20){
//     console.log("Happy Weather");
//     console.log("Temprature is Greater than 20");
//     console.log("Your Input is: " + tempInDegree);

// }
// else if(tempInDegree>15){
//     console.log("Cold");
//     console.log("Temprature is Greater than 15");
//     console.log("Your Input is: " + tempInDegree);

// }
// else if(tempInDegree>10){
//     console.log("Very Cold Outside");
//     console.log("Temprature is Greater than 10");
//     console.log("Your Input is: " + tempInDegree);

// }
// else if(tempInDegree>0){
//     console.log("Too Cold");
//     console.log("Temprature is Greater than 0");
//     console.log("Your Input is: " + tempInDegree);

// }
// else{
//     console.log("Freezing Outside");
//     console.log("Temprature is Less than 0");
//     console.log("Your Input is: " + tempInDegree);

// }





// *********************************************
//              Switch Statement.
// *********************************************

// let std = +prompt("Enter Your Roll-Number");
// switch (std) {
//     case 1111:
//         document.write("Abbas Ali Got 1050");
//         break;
//     case 1112:
//         document.write("Zaini Got 991");
//         break;
//     case 1113:
//         document.write("Ubaid Got 955");
//         break;
//     case 1114:
//         document.write("Sajjad Got 850");
//         break;
//     case 1115:
//         document.write("Bilal Got 750");
//         break;
//     case 1116:
//         document.write("Saddam Got 685");
//         break;

//     default:
//         document.write("This Student Doesn't Exist");
//         break;
// }