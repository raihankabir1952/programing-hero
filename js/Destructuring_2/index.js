//Destructuring মানে হলো কোনো array বা object থেকে data বের করে সরাসরি variable-এর মধ্যে রাখা।
/*
two kinds of Destructuring
1=> array Destructuring
2=> object Destructuring
*/

//1.array destructuring
//example
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

//example
const number1 = [10,20,30,40]
const [a , b , , d] = number1
console.log(b)
console.log(a)
let total = a + 100
console.log(`total : ${total}`)

//Rest with Array Destructuring
let names = ["bolt" , "root" , "morgan" , "alex" , "stokes"]
let [fname , ...others] = names
console.log(others)


//2.Object Destructuring
const user = {
    uname: "Rahim",
    age: 22,
    address: "Bangladesh"
};

const { uname, age, address } = user;

console.log(uname);
console.log(age);
console.log(address);

//Object Default Value
let user2 = {
    pname : "Abid"
};
let {pname , page = 18} = user2;
console.log(page)