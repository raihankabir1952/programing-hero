/*
array : 
array is a data structure that can hold multiple values of different data types in a single variable.
It is an ordered collection of elements, where each element can be accessed using its index. 
Arrays are commonly used in programming to store and manipulate lists of data.
*/

// const students = ["Rahim", "Karim", "Sakib", "Hasan", "Raihan"];
// let data=["String", 20, true, null,"Bangladesh"]

//various kind of data.
// console.log(data)
// const stu1=students[2]
// console.log(students);
// console.log(stu1);
// console.log(students[1])

//Accessing the Last Array Element Array.at()
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log("Last element : ",fruits[fruits.length-1])
// console.log("Last element : ",fruits.at(-1));

//length
// console.log("Length of Array :",students.length)

//change value
// students[4]="Ashik"
// console.log(students)

//concat
// let a=[1,2,3]
// let b=[4,5,6]
// result=a.concat(b)
// console.log("Concat of two different array :",result)


//toString
// newString=colors.toString()
// console.log("convert array to string :", newString)

//loop in array
// let country=['Bangladesh','Nepal','India','Srilanka']
// let i;
// for(i=0; i<country.length; i++)
// {
// console.log(country[i])



//array of objects
let students = [
    { name: "Raihan", age: 22 },
    { name: "Karim", age: 18 },
    { name: "Hasan", age: 25 }
];

let adults = students.filter(student => student.age >= 20);

console.log(adults);


//array destructuring
let fruits = ["Apple", "Banana", "Mango"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Mango

//skipping element
const nums = [10,20,30,40]
const [a, , , d] = nums
console.log(nums)
console.log(a)
console.log(d)

//rest with array
const id = [101,102,103,104]
const [id1, ...x] = id
console.log(x)

//array reference
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[0] = 100;

console.log(arr1);
console.log(arr2)

//for..of
const roll = [1,2,3,4,5]
for (const rolls of roll){
    console.log(rolls)
}