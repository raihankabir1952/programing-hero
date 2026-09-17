//string: a string is a text or sequence of characters. In JavaScript, strings are represented by the String data type.
let fname="Raihan " ;
let lname="Kabir";
let city='Rangpur';
const age=25;
let message=`Hello world`;
let check=" String "
let greet="Good morning! from Bandorban morning"

console.log(fname)
console.log(city)
console.log(message)
console.log(`Hi,this is ${fname}, i am ${age} years old and i am from ${city}.`)

//string length
console.log("string length :",city.length)
//access last char
console.log("Access last character :",city[city.length-1])

//string index
console.log(`String index : ${city[0]}`)

//string concatenation
console.log(`Full Name : ${fname} ${lname}`);

//toUpperCase
console.log(`Upper Case : ${fname.toUpperCase()}`)

//toLowerCase
console.log(`Lower Case : ${fname.toLowerCase()}`)

//trim=remove extra space both side
console.log(`Whithout trim : ${check}`)
console.log(`Trim : ${check.trim()}`)

//trim start and trim end
console.log(`Trim Start : ${check.trimStart()}`)
console.log(`Trim End : ${check.trimEnd()}`)

//includes
console.log(`Includes : ${message.includes("world")}`)
console.log(`Includes : ${message.includes("World")}`)

//startwith & endwith
console.log(`Start With : ${greet.startsWith("Good")}`)
console.log(`End With : ${greet.endsWith("Bandorban")}`)

let file = "profile.jpg";
let path = "https://google.com";

console.log(path.startsWith("https"))
console.log(file.endsWith(".jpg"));

//indexOf
console.log(`Index Of : ${greet.indexOf("morning")}`)
console.log(`Index Of : ${greet.indexOf("!")}`)
console.log(`Index Of : ${greet.indexOf("Morning")}`)

//last index of
console.log(`Last index of : ${greet.lastIndexOf("morning")}`)

//slice
console.log(`Slice : ${message.slice(0,5)}`)

//replace
let result=greet.replace("Bandorban" , "Chattogram")
console.log(`Replace : ${result}`)

//replace all
console.log(`Replace all : ${greet.replaceAll("morning" , "afternoon")}`)

//split
let skills="HTML CSS JavaScript"
let hyphenatedSkills = skills.split(" ").join("-");
console.log(`Split and Join : ${hyphenatedSkills}`); 
console.log(city.split(""))

//char at
console.log(`Char at : ${fname.charAt(2)}`)

//repet
console.log(`Repeat : ${fname.repeat(2)}`)

//staring comparison
let a="Dhaka"
let b="dhaka"
if(a===b)
{
    console.log("Go to dhaka")
}
else
{
    console.log("dont go")
}



//reverse
function reverseString1(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString1("JavaScript"));


