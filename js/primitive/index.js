//undefined: a variable is declared but not assigned a value, so it is undefined
let a
console.log(a); // Output: undefined
console.log(typeof undefined); // Output: undefined

//null: a variable is explicitly assigned a null value, indicating the absence of any object value
let b = null;
console.log(b); // Output: null
console.log(typeof null); // Output: object (this is a known quirk in JavaScript)