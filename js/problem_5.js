//Odd Numbers Up To N
function getOddNumbers(n)
{
    let odds=[];
    for(let i=1;i<=n;i++)
    {
        if(i%2!==0)
        {
            odds.push(i)
        }
    }
    return odds
}

let result=getOddNumbers(10)
console.log(result)