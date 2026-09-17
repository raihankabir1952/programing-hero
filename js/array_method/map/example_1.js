function addTen(numbers)
{
    return numbers.map((number) =>
    {
        return number+10
    })
}

let result=addTen([20, 30, 40, 50])
console.log(result)