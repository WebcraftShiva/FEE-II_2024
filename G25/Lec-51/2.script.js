// 1.create element using Js:
var h1 = document.createElement("h1");
console.dir(h1);
h1.innerText = "DOM: Elements";

// 2.appendChild:
var body = document.querySelector("body");

// body.appendChild(h1);

// 3.append:
// h1.append("- Learning in JS");

// 4.prepand:
body.prepend(h1);

// 5.remove:
// body.remove();

// 6.insertAdjacent(where,element):
var btn = document.createElement("button");
btn.innerText = "Click Me";

// var btn = document.createElement("button");
// btn.innerText = "Click Me!";

// body.appendChild(btn);

var img = document.createElement("img");

console.log(img);
// img.innerText = "abc";
// img.style.backgroundImage = ""
img.setAttribute("src", "");
