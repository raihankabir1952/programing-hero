"use strict";
//interface => interface is a way of define stacture/shape
let user = {
    name: "Rahim",
    age: 25,
    address: "Dhaka",
    id: "22-47554-2"
};
console.log(user);
let mobile = {
    id: 102,
    name: "galaxy 25",
    price: 75000,
    category: "Smart phone",
    inStock: true
};
console.log(mobile);
let mobile1 = {
    id: 101,
    name: "Galaxy S27",
    price: 115000,
    category: "Smart Phone",
    inStock: true
};
let laptop = {
    id: 102,
    name: "Asus VivoBook",
    price: 80000,
    category: "Laptop",
    inStock: true,
    description: "Powerful laptop"
};
console.log(laptop);
let Basil = {
    id: 101,
    name: "Basil Josep",
    age: 25,
    email: "basil123@gmail.com",
};
console.log(Basil);
let raihan = {
    id: 101,
    nid: 22278,
    age: 26,
    name: "Raihan",
    address: {
        country: "Bangladesh",
        city: "Rangpur",
    },
    skills: [
        "js", "ts", "c++"
    ],
    project: [
        {
            title: "E-commerce Website",
            year: 2025
        },
        {
            title: "Student Management System",
            year: 2026
        }
    ]
};
console.log(raihan);
let Student = {
    name: "Raihan",
    age: 25,
    studentId: 101
};
let Teacher = {
    name: "Aminul Islam",
    age: 45,
    email: "aminulislam@gmail.com",
    subject: "physics"
};
console.log(Student);
console.log(Teacher);
let Tamim = {
    name: "Tanzid Hasan",
    address: "Bogura",
    age: 25,
    position: "opener",
    skill: [
        "batting",
        "filding"
    ],
    match_details: [
        {
            against: "Australia",
            format: "TEST",
            year: 2026,
            score: "101(176)"
        },
    ]
};
let hasan = {
    name: "Hasan Mhmud",
    address: "unknown",
    age: 25,
    position: "lower order",
    skill: [
        "bowling",
        "batting",
        "filding"
    ],
    match_details: [
        {
            against: "Australia",
            format: "TEST",
            year: 2026,
            score: "26(75)",
            boling_figure: "6-61"
        },
    ]
};
console.log("Tanzid Hasan 1st Test Details here:", Tamim);
console.log("Hasan Mahmud 1st Test Details here:", hasan);
