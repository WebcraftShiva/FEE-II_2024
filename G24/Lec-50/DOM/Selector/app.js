// selector:

// 1.getElementById()
var a = document.getElementById("heading");

a.style.color = "red";
a.style.backgroundColor = "aqua";
a.style.padding = "20px";
a.style.border = "3px solid black";

// 2. getElementByClass()
var b = document.getElementsByClassName("list");
console.log(b[0]);
console.log(b[1]);
// b[0].style.backgroundColor = "red";
// b[1].style.backgroundColor = "red";
for (let lists of b) {
  lists.style.fontWeight = "bold";
  lists.style.color = "purple";
}

// 3. getElementByTagName():
var c = document.getElementsByTagName("h2");
console.log(c);
c[0].style.textDecoration = "line-through";

// 4. querySelector():
// var d = document.querySelector("#heading");
// var d = document.querySelector("ul li a");
// var d = document.querySelectorAll("ul li a");
var d = document.querySelector("li:nth-of-type(3)");
d.style.backgroundColor = "Yellow";
// console.log(d);
