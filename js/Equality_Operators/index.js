/*
Equality
├── ==    Loose equality
└── ===   Strict equality

Inequality
├── !=    Loose inequality
└── !==   Strict inequality
*/

//loose equality : if needed then do type conversion
console.log(`5==5 : ${5==5}`) //true
console.log(`"5"==5  : ${"5" == 5}`)
console.log(true == 1) //true
console.log("" == 0) //true

//Strict Equality
console.log(5 === 5) //true
console.log(true === 1) //false
console.log("5" === 5) //false
console.log("" === 0) //false


//!= Loose Inequality (opposite of ==)
console.log(5 != 5)
console.log("5" != 5)

//!== Strict Inequality (opposite of ===)
console.log(5 !== 5)
console.log("5" !== 5)

//important example
5 == "5"       // true
5 === "5"      // false

5 != "5"       // false
5 !== "5"      // true

true == 1      // true
true === 1     // false

false == 0     // true
false === 0    // false

null == undefined   // true
null === undefined  // false

"" == 0        // true
"" === 0       // false