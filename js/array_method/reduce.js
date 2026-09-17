//reduce => array-এর মধ্যে সব element এর উপরে কিছু condition apply করে একটি single value return করে।

//basic structure
const number1=[10,20,30]
const result = number1.reduce((sum,total) =>
{
    return sum + total;
},0)
console.log(result)



//example
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
const res = products.reduce ((sum,product) =>
{
    return sum + product.price
}, 0)
console.log(res)


//example
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
const total = cart.reduce ((sum,c) =>
{
    return sum + c.price  * c.quantity
}, 0)
console.log(total)
