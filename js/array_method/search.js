//1. indexOf() =>array-এর মধ্যে কোনো specific value প্রথম কোথায় আছে, সেই index return করে।
//example
const fruits = ["apple", "banana", "mango", "orange"];
const index = fruits.indexOf("mango");
console.log(index); // Output: 2
const notFoundIndex = fruits.indexOf("grape");
console.log(notFoundIndex); // Output: -1 (যদি value না থাকে, তাহলে -1 return করে)

const duplicateFruits = ["apple", "banana", "mango", "orange", "mango"];
const firstIndex = duplicateFruits.indexOf("mango");
console.log(firstIndex); // Output: 2 (প্রথম occurrence এর index return করে)


//2. lastIndexOf() =>array-এর মধ্যে কোনো specific value শেষ কোথায় আছে, সেই index return করে।
//example
const lastIndex = duplicateFruits.lastIndexOf("mango");
console.log(lastIndex); // Output: 4 (শেষ occurrence এর index return করে)


//3. includes() =>array-এর মধ্যে কোনো specific value আছে কিনা তা check করে। যদি থাকে তাহলে true return করে, না থাকলে false return করে।
//example
const hasMango = fruits.includes("mango");
console.log(hasMango); // Output: true
const hasGrape = fruits.includes("grape");
console.log(hasGrape); // Output: false

const values = [1, 2, 3, 4, 5,NaN];
const hasNaN = values.includes(NaN);
console.log(hasNaN); // Output: true (NaN check করা যায় includes() দিয়ে)


//4. find() =>array-এর মধ্যে কোনো specific value খুঁজে বের করে। যদি value পাওয়া যায়, তাহলে সেই value return করে, না থাকলে undefined return করে।
//example
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // Output: 4 (প্রথম value যা condition satisfy করে তা return করে)

//example
const users = [
    { id: 1, name: "Raihan" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Sakib" }
];
const res = users.find(user => user.id===2)
console.log(res)