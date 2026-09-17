// let num=[120,200,150,130]
// let sum=0;
// let len=num.length
// // console.log(len)
// for (let i=0; i<len; i++)
// {
//     sum=sum+num[i]
// }
// console.log(sum/len)

/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }


    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid"
        }

        total = total + times[i];
    }

    return total / times.length;
}


let res = averageResponseTime([120, "200", 150])
console.log(res)