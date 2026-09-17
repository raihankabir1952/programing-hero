//Spread মানে হলো কোনো iterable বা object-এর elements/properties-কে ছড়িয়ে দেওয়া।

//example => array copy
const numbers = [10, 20, 30];
const newNumbers = [...numbers];
newNumbers.push(40)
console.log(newNumbers);
console.log(`Orginal array remains same : ${numbers}`)

//example => meargh two array
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const skills = [...frontend, ...backend];
console.log(skills);

//example => add new element
const roll = [10, 20, 30];
const newroll = [5, ...numbers, 40];
console.log(newroll);

//example => for object
let user = {
    name : "user",
    age : 25
}
let newUser = {
    ...user,
    address : "Dhaka"
}
console.log(newUser)

//example => multiple object mergh
const user2 = {
    name: "Raihan",
    age: 22
};

const address = {
    city: "Dhaka",
    country: "Bangladesh"
};

const profile = {
    ...user2,
    ...address
};

console.log(profile);