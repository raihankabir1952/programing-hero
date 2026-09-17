function reverseNumber(num)
{
    let rev=num.toString().split("").reverse().join("")
    return Number(rev)
}

let result=reverseNumber(1234)
console.log(result)
