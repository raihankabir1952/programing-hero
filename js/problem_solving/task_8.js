//Find the Longest Word
let sentence = "JavaScript is a powerful language";
let word=sentence.split(" ")
// console.log(`String : ${sentence[0]}`)
// console.log(`Array : ${word[0]}`)
let longest=word[0];

for(let i=0; i<word.length; i++)
{
    if(word[i].length>longest.length)
    {
        longest=word[i]
    }
}
console.log(longest)