// Store Inventory Status
function getStockStatus(stock:number): string {
 
    if (stock=== 0)
    {
        return "Out of stock"
    }
    else if (stock <=5)
    {
        return "Al most sold out"
    }
    else if (stock <=20)
    {
        return "Available"
    }
    else
    {
        return "In Stock"
    }
 
}
console.log(getStockStatus(0))
console.log(getStockStatus(3))
console.log(getStockStatus(12))
console.log(getStockStatus(50))

console.log(getStockStatus(5))
console.log(getStockStatus(6))
console.log(getStockStatus(20))
console.log(getStockStatus(21))
