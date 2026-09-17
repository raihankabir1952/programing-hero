//Reverse Each Word
let sentence = "I love JavaScript";
let word=sentence.split(" ")

// console.log(sentence)
// console.log(word)
let reverse=[]

for (let i=0; i<word.length; i++)
{
    let reverseWord=word[i].split("").reverse().join("")
    reverse.push(reverseWord)
}

console.log(reverse)


// let email="abc@gmail.com";
// let result=email.split("@")
// console.log(result);
// console.log(result.length)
// let username=result[0]
// let domain=result[result.length-1]
// console.log(`Username : ${username} and Domain : ${domain}`)

