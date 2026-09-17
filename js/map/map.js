//basic 
// let number=[10,20,30,40]
// let result=number.map((num)=>{
// return num+5
// }

// )
// console.log(result)

//Square
// let result=number.map((num) =>
// {
//     return num*num
// })
// console.log(result)

//multiply
// let result=number.map((num) =>
// {
//     return num*2
// })
// console.log(result)

//Uppercase
let names = ["raihan", "kabir", "sakib"];
// let result=names.map((nam) =>
// {
//     return nam.toUpperCase()
// })
// console.log(result)

//Add "Mr."
// let result=names.map((nam) =>
// {
//     return `Mr  ${nam}`
// })

// console.log(result)

//Discount Price
// let price=[10,250,300,12,25]
// let result=price.map((pp) =>
// {
//     return pp*0.5
// })
// console.log(result)
// console.log(price)

//object array
// let students = [
//     { name: "Raihan", marks: 90 },
//     { name: "Kabir", marks: 85 },
//     { name: "Sakib", marks: 80 }
// ];

// let result=students.map((stu) =>
// {
//     return stu.marks
// })
// console.log(result)

//take 3 parameter
// let numbers = [10, 20, 30, 40];

// let result = numbers.map((value, index, array) => {
//     console.log("Value :", value);
//     console.log("Index :", index);
//     console.log("Original Array :", array);
//     console.log("----------------");

//     return value * 2;
// });

// console.log(result);

//another example
// sample output :
//                 1. Raihan
//                 2. Kabir
//                 3. Sakib
let students = ["Raihan", "Kabir", "Sakib"];

let result=students.map((stu,index,array) =>
{
    return `${index+1}  ${stu}`
})
console.log(result.join("\n"));

//using function
function formatProducts(products) {

    let result = products.map((product) => {
        return `${product.name} - ৳${product.price}`;
    });

    return result;
}

let products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 15000 }
];

console.log(formatProducts(products));