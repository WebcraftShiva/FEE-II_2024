// var img = document.querySelector("img");
// console.log(img.classList);

var heading = document.querySelector("h1");
console.log(heading.classList);

// 1. Addding class: classList.add()
heading.classList.add("abc");
heading.classList.add("pink");

// 2. to remove class: classList.remove()
// heading.classList.remove("pink");
// console.log(heading.classList);

// 3. check class: classList.contains()
// var b = heading.classList.contains("pink");
// console.log(b);

// 4.toggler: used to remove and add class
heading.classList.toggle("pink");
heading.classList.toggle("black");
