// 1.create element:
var h1new = document.createElement("h1");

// 2.add content
h1new.innerText = "DOM Elements:";
console.log(h1new);

// 3.appendChild:
var body = document.querySelector("body");
body.appendChild(h1new);

// 4.append:
h1new.append("Learning in JS");

// 5.remove:
h1new.remove();
body.remove();

// 6.insertAdjacent(where,element):
var btn = document.createElement("button");
btn.innerText = "Click Me";

// var btn = document.createElement("button");
// btn.innerText = "Click Me!";

// body.appendChild(btn);
// btn.style.backgroundColor = "green";
