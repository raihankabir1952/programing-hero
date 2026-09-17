function addEven(numbers)
{
    //validaton 1
    if (!Array.isArray(numbers))
    {
        return "Invalid"
    }

    ////validaton 2
    if (numbers.length===0)
    {
        return "Invalid"
    }

    ////validaton 3
    if (!numbers.every((num) =>
    {
        return typeof num==="number"
    }))
    {
        return "Invalid"
    }

    let result=numbers.reduce((total,num) =>
    {
        if (num%2===0)
        {
            return total+num
        }
        return total
    }, 0)

    return result
}

let res=addEven([10, 15, 20, 25, 30])
console.log(res)