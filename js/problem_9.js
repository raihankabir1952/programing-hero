//Find the Shortest Word in a Sentence
function findShortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
    for(let i=0; i<words.length; i++)
    {
        if(words[i].length<shortest.length)
        {
            shortest=words[i]
        }
    }
    return shortest

}

let res=findShortestWord("JavaScript is a fun language")
console.log(res)

