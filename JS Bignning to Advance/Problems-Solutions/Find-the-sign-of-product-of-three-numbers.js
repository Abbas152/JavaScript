document.write("Find the sign of product of three numbers");
let num1 = +prompt("Enter 1st Number", 0);
let num2 = +prompt("Enter 2nd Number", 0);
let num3 = +prompt("Enter 3rd Number", 0);

if(num1>0 && num2>0 && num3>0){
    // alert("The sign is +");
    console.log("The sign is +");
}
else if(num1<0 || num2>0 || num3>0){
    // alert("The sign is -");
    console.log("The sign is -");
}
else if(num1>0 || num2<0 || num3>0){
    // alert("The sign is -");
    console.log("The sign is -");
}
else if(num1>0 || num2>0 || num3<0){
    // alert("The sign is -");
    console.log("The sign is -");
}
