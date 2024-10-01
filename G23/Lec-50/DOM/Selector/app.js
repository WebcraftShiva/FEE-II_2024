// 1. getELementById: Id selector:

var a = document.getElementById("heading");
// console.log(a);
// console.dir(a);

a.style.color = "pink";
a.style.backgroundColor = "aqua";
a.style.border = "2px solid black";
a.style.padding = "20px";

//  2.class seclector: getElementByClassName

var b = document.getElementsByClassName("items");
console.log(b);
// b[0].style.backgroundColor = "green";
// b[1].style.backgroundColor = "green";
for (let lists of b) {
  lists.style.color = "green";
  lists.style.fontWeight = "bold";
}

// 3. TagName selector: getElementByTagName:

var c = document.getElementsByTagName("h2");

c[0].style.textDecoration = "line-through";
c[0].style.backgroundColor = "yellow";

// 4.querySelector:

// var d = document.querySelector("#work");
// var d = document.querySelector(".work");
// var d = document.querySelector("ul li a");
var d = document.querySelector("li:nth-of-type(1)");

d.style.color = "red";

var e = document.querySelectorAll("ul li");

e[3].style.backgroundColor = "pink";
