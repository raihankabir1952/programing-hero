function getAffordableProducts(products)
{
    return products.filter((product) =>
    {
        return product.price <=100
    })
}

let result = getAffordableProducts([
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 },
    { name: "Book", price: 100 }
]);

console.log(result);