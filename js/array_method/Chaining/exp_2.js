function categoryTotal(products)
{
    return products
    .filter((product) =>
    {
        return product.category=='stationery'
    })

    .reduce((total,product) =>
    {
        return total + product.price;
    }, 0)
}

let result=categoryTotal([
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Book", category: "stationery", price: 60 }
])
console.log(result)