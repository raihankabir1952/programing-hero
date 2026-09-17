//1. slice() => ব্যবহার করে array-এর একটা অংশ copy/extract করে নতুন array বানানো যায়।
//example
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const result = fruits.slice(1,3)
console.log(result)
console.log(fruits)

//example
const number1 = [10,20,30,40]
const res = number1.slice(2)
console.log(res)

//example (negative index)
const number2= [10,20,30,40]
const neg = number2.slice(-2)
console.log(neg)


//2.splice
//example
const fruit = ["Apple", "Banana", "Mango", "Orange"];
fruit.splice(1, 2);
console.log(fruit);

//diagram
/*
index:   0        1        2        3
       Apple    Banana    Mango    Orange
                  ↑         ↑
                remove    remove
*/

//example
