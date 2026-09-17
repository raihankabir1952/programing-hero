//number : a number is a primitive data type in JavaScript that represents numeric values.

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false

console.log(`Type of NaN : ${typeof NaN}`) //object

console.log(Number.parseInt("100")) //100

//Number vs parseInt
console.log(Number("100")); //100
console.log(Number("100.5px")); 
console.log(parseInt("100.5px")); //100

//toFixed
const num = 99.24789541;
console.log(num.toFixed(2)) //99.24

let arr = [20,3,5,10]
console.log(Math.max(...arr))