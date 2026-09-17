//Social Media Profile Formatter
// "Fahim is 22 years old and lives in Dhaka."
interface User {
    name:string;
    age:number;
    city:number | string
}
function formateUserProfile(user:User):string{
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`
}
console.log(
    formateUserProfile({
    name:"Fahim",
    age:22,
    city:"Dhaka"
})
)