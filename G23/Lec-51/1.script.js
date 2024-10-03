var newh1 = document.querySelector("h1");
console.dir(newh1.classList);

// 1. adding class:
newh1.classList.add("red");

// 2. remove classs:
// newh1.classList.remove("red");

// 3.contains: classList.contains
// var b = newh1.classList.contains("red");
// console.dir(b);

// toggle: add and remove class.
newh1.classList.toggle("red");
newh1.classList.toggle("iron");
