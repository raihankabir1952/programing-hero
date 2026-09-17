//Find the Largest Number in an Array
// let num=[70, 50, 20, 90, 30]

// let largest=num[0]

// for(let i=0;i<num.length;i++)
// {
//     // console.log(num[i])
//     if(num[i]>largest)
//     {
//         largest=num[i];
//     }
    
// }
// console.log(largest)



//Find the smallest Number in an Array
let number=[120,25,1,2,7]
let smallest=number[0]

for(let i=0; i<number.length; i++)
{
    if(number[i]<smallest)
    {
        smallest=number[i]
    }
}
    console.log(smallest)


//smallest=120 => 120<120 (i=0) => false => smallest=120
//smallest=120 => 25<120 (i=1) => true => smallest=25
//smallest=25 => 1<25 (i=2) => true => smallest=1
//smallest=1 => 1<2 (i=3) => false => smallest=1
//smallest=1 => 1<2 (i=3) => false => smallest=1
