function getTotal(numbers)
{
    return numbers.reduce((total,sum) =>
    {
        return total+sum;
    }, 0)
}

let result=getTotal([10, 20, 30, 40])
console.log(result)