"use strict";
//an array is a special variable that can hold more than one value at a time
//number array 
// let numbers:number[] = [10,20,30,40,50]
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
//string array
// let human:string[] = ["Raihan","Kabir","Arif","Alif"]
let bus = ["Volvo", "Benz", "1J"];
console.log(bus);
//access individual element
let nname = ["a", "b", "c", "d"];
let name1 = nname[1];
console.log(name1);
//boolean array
let isAvailable = [true, false, false, true];
console.log(isAvailable);
//readonly array
let newArray = [1, 2, 3, 4, 5, 6];
let access = newArray[4];
console.log(access);
//empty array
let empty_array = [];
empty_array.push(10);
empty_array.push(20);
console.log(empty_array);
//function
function getTotal(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(getTotal([10, 20, 30]));
//simple array
let myarray = [45, 69, 64, 845];
//mixed array
let mixed_array = [20, "raihan", "Akash", 250];
console.log(mixed_array);
/* practice*/
let ages = [20, 21, 22, 23];
console.log(ages);
let names = ["Raihan", "Karim", "Hasan"];
console.log(names);
function add(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total = total + num[i];
    }
    return total;
}
console.log(add([1, 2, 3, 4]));
