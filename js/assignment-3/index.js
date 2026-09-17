//problem =>1
// function studentIntroduction(student)
// {
//     if(typeof student !=="object" || student===null)
//     {
//         return "Invalid"
//     }

//     if(student.name==undefined || student.age==undefined || student.course==undefined )
//     {
//         return "Invalid"
//     }
//     //My name is Rafi. I am 18 years old. I am learning JavaScript.
//     return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
// }


// let result=studentIntroduction({
//   "name": "Rafi",
//   "age": 18,
//   "course": "JavaScript"
// }
// )

// console.log(result)


//problem =>2
// function filterActiveUsers(users){
//     if(!Array.isArray(users) || users.length===0)
//     {
//         return "Invalid"
//     }
//      if (!users.every((user) => {
//         return Object.hasOwn(user, "isActive");
//     })) {
//         return "Invalid";
//     }


//     return users.filter((user) =>{
//         return user.isActive
//     }
//     )
// }

// let result=filterActiveUsers([
//  {name:"A", isActive:true},
//  {name:"B", isActive:false}
// ]
// )

// console.log(result)


//problem =>3
// function countHashtags(caption) {

//     if (typeof caption !== "string") {
//         return "Invalid";
//     }

//     let words = caption.split(" ");

//     let hashtagCount = 0;
//     let longestTag = "";

//     for (let i = 0; i < words.length; i++) {

//         if (words[i].startsWith("#")) {

//             hashtagCount++;

//             let tag = words[i].slice(1);

//             if (tag.length > longestTag.length) {
//                 longestTag = tag;
//             }
//         }
//     }

//     return {
//         hashtagCount: hashtagCount,
//         longestTag: longestTag
//     };
// }


// let result = countHashtags(
//     "Loving this weather today #sunny #vibes #weekend"
// );

// console.log(result);

//problem =>4
// function bonusScore(scores) {
//     //check is array and empty
//     if (!Array.isArray(scores) || scores.length === 0) {
//         return "Invalid"
//     }

//     //check is every element number
//     if (!scores.every((score) => {
//         return typeof score === "number";
//     })) {
//         return "Invalid";
//     }

//     let add=scores.map((score) =>
//     {
//         return score+10;
//     });

//     let total=add.reduce((sum, score) =>
//     {
//         return sum + score
//     },0)

//     return total;
// }

// let result = bonusScore([80, 65, 90, 75]);

// console.log(result);

//problem =>5 
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0)
     {
        return "Invalid";
    }

    //is name and score property available
    if (!students.every(student =>
        Object.hasOwn(student,"name") &&
        Object.hasOwn(student,"score")
    ))
    {
        return "Invalid"
    }

    //is score number
    if(!students.every(student =>
    {
        return typeof student.score==="number"
    }
    ))
    {
        return "Invalid"
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

let res = generateLeaderboard([{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }])
console.log(res)
