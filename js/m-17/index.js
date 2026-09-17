// task=0
function fun(product,price,quantity){

    let total = `${product} × ${quantity} = ${price*quantity} TK`
    return total;
}

// let result=fun("pen", 5, 10)
// console.log(result)

//task =>1
function calculateBill(amount, taxRate = 0.05)
{
    let total=amount + (amount * taxRate);
    return total
}
console.log(calculateBill(1000))
console.log(calculateBill(1000, 0.10))

//task =>2
//"Arif\nDeveloper at Programming Hero"
function buildProfileCard(name, title, company)
{
    let final=`${name},
${title} at ${company}`
    return final
}
console.log(buildProfileCard("Arif","Developer","Programing-hero"))

//task =>3
function getLowestPrice(prices)
{
    let min=Math.min(...prices)
    return min;

    // let max=Math.max(...prices)
    // return max
}

console.log(getLowestPrice([340, 120, 560, 90]))

//task =>4
function swapValues(a, b) {

    [a, b] = [b, a];

    return [a, b];
}

console.log(swapValues(5, 10));

//task =>5
function getEmployeeDept(employee) {

    let { name,job: { title, department } } = employee;

    return {
        title,
        department
    };
}

let employee = {
    name: "Nadia",
    job: {
        title: "PM",
        department: "Product"
    }
};

console.log(getEmployeeDept(employee));

//task=>6
function sumAllPrices(prices)
{
     let sum = 0;
    for(let i of prices)
    {
       sum = sum + i
    }

    return sum;
}
let result = sumAllPrices([100, 250, 75])
console.log(result)

//task =>7
function getManagerName(employee) {
    return employee.manager?.name;
}

console.log(
    getManagerName({
        name: "Mim",
        manager: {
            name: "Tanvir"
        }
    })
);

console.log(
    getManagerName({
        name: "Rafi"
    })
);

//task =>8
// function splitFirstRest(arr) {

//     let [first,second, ...rest] = arr;

//     return {
//         first,
//         second,
//         rest
//     };
// }

// console.log(splitFirstRest([10, 20, 30, 40]));