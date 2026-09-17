// setTimeout

// setTimeout(() => {
//     console.log("hello");
// },3000)

// setInterval
// setInterval(() => {
//   console.log("Hello");
// }, 2000);

//real example
let count = 10;

const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(timer);
    console.log("times up");
  }
}, 1000);