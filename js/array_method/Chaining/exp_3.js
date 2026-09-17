function getDiscountPrice(products)
{
    return products
    .filter((product) =>
    {
        return product.category=='stationery'
    })

    .map((product) =>
    {
        return product.price * 0.9
    })

    .reduce((total,price) =>
    {
        return total + price;
    }, 0)
}

let result=getDiscountPrice([
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Book", category: "stationery", price: 60 }
])
console.log(result)