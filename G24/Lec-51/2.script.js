// 1.Adding Elements:
var newh1 = document.createElement("h1");
console.dir(newh1);
newh1.innerText = "DOM Elements:";

// 2. appendChild: to add inner value to object: adds to end
var body = document.querySelector("body");
body.appendChild(newh1);

// 3.append:
// newh1.append("Learning in JS");

// 4.prepand: adds to start
body.prepend(newh1);

// 5.remove:
newh1.remove();
body.remove();

// 6.insertAdjacent(where,element):
var btn = document.createElement("button");
btn.innerText = "Click Me";
