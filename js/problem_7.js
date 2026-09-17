// Remove First and Last Character
function removeFirstAndLast(str)
{
    return str.slice(1,str.length-1)
}

let result=removeFirstAndLast("hello")
console.log(result)