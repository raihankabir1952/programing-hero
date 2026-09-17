//interface => interface is a way of define stacture/shape

//basic stracture
interface User {
    name:string;
    age:number;
    address:string;
    id:string
}
let user:User ={
    name:"Rahim",
    age:25,
    address:"Dhaka",
    id:"22-47554-2"
}
console.log(user)

//practice task 1
interface product {
    id:string | number;
    name:string;
    price:number;
    category:string;
    inStock:boolean
}
let mobile:product ={
    id:102,
    name:"galaxy 25",
    price:75000,
    category:"Smart phone",
    inStock:true
}
console.log(mobile)

//practice task 2
interface Product {
    readonly id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    description?: string;
}
let mobile1: Product = {
    id: 101,
    name: "Galaxy S27",
    price: 115000,
    category: "Smart Phone",
    inStock: true
};
let laptop: Product = {
    id: 102,
    name: "Asus VivoBook",
    price: 80000,
    category: "Laptop",
    inStock: true,
    description: "Powerful laptop"
};
console.log(laptop)

//practice task_3
/*
readonly id → number
name         → string
age          → number
email        → string
phone        → optional string
*/
interface human {
    readonly id:number;
    name:string;
    age:number;
    email:string;
    phone?:string
}
let Basil:human ={
    id:101,
    name:"Basil Josep",
    age:25,
    email:"basil123@gmail.com",
}
console.log(Basil)

//nested object+array+interface
interface me {
    readonly id:number | string;
    nid:number;
    age:number;
    name:string;
    address:{
        country:string;
        city:string
    };
    skills:string[];
    project:{
        title:string,
        year:number,
        description?:string
    }[]
}
let raihan:me ={
    id:101,
    nid:22278,
    age:26,
    name:"Raihan",
    address:{
        country:"Bangladesh",
        city:"Rangpur",
    },
    skills:[
        "js","ts","c++"
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
}
console.log(raihan)

//interface extend
interface person {
    name:string;
    age:number;
    email?:string
}
interface stuedent extends person {
    studentId:number
}
interface teacher extends person {
    subject:string
}


let Student:stuedent ={
    name:"Raihan",
    age:25,
    studentId:101
}
let Teacher:teacher ={
    name:"Aminul Islam",
    age:45,
    email:"aminulislam@gmail.com",
    subject:"physics"
}
console.log(Student)
console.log(Teacher)

//practice task_4
interface BCB {
    name:string;
    address:string;
    established?:string
}
interface player extends BCB {
    age:number;
    position:string;
    format?:string;
    skill:string[];
    match_details:{
        against:string;
        format:string;
        year:string|number;
        score?:number|string;
        boling_figure?:number | string;
    }[]
}
let Tamim:player ={
    name:"Tanzid Hasan",
    address:"Bogura",
    age:25,
    position:"opener",
    skill:[
        "batting",
        "filding"
    ],
    match_details:[
        {
            against:"Australia",
            format:"TEST",
            year:2026,
            score:"101(176)"
        },

    ]
}
let hasan:player ={
    name:"Hasan Mhmud",
    address:"unknown",
    age:25,
    position:"lower order",
    skill:[
        "bowling",
        "batting",
        "filding"
    ],
    match_details:[
        {
            against:"Australia",
            format:"TEST",
            year:2026,
            score:"26(75)",
            boling_figure:"6-61"
        },

    ]
}
console.log("Tanzid Hasan 1st Test Details here:", Tamim);
console.log("Hasan Mahmud 1st Test Details here:", hasan);


