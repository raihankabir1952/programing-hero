"use strict";
/*
Functions are reusable code blocks designed to perform a particular task.

Functions are executed when they are called or invoked.
*/
//basic structure
function add(num1, num2) {
    return num1 + num2;
}
let res = add(2, 3);
console.log(res);
/*
ছোট Practice
1=> subtract → দুইটা number নেবে, number return করবে
2=> isEven → একটা number নেবে, boolean return করবে
3=> sayHello → একটা string নেবে, কিছু return করবে না (void)
*/
//1
function subtract(a, b) {
    return a - b;
}
console.log(subtract(4, 1));
//2
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(5));
//3
function sayHello(text) {
    console.log(`Hello , ${text}`);
}
sayHello("Raihan");
