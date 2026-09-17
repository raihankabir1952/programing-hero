//filter => array-এর মধ্যে প্রতিটি element এর উপরে কিছু condition apply করে একটি নতুন array return করে।
//always return new array
//example
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
console.log(`Orginal array remains unchanged : ${numbers}`)


//example
const fruits = ["apple", "banana", "mango", "orange"];
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // Output: ["banana", "orange"]
console.log(`Orginal array remains unchanged : ${fruits}`)


//example
const users = [
    { name: "Raihan", active: true },
    { name: "Karim", active: false },
    { name: "Sakib", active: true }
];
const result = users.filter (user => user.active)
console.log(result)


//example (if filter cant find then return [])
const numbers1 = [10, 20, 30];
const result1 = numbers.filter(num => num > 100);
console.log(result1);


//some => array-এর মধ্যে প্রতিটি element এর উপরে কিছু condition apply করে যদি কোন element satisfy করে তাহলে true return করে। otherwise false return করে।
//example
const numbers2 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers2.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true (যদি array-এর মধ্যে কোন element satisfy করে, তাহলে true return করে)

//example
const prices = [100, 200, 300];
const hasExpensiveItem = prices.some(price => price > 500);
console.log(hasExpensiveItem); // Output: false (যদি array-এর মধ্যে কোন element satisfy না করে, তাহলে false return করে)


//every => array-এর মধ্যে প্রতিটি element এর উপরে কিছু condition apply করে যদি সব element satisfy করে তাহলে true return করে। otherwise false return করে।
//example
const numbers3 = [2, 4, 6, 8];
const allEvenNumbers = numbers3.every(num => num % 2 === 0);
console.log(allEvenNumbers); // Output: true (যদি array-এর মধ্যে সব element satisfy করে, তাহলে true return করে)