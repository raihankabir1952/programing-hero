//1. sort
//example
const fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits);

//numeric string
const numbers = [10, 5, 100, 20];
numbers.sort((a, b) => a - b);
console.log(numbers);


//example (Descending Order)
const number = [10, 5, 100, 20];
numbers.sort((a, b) => b - a);
console.log(number);

//object sort
const students = [
    { name: "Raihan", marks: 70 },
    { name: "Karim", marks: 90 },
    { name: "Sakib", marks: 80 }
];
students.sort((a, b) => a.marks - b.marks);
console.log(students);



//2.reverse => can change orginal array
//example
const numbers1 = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers1);



//3.toSorted => cant change orginal array
//example
const numbers2 = [30, 10, 20];

const result = numbers2.toSorted((a, b) => a - b);

console.log(`Orginal array : ${numbers2}`);
console.log(`Afted apply to sort : ${result}`);
