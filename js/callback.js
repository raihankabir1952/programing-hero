//function => 1
function greet()
{
    console.log("hello")
}

function execute(cb)
{
    console.log("first print this line")
    cb()

    console.log("finally print this line")
}
execute(greet)

//function => 2
function add(a,b)
{
    return a+b;
}
function calculate(x,y,cb)
{
    return cb (x,y)
}
let result=calculate(10,20,add)
console.log(result)

//function => 3
console.log("Start");

setTimeout(function () {
    console.log("Hello");
}, 2000);

console.log("End");
