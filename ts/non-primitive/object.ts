//basic structure
let product:{
    pname:string;
    price:number;
    stock:boolean;
} ={
    pname:"Laptop",
    price:18000,
    stock:true
}

//nested object
let user:{
    name:string;
    age:number;
    id:string;
    gender?:string; //optional property
    address:{
        country:string;
        city:string;
    }
} = {
    name:"Raihan",
    age:26,
    id:"1010",
    address:{
        country:"Bangladesh",
        city:"Dhaka"
    }
}
console.log(user)

//property reuse
//type alias
type student= {
    name:string;
    age:number;
    id:number | string;
    gender?:string;
    dept:string
}
let raihan:student = {
    name:"Raihan",
    age:26,
    id:"101",
    dept:"CSE"
}

let rahim:student = {
    name:"Rahim",
    age:25,
    id:102,
    dept:"EEE"
}

//object + function
function objectWithfunction(user:{
    names:string;
    age:number;
}) :string{
    return `${user.age} and ${user.names}`
}
console.log(objectWithfunction(
    {
    names:"raihan",
    age:25
}
))