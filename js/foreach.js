let students=[
    {id:1, name:"Raihan", marks:80 },
    {id:2, name:"Hasib" , marks:85},
    {id:3, name:"Akash" , marks:90}
]

//foreach
// students.forEach((student,index) =>
//     console.log(index,student.name)
// )

//map
// let res=students.map(students =>students.name)
// console.log(res)

// let updated = students.map(student => student.marks * 2);
// console.log(updated);

//reduce()
const total=students.reduce((acc , student)=>
{
    return acc + student.marks
},0
)
console.log(total)


//count total price
const cart = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 2500 }
];

const result=cart.reduce((acc , product) =>
{
    return acc + product.price
},
0
)
console.log(result)

