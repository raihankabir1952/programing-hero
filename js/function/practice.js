// function calculateSum(numbers)
// {
//     let sum=0
//     for (let i=0; i<numbers.length; i++)
//     {
//         sum=sum+numbers[i];
//     }

//     return sum
// }

// let numbers = [10, 20, 30, 40, 50];

// let result = calculateSum(numbers);

// console.log(result);


//find the largest number
// function findLargestNumber(numbers)
// {
//     let largest = numbers[0];

//     for(let i = 0; i < numbers.length; i++)
//     {
//         if(numbers[i] > largest)
//         {
//             largest = numbers[i];
//         }
//     }

//     return largest;
// }

// let numbers = [10, 50, 20, 80, 30];

// let result = findLargestNumber(numbers);

// console.log(result);



//find the smallest number
// function smallest(numbers)
// {
//     let small=numbers[0]
//     for(let i=0; i<numbers.length; i++)
//         {
//             if(numbers[i]<small)
//                 {
//                     small=numbers[i]
//                 }
//         }
//         return small;
// }

// let numbers = [40, 10, 70, 5, 30];
// let result=smallest(numbers)
// console.log(result)


//sum of even number
// function sumEvenNumbers(numbers)
// {
//     let sum=0;
//     for(let i=0; i<numbers.length; i++)
//     {
//         if (numbers[i]%2===0)
//         {
//             sum=sum+numbers[i]
//         }
//     }

//     return sum;
// }

// let numbers = [10, 15, 20, 7, 30, 11];
// let result=sumEvenNumbers(numbers)
// console.log(result)

//find even number from a array and push those number a new array
// let arr1=[20,25,14,12,6]
// let arr2=[]
// let res
// for(let i=0; i<arr1.length; i++)
// {
//     if(arr1[i]%2===0)
//     {
//         arr2.push(arr1[i])
//     }
    
// }
// console.log(arr2)

// function findEvenNumber(numbers)
// {
//     let arr1=[]
    
//     for(let i=0; i<numbers.length; i++)
//     {
//         if(numbers[i]%2===0)
//         {
//             arr1.push(numbers[i])
//         }
//     }
// return arr1
// }

// let numbers = [10, 15, 20, 7, 30, 11, 40];
// let result=findEvenNumber(numbers)
// console.log(result)


// function add(a,b)
// {
//     return a+b;
// }

// function multipy(a,b)
// {
//     return a*b;
// }

// let result=add(2,3)
// let final_result=multipy(result,12)
// console.log(`Final Result : ${final_result}`)

//sum of 1 to 7

// let num=[1,2,3,4,5,6,7]
// let sum=0;
// for(let i=0; i<num.length; i++)
// {
//     sum=sum+num[i]
// }
// console.log(sum)

//factorial
// let n=3;
// let fact=1;
// for(let i=1; i<=n; i++)
// {
//     fact=fact*i;
    
// }
// console.log(fact)
// let n,fact=1;
// function factorial(n)
// {
//     for(let i=1; i<=n; i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }

// let result=factorial(5)
// console.log(result)

//find vowel..a/e/i/o/u

// let str="raihan"
// for(let i=0; i<str.length; i++)
// {
//     if ()
//     {

//     }
// }

//Palindrome Check & Count Words
//return all even number and sum
// let num=[10,12,,15,17,3,2]
function findEven(num)
{
    let sum=0;
    for(let i=0; i<num.length; i++)
    {
        if (num[i]%2===0)
        {
            console.log(`Even number are : ${num[i]}`)
            
            sum=sum+num[i];

        }
    }
            return sum;

}

let num=[10,20,,50,150,6,7,9,11,23]
let result=findEven(num)
console.log(result)




