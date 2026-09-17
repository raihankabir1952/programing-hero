//Check for a Palindrome

function isPalindrome(str)
{
    let reversed=str.split("").reverse().join("")
    if(str===reversed)
    {
        return true;
    }
    else
    {
        return false
    }
}

let result=isPalindrome("layok")
console.log(result)