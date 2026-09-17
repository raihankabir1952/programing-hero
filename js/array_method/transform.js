//1. map => array-এর মধ্যে প্রতিটি element এর উপরে কিছু operation apply করে একটি নতুন array return করে।
//always return new array
//example
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(`Orginal array remains unchanged : ${numbers}`)