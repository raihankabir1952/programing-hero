// console.log("hello world")
// console.log("raihan" + " " + "kabir")
let sum=0;
let avg;
let numbers=[10,20,30,40,50,60]

for(let i=0; i<numbers.length; i++)
{
    sum=sum+numbers[i];
    avg=sum/numbers.length
}
console.log(sum)
console.log("Average :",sum ,"/",numbers.length,"=" ,avg)
