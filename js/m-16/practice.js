//Scope Detective
// function describeDeclaration(keywords)
// {
//     if(keywords==="let")
//     {
//         return "Cannot redeclare, can reassign"
//     }
//     else if(keywords==="const")
//     {
//         return "Cannot redeclare, cannot reassign"
//     }
//     else if(keywords==="var")
//     {
//         return "Can redeclare, can reassign"
//     }
//     else
//     {
//         return "Invalid"
//     }
// }

// let result=describeDeclaration("const")
// console.log(result)


//Movie Ticket Booking
// function bookTicket(movie, seat = 1, pricePerSeat = 300) {
//     if (
//         typeof movie !== "string" ||
//         typeof seat !== "number" ||
//         typeof pricePerSeat !== "number" ||
//         seat < 0 ||
//         pricePerSeat < 0
//     ) {
//         return "Invalid";
//     }

//     let ticketPrice = seat * pricePerSeat;

//     return `${movie}: ${seat} seat(s), Total ৳${ticketPrice}`;
// }

// console.log(bookTicket("Dune"));
// console.log(bookTicket("Dune", 3));
// console.log(bookTicket("Dune", 2, 450));
// console.log(bookTicket(false, 2));


//Receipt Generator
// function generateReceipt(customerName,items,total)
// {

//     if (!Array.isArray(items) || items.length===0)
//         {
//             return "Invalid"
//         }
//     let Total=
//     `Receipt for ${customerName},
//     Items: ${items}
//     Total: ${total}`

//     return Total;
// }

// console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
// console.log(generateReceipt("Raihan", ["Laptop", "Mouse", "Keyboard"], 65000))
// console.log(generateReceipt("Tanvir", [], 0))


//BMI Calculator (Arrow Refactor)

let calculateBMI = (weight, height) =>
    {
        if(weight===0 || weight<0 || height===0 || height<0)
        {
            return "Invalid"
        }

        let BMI = weight / (height * height)
        return Number(BMI.toFixed(2))
    } 

console.log(calculateBMI(70, 1.75))
console.log(calculateBMI(-85, 1.75))