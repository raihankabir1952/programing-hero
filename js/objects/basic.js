const student = {
    name: "Rahim",

    //nested obj
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    },
    color: "white",
    age: 380,
    //array
    skills: ["HTML", "CSS", "JavaScript"],

    //function
    greet: function () {
        console.log("hello")
        console.log("hello : ", this.name);
    }
};
//access function
student.greet();

//modify property  
student.color = "red";

//add property
student.seat_capacity = 32

//access address
console.log("access address :", student.address)

//object property check
console.log("name" in student)

//find object key
console.log("Heres the object key :", Object.keys(student))

//find object value
console.log("Heres the object values :", Object.values(student))

//find both kay and value
console.log("Find both key and values :", Object.entries(student))

//show only key
for (const key in student) {
    console.log(key)
}

console.log("..........................................")
//show only value
for (const key in student) {
    console.log(student[key]);
}
console.log("..........................................")

//show both keys and value
for (let key in student) {
    console.log(key, student[key]);
}
console.log("..........................................")



//delete/remove property
delete student.seat_capacity;
console.log(student)
console.log("Dot Notation : ", student.name)
console.log("Bracket Notation :", student["age"])