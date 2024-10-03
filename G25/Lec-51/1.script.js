var newh1 = document.querySelector("h1");

console.dir(newh1.classList);

// 1.add class: classList.add()
newh1.classList.add("green");
console.dir(newh1.classList[1]);

// 2. remove: classList.remove()
// newh1.classList.remove("green");

// 3.contains: check if class is present or not.
var b = newh1.classList.contains("green");
console.dir(b);

// 4.toggle: used to remove and add class
newh1.classList.toggle("green");
newh1.classList.toggle("black");
