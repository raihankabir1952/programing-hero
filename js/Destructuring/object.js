//basic Object
// let student={
//     name:"Rahim",
//     age:25,
//     id:45012
// }
// console.log(student.age)
// console.log(student.name)


//Destructuring
// let student={
//     name:"Rahim",
//     age:25,
//     id:45012
// }
// let {name,age,id} = student
// console.log(age,name,id)
// let {name:sname,age:sage,id:sid} = student
// console.log(sname,sage,sid)


// let student=[{
//     name:"Rahim",
//     age:25,
//     address:"Rangpur"
// },
// {
//     name:"Karim",
//     age:24,
//     address:"Nilphamari"
// }]

// let [firstStudent,secondStudent] = student
// console.log(firstStudent,secondStudent)

let student=[{
    name:"Raihan",
    id:4566,
    marks:{
        math:95,
        physics:80,
        english:78
    }
}]

let [firstStudent] = student
// console.log(firstStudent)
// let {name , id , marks}=firstStudent
let {name , id , marks:{math,physics}}=firstStudent
console.log(name,math,physics)
// console.log(name , id , marks)


