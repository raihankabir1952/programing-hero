"use strict";
//task_1:type assertion
let val = "Hello TypeScript";
// Using "as string"
let length1 = val.length;
console.log(length1);
// Using angle-bracket syntax
let length2 = val.length;
console.log(length2);
//task_2:
let value;
value = "100";
//safe conversion
let result = Number(value) + 10;
console.log(result);
// Double assertion
let riskyValue = value;
let product1 = {
    title: "Laptop",
    price: 55000
};
let product2 = {
    title: "mouse",
    price: 500,
    inStock: true
};
function showPrice(product) {
    console.log(product.price);
}
showPrice(product1);
showPrice(product2);
