// //function => 1
// function outer() {
//     let name = "Raihan";

//     return function () {
//         console.log(name);
//     };
// }

// const fn = outer();

// fn();


// //function => 2
// function outer() {
//     let x = 100;

//     return function () {
//         return x;
//     };
// }

// const result = outer();

// console.log(result());

// //function => 3
// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const c = counter();

// console.log(c());
// console.log(c());
// console.log(c());

//function => 4
// function counter() {
//     let count = 10;

//     return function () {
//         count += 5;
//         return count;
//     };
// }

// const c = counter();

// console.log(c());
// console.log(c());

//function => 5
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const a = counter();
const b = counter();

console.log(a());
console.log(b());
console.log(a());
console.log(b());


//function => 6
function createBank(initialBalance) {
    let balance = initialBalance;         

    return function (amount) {
        balance += amount;
        return balance;
    };
}

const account = createBank(1000);

console.log(account(500));
console.log(account(-200));
console.log(account(300));

//balance=1000;
//1500
//new balance = 1500
//1300
//new balance = 1300
//1600