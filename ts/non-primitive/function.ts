/*
Functions are reusable code blocks designed to perform a particular task.

Functions are executed when they are called or invoked.
*/

//basic structure
function add(num1:number,num2:number):number{
    return num1 + num2
}
let res = add(2,3)
console.log(res)

/*
ছোট Practice
1=> subtract → দুইটা number নেবে, number return করবে
2=> isEven → একটা number নেবে, boolean return করবে
3=> sayHello → একটা string নেবে, কিছু return করবে না (void)
*/

//1
function subtract(a:number ,b:number):number{
    return a-b;
}
console.log(subtract(4,1))

//2
function isEven (num: number):boolean{
    return num %2===0
}
console.log(isEven(5))

//3
function sayHello(text:string):void{
    console.log(`Hello , ${text}`)
}
sayHello("Raihan")

//function type
type addFunction =(a:number,b:number) =>number

let add1:addFunction = (a,b) => {
    return a+b;
};
console.log(2,3)

//string type
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
    return `Hello ${name}`;
};

console.log(greet("Raihan"));

//void
type CheckAge = (age: number) => boolean;

const isAdult: CheckAge = (age) => {
    return age >= 18;
};

console.log(isAdult(20));

