//without rest
// function show(numbers)
// {
//     console.log(numbers);
// }

// show(10,20,30);


//with rest operator
// function show(...numbers)
// {
//     console.log(numbers);
// }

// show(10,20,30);
// show(7000)
// show(10,20,50,407,851,426,1,63,9,6,70000)

function add(...numbers)
{
    let sum=0;
    for(let number of numbers)
    {
        sum=sum+number
    }
    return sum

}

console.log(add(10,20,30))
console.log(add(10,20,30,60))


function order(customer,...items)
{
    console.log(customer);

    console.log(items);
}

order("Kabir","Burger","Pizza","Coffee");
order("Kabir","Burger","Pizza","Coffee","Soft drinks");