//sequence of characters wrapped inside quotes
let fname:string="Raihan"
let age:number=24
let isStudent:boolean=false
console.log(`${fname} ${age} ${isStudent}`)

//string length
console.log(fname.length)

//string as a function
function greet(lname:string):string{
    return `Hello ${lname}`
}
console.log(greet("rahi"))