//an array is a special variable that can hold more than one value at a time

//number array 
// let numbers:number[] = [10,20,30,40,50]
let numbers:Array<number>=[10,20,30,40,50]
console.log(numbers)

//string array
// let human:string[] = ["Raihan","Kabir","Arif","Alif"]
let bus:Array<string>= ["Volvo","Benz","1J"]
console.log(bus)

//access individual element
let nname:string[]=["a","b","c","d"]
let name1:string=nname[1]
console.log(name1)

//boolean array
let isAvailable:boolean[] = [true,false,false,true]
console.log(isAvailable)

//readonly array
let newArray:readonly number[]=[1,2,3,4,5,6]
let access:number=newArray[4]
console.log(access)

//empty array
let empty_array:number[]=[]
empty_array.push(10)
empty_array.push(20)
console.log(empty_array)

//function
function getTotal(num:number[]):number {
let sum=0
for (let i=0 ; i<num.length; i++)
{
    sum=sum+num[i]
}
return sum
}
console.log(getTotal([10,20,30]))




//simple array
let myarray:number[] = [45,69,64,845]

//mixed array
let mixed_array:(string | number)[] = [20, "raihan" , "Akash" , 250]
console.log(mixed_array)



//array with object
let product:{
    name:string;
    price:number;
    isStock:boolean;
}[] =[
    {
        name:"laptop",
        price:180000,
        isStock:true
    },
    {
        name: "Mouse",
        price: 1500,
        isStock: true
    },
    {
        name: "Keyboard",
        price: 3000,
        isStock: false
    }
]



 /* practice*/

let ages:number[] = [20, 21, 22, 23]
console.log(ages)

let names:string[] = ["Raihan", "Karim", "Hasan"]
console.log(names)

function add(num:number[]) : number {
    let total=0;
    for(let i=0; i<num.length; i++)
    {
        total=total+num[i]
    }
    return total
}
console.log(add([1,2,3,4]))

let multiple_type:(number | string)[] = [
    "Akash","alif" ,4,450
]
console.log(multiple_type)





