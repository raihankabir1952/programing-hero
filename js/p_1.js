function findNumber(numbers)
{
    if(numbers>0)
    {
        return "Positive"
    }
    else if (numbers<0)
    {
        return "Negative"
    }
    else
    {
        return "Zero"
    }
}

let result=findNumber(0)
console.log(result)