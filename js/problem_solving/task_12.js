//Product of Digits
function productOfDigit(num)
{
    let str=num.toString()
    let total=1;
    for(let i=0; i<str.length; i++)
    {
        total=total * str[i];
    }
    return total
}

let result=productOfDigit(123)
console.log(result)