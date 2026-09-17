//task_1
function printUser(name:string,age:number){ 
    console.log(`${name} is ${age} years old`)
}
printUser("Amina", 22)

//task_2
//Laptop cost 45000 and is available: true
let n_ame:string= "Laptop"
let price:number= 45000
let isAvailable :boolean= true
console.log(`${n_ame} cost ${price} and is available: ${isAvailable}`)

//task_3
let students: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];

console.log(`Total student: ${students.length}`);

//task_4
let person: [string, number] = ["Amina", 22];

console.log(`${person[0]} is ${person[1]} years old`);

//task_5
// let user: {
//     fname:string;
//     email?:string;
// } = {
//     fname:"Amina"
// };
// console.log(`Name: ${user.fname}, Email: ${user.email ?? "Not provided"}`);

//task_6
function isEven(numbers: number): boolean {
    return numbers % 2 === 0;
}

console.log(isEven(8));

//task_7
function sumAll(...numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

//task_8
let numbers1: number[] = [1, 2, 3];
let numbers2: number[] = [4, 5, 6];

let mergedNumbers: number[] = [...numbers1, ...numbers2];

console.log(mergedNumbers);

//task_8
let num: number = 5;

let result: string = num >= 0 ? "Positive" : "Negative";

console.log(result);

//task_9
let username: string | undefined = undefined;

let result0 = username ?? "Guest";

console.log(result0);

//task_10
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value);
}

//task_11
type User = {
    name: string;
    age: number;
    email: string;
    skills: string[];
    active: boolean;
};

let user: User = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Email: ${user.email}`);
console.log(`Skills: ${user.skills.join(", ")}`);
console.log(`Active: ${user.active}`);


//shopping cart
type shoppingCart = {
    productName: string;
    price: number;
    quantity: number;
    isAvailable: boolean
}
let sk:shoppingCart ={
    productName:"Laptop",
    price:45000 ,
    quantity: 3,
    isAvailable:true
}
console.log(`Product: ${sk.productName}`);
console.log(`Price: ${sk.price}`);
console.log(`Quantity: ${sk.quantity}`);
console.log(`Available: ${sk.isAvailable}`);


//login check
function checkLogin(username: string, password: string): void {
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

checkLogin("admin", "1234");


//check even number
function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((number: number) => {
        return number % 2 === 0;
    });
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));


//type-safe function দিয়ে total price calculate করো।
function calculateTotalPrice(price: number, quantity: number): number {
    return price * quantity;
}

console.log(calculateTotalPrice(45000, 2));
