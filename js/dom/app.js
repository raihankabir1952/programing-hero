const title = document.getElementById("title");
title.innerHTML = "Hello JavaScript";
title.style.backgroundColor = "blue"

const heading = document.getElementsByClassName("heading")
heading[0].innerHTML = "Change"

const tag = document.getElementsByTagName("p")
tag[0].innerHTML = "tag name changed"
tag[0].style.color = "green"

const query = document.querySelector('.query') //class
const query1 = document.querySelector('#queryID') //id

query.innerHTML = "done"
query1.innerHTML = "done2"

const all = document.querySelectorAll('.text')
all[0].innerHTML = "apple"
all[1].innerHTML = "mango"
all[2].innerHTML = "bananna"

function displayDate(){
    document.getElementById("demo").innerHTML = Date()
}

// click
const mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click" , function (){
    document.getElementById("demo2").innerHTML = Date() 
})

const test = document.getElementById("test")
const testbtn = document.getElementById("testbtn")
testbtn.addEventListener("click" , function()  {
    test.innerHTML = "Text changed"
    test.style.color = "green"
})

//alert + arrow function
const bold = document.getElementById("bold")
const button = document.getElementById("button")
button.addEventListener("click" , ()=>{
    bold.innerHTML = alert("Hello,Raihan")
})

//mouseover
const mybtn2 = document.getElementById("mybtn2")
mybtn2.addEventListener("mouseover" , function(){
    document.getElementById("demo3").innerHTML = Date()
})

// <!-- classList.add -->
const add = document.getElementById("class")
add.classList.add("green")

// classList.toggle()
const b = document.getElementById("btn100")
const change = document.getElementById("title100")
b.addEventListener("click" , () =>{
    change.classList.toggle("green")
});

//image change
const imagebtn = document.getElementById("img-btn")
const img = document.getElementById("img")
imagebtn.addEventListener("click" , () => {
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10"
})



//BOM (browser object model)
console.log(window)

// const result = confirm("Are you sure?");
// console.log(result);

// const name = prompt("What is your name?");
// console.log(name);

//location
console.log(window.location)
console.log(window.hostname)
console.log(window.pathname)
//location.href = "https://www.google.com";
const changeLocation = document.getElementById("bom")
changeLocation.addEventListener("click" , () => {
    location.href = "https://www.google.com";
})

//history
const back = document.getElementById("back")
const forword = document.getElementById("forword")

back.addEventListener("click" , () =>{
    history.back()
})
forword.addEventListener("click" , () => {
    history.forward()
})

//timer
const count = document.getElementById("count");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let number = 0;
let timer;

start.addEventListener("click", () => {
  timer = setInterval(() => {
    number++;
    count.textContent = number;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
});

//local storage
const saveBtn = document.getElementById("save");
const showBtn = document.getElementById("show");
const username = document.getElementById("username");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("name", "Raihan");
});

showBtn.addEventListener("click", () => {
  const name = localStorage.getItem("name");

  username.textContent = name;
});

