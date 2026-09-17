function getLargeNumber(numbers)
{
    return numbers.filter((num) =>
    {
        return num>50
    })
}

let result=getLargeNumber([10,60,45,56,15,100])
console.log(result)