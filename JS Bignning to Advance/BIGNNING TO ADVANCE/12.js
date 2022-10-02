const numbers = [2,4,6,8];
console.log();
function MultiplyBy2(number, index){
    console.log(`The index is ${index}`)
    console.log(`The Number is ${number}`)
    console.log(`${number}*2 = ${number*2}`)
    console.log("\n")
}

// for (let i = 0; i < numbers.length; i++) {
//     MultiplyBy2(numbers[i], i);
// }

numbers.forEach(MultiplyBy2);

