//join => convert array to string
//cant change orginal array

//example 1
const names = ["Akash" , "batash" , "shagor" , "nodi"]
const res = names.join(" ")
console.log(res)
console.log(typeof res)
console.log(typeof names)

//example 2
const letters = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
const word = letters.join("");
console.log(word);

//example 3
const path = ["users", "profile", "123"];
const url = path.join("/");
console.log(url);