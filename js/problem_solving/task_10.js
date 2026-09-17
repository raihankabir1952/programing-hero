//Remove Duplicate Values
let numbers = [10, 20, 10, 30, 20, 40, 30];
let unique=[]

for(let i=0; i<numbers.length; i++)
{
    if(!unique.includes(numbers[i]))
    {
        unique.push(numbers[i])
    }
}

console.log(unique)

