//optional chaining
let user = {
    name : "raihan",
    age : 25,
    address : "dhaka"
}

console.log(user?.name); //raihan
console.log(user?.gender); //undefined

//nullish coalescing
let user1 = {
    name : "raihan",
    age : 25,
    address : "dhaka"
}

console.log(user1?.name ?? "Name not found"); //raihan
console.log(user1?.gender ?? "Gender not found"); //Gender not found

//optional chaining plus nullish coalescing
let user2 = {
    name : "raihan",
    age : 25,
    address : "dhaka"
}   
console.log(user2?.name ?? "Name not found"); //raihan
console.log(user2?.gender ?? "Gender not found"); //Gender not found
