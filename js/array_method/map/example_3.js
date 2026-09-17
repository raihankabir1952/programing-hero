function getPrice(product)
{
    return product.map((pro) =>
    {
        return pro.price 
    })
}

let result = getPrice([
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 },
    { name: "Book", price: 100 }
]);

console.log(result);