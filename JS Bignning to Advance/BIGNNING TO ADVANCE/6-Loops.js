// For Loop
// While Loop
// Do While Loop
// For of Loop
// For in Loop 
// For Each Loop

// ************************************************************
//                          For Loop
// ************************************************************

// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

// i is not accessible outside of for loop. 
// if you want access declare i outside of for loop
// console.log(i);


// Exercise:   Print Sum of 1st Ten Natural Numbers.
// Like: 1+2+3+4+5+6+7+8+9+10= 55
// Solution:

// let sum = 0;
// let num = 10;
// for (let i = 0; i <= num; i++) {
//     sum = sum + i
//     console.log(i);
// }
// console.log(`The Total of Numbers is: ${sum}`);


// Exercise:   Print All Array items with For Loop.
// Solution:
// let arr1 = ["item1", "item2", "item3", "item4"];
// let arr2 = [];
// for(let i = 0; i<arr1.length; i++){
//   arr2.push(arr1[i].toUpperCase() );
// }
// console.log(arr2);




// ************************************************************
//                          While Loop
// ************************************************************

// let i = 0;
// while (i<=5) {
//     console.log(i);
//     i++;
// }
// console.log(`Loop is Terminated because i = ${i} is Greater than 5 `);

// Exercise:   Print Sum of 1st Ten Natural Numbers.
// Like: 1+2+3+4+5+6+7+8+9+10= 55
// Solution:

// let j = 0;
// let sum = 0;
// let num = 10;
// while(j<=num){
//     console.log(j);
//     sum = sum + j;
//     j++;
// }
// console.log(`The Total of Numbers is: ${sum}`);






// ************************************************************
//                        Do While Loop
// ************************************************************

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while (i<=5)


// Exercise:   Print Sum of 1st Ten Natural Numbers.
// Like: 1+2+3+4+5+6+7+8+9+10= 55
// Solution:

// let j = 0;
// let sum = 0;
// let num = 10;
// do{
//     console.log(j);
//     sum = sum + j;
//     j++;
// }
// while(j<=num)
// console.log(`The Total of Numbers is: ${sum}`);





// ************************************************************
//                        For of Loop
// ************************************************************

// let arr1 = ["item1" , "item2" , "item3", "item4"];

// for(let arr of arr1){
//     console.log(arr);
// }




// ************************************************************
//                        For in Loop
// ************************************************************

// let arr1 = ["item1" , "item2" , "item3", "item4"];

// // It Gives Index Number of Iterations
// for(let index in arr1){
//     console.log(index);
// }

// // It Gives Items of arr1 
// for(let index in arr1){
//     console.log(arr1[index]);
// }






// ************************************************************
//                        For Each Loop
// ************************************************************

// const arr = [1,2,3,4,5];
// function arrMultiplybyTwo (num, index){
    // console.log(`The Number is: ${num * 2} and The index is: ${index}`);
    // }

// arr.forEach(arrMultiplybyTwo);







