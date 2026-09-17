"use strict";
//basic structure
let product = {
    pname: "Laptop",
    price: 18000,
    stock: true
};
//nested object
let user = {
    name: "Raihan",
    age: 26,
    id: "1010",
    address: {
        country: "Bangladesh",
        city: "Dhaka"
    }
};
console.log(user);
let raihan = {
    name: "Raihan",
    age: 26,
    id: "101",
    dept: "CSE"
};
let rahim = {
    name: "Rahim",
    age: 25,
    id: 102,
    dept: "EEE"
};
//object + function
function objectWithfunction(user) {
    return `${user.age} and ${user.names}`;
}
console.log(objectWithfunction({
    names: "raihan",
    age: 25
}));
