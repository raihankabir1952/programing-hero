"use strict";
let rakib = {
    name: "Rakib",
    age: 25,
    gender: "male",
    nid: "1212560",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
// console.log(rakib)
console.log(rakib.address);
let mobile = {
    id: 101,
    name: "galaxy s25 plus",
    category: "smart phone",
    seller: {
        name: "Karim",
        email: "karim200@gmail.com",
        address: "Dhaka,Bangladesh"
    },
    image: [
        "front.jpg",
        "back.jpg",
        "side.jpg"
    ],
    reviews: [
        {
            user: "Karim",
            rating: 5,
            comment: "Excellent phone"
        },
        {
            user: "Hasan",
            rating: 4,
            comment: "Very good phone"
        },
        {
            user: "Fahim",
            rating: 5,
            comment: "Amazing!"
        }
    ]
};
console.log(mobile);
