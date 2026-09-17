function total(numbers)
{
    if (!Array.isArray(numbers))
    {
        return "Invalid"
    }

    if (numbers.length===0)
    {
        return "Invalid"
    }

    if (!numbers.every((num) =>
    {
        return typeof num==="number"
    }))
    {
        return "Invalid"
    }

    let res= numbers.reduce((total,num) =>
    {
        return (total + num)
    }, 0)
    
    return res / numbers.length

}

let result=total([10,20,30])
console.log(result)