//task =>1
// function getFormattedPrices(prices) {
    
//     let pp= prices.map((price) => {
//         return `$${price}`;
//     });

//     return pp
// }

// console.log(getFormattedPrices([100, 250, 75]));

//task =>2
// function getAvailableProducts(products) {
//     let res=products.filter((pro) =>
//     {
//         return pro.stock>2;
//     })
//     return res;
// }
// let result=getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] )
// console.log(result)

//task =>3
// function findProductByName(products, name) {
//     return products.find((product) => {
//         return product.name === name;
//     });
// }

// let products = [
//     { name: "Pen", price: 10 },
//     { name: "Bag", price: 500 }
// ];

// console.log(findProductByName(products, "Bag"));

//task =>4
// function getTotalStockValue(products) {
//     return products.reduce((total, product) => {
//         return total + (product.price * product.stock);
//     }, 0);
// }

// let result = getTotalStockValue([
//     { price: 50, stock: 4 },
//     { price: 20, stock: 10 }
// ]);

// console.log(result);

//task =>5

function getDiscountedTotalForCategory(products, category) {
    return products
        .filter((product) => {
            return product.category === category;
        })
        .map((product) => {
            return product.price * 0.90;
        })
        .reduce((total, price) => {
            return total + price;
        }, 0);
}

let products = [
    { name: "Pen", category: "stationery", price: 100 },
    { name: "Bag", category: "accessory", price: 500 },
    { name: "Notebook", category: "stationery", price: 60 }
];

let result = getDiscountedTotalForCategory(products, "stationery");

console.log(result);