type person = {
    name:string;
    age:number;
    gender:string;
    nid:string | number;
    passport?:string;
    address:{
        city:string;
        country:string
    }
}
let rakib:person = {
    name:"Rakib",
    age:25,
    gender:"male",
    nid:"1212560",
    address:{
        city:"Dhaka",
        country:"Bangladesh"
    }
}
// console.log(rakib)
console.log(rakib.address)

//practice task
/*
id       → number
name     → string
price    → number
category → string
inStock  → boolean
*/
// type product ={
//     readonly id:number;
//     name:string;
//     price:number;
//     category:string;
//     inStock:boolean;
//     seller?:{
//         name:string;
//         email:string;
//         address:string
//     }
// }
// let mobile:product ={
//     id:101,
//     name:"galaxy s27",
//     price:115000,
//     category:"smart phone",
//     inStock:true,
//     seller:{
//         name:"raihan",
//         email:"raihankabir1952@gmail.com",
//         address:"Rangpur,Bangladesh"
//     }
// }
// let laptop:product ={
//     id:102,
//     name:"asus vivo book",
//     price:80000,
//     category:"laptop",
//     inStock:true
// }
// console.log(mobile)
// console.log(laptop)

//practice task 2
type Product ={
    id: number;
    name: string;
    category: string;
    seller:{
        name: string;
        email: string;
        address: string;
    };
    image: string[];
    reviews:{
        user: string;
        rating: string|number;
        comment: string;
    }[];

};

let mobile : Product ={
    id:101,
    name:"galaxy s25 plus",
    category:"smart phone",
    seller:{
        name:"Karim",
        email:"karim200@gmail.com",
        address:"Dhaka,Bangladesh"
    },
    image:[
        "front.jpg",
        "back.jpg",
        "side.jpg"
    ],
    reviews:[
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
}
console.log(mobile)