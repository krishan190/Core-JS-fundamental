// DOM=> Dom is a tree like structure that represents your html page as a objects that js can read  access and change

// Via dom what is benefit

// Access elements (getElementById,querySelector,queryselectorAll)
// change content (innerText,textContent)
// Handle events (addEventListener)
// create  / remove element dynamically (appendchild,remove)

let a = document.getElementById("heading1");
let b = document.getElementsByTagName("h1");
// let c = document.getElementsByClassName("c1");
let c = document.querySelector(".c1");

c.style.color = "lightgreen";

let a1 = document.querySelector("#heading1");//it returns single object



a.style.color = "blue";
document.body.style.backgroundColor = "#333"
document.body.style.color = "orangered"

// a.innerText = "Welcome";
// b[1].innerText = "Krishna";
// c[1].textContent = "This is a dynamically generated paragraph"



console.log(a.innerText); //it does not consider inner tag and also extra space also not consider
console.log(a.innerHTML);//inner html ke andar agar koi tag contains hai to vo bhi sath me print hoga(it returns multiple html collection)
console.log(a.textContent);


// console.log(a);
// console.log("value of b", b);
// console.log("value of c", c);

let d = document.createElement("h2");
d.innerText = "krishan Namdev";

document.body.appendChild(d);