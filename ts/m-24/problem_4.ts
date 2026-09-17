//Shopping Cart Calculator
interface Product {
    name : string;
    price : number
}
function calculateCartTotal(products: Product[]): number {
 
    // write your code here
    return products.reduce((total,product) =>
    {
        return total + product.price;
    },0)
 
}
const products1 =[
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
]
console.log(calculateCartTotal(products1))

const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];

console.log(calculateCartTotal(products2)); // 1750
