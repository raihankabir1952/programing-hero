function checkTemperature(temp)
{
    if (temp==35)
    {
        return "Hot"
    }
    else if(temp==10)
    {
        return "Cold"
    }
    else if(temp==20)
    {
        return "Normal"
    }
}

let result = checkTemperature(20)
console.log(result)