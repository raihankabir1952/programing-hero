"use strict";
function formateUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}
console.log(formateUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}));
