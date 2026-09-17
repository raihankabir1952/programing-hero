//Product of Digits
function productOfDigits(num)
{
    let number=num.toString()
    let total=1
    for(let i=0; i<number.length; i++)
    {
        total=total*number[i]
    }
    return Number(total)
}

let result=productOfDigits(123)
console.log(result)