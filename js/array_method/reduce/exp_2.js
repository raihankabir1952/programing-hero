function getTotalPrice(products)
{
    return products.reduce((total,product) =>
    {
        return total+product.price
    }, 0)
}

let result=getTotalPrice([
    { name: "Pen", price: 20 },
    { name: "Bag", price: 500 },
    { name: "Book", price: 100 }
])
console.log(result)