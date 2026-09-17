//Reverse a Number
function reverseNumber(num)
{
    let reverse=num.toString().split("").reverse().join("")
    return Number(reverse);
} 

let result=reverseNumber(1234)
console.log(result)