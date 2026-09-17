//1.push() => add element at the end of an array
//change orginal array
const fruits = ["Apple", "Banana"];
fruits.push("Mango", "Orange", "Grapes");
console.log(fruits);

//example 2
const numbers = [10,20]
const result = numbers.push(30, 40);
console.log(`Return length : ${result}`);
console.log(numbers);

//example 3
let names = []
names.push("rahim","karim")
console.log(names)


//2.pop => remove last element from an array
//example
let id = [1,2,3,4]
let removed = id.pop()
console.log(id)
console.log(`Removed element : ${removed}`)

//example
let roll = []
roll.pop()
console.log(roll)

//3.unshift() => add multiple element from first position in an array
//example
const number = [30, 40];
const res = number.unshift(10, 20);
console.log(number);
console.log(res)

//4.shift() => remove first element from and an array
//example
const fol = ["Apple", "Banana", "Mango"];
const remove = fol.shift();
console.log(removed);
console.log(fol);



