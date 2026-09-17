//Find Even Numbers from an Array
let numbers = [10, 15, 20, 7, 30, 11, 40];
let even=[]

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2===0)
    {
        even.push(numbers[i])
    }
}
console.log(even)