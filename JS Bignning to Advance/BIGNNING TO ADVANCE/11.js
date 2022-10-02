// Hoisting
// hello(); // We Can Call function before declaration but not working in the case of function expressions and arrow functions.
let decide = prompt("Type Sum or Multiply");
console.log(decide);
let firstNum = [+prompt("Enter 1st Number")];
let secondNum = [+prompt("Enter 2nd Number")];
let nums = [...firstNum , ...secondNum];
console.log(`User Entered This Numbers ${nums}`);

function hello() {
    console.log("Inside Function");

    // SUM Arrow Function 
    const sum = (num1, num2) => {
        return num1 + num2;
    }

    // Multiply Arrow Function 
    const multiply = (num1, num2) => {
        return num1 * num2;
    }
    if(decide === "sum"){
        console.log(`This is Sum = ${sum(nums[0],nums[1])}`);
    }
    else{
        console.log(`This is Multiply = ${multiply(nums[0],nums[1])}`);
    };

    // console.log(`This is Sum ${sum(nums[0],nums[1])}`);
    // console.log(`This is Multiply ${multiply(nums[0],nums[1])}`);

}
hello();
