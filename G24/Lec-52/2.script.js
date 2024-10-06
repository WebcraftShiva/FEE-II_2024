// 3. passing input data to paragraph:
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  let inp = document.querySelector("input");

  let p = document.querySelector("p");
  p.innerText = inp.value;

  e.preventDefault();
});

// // 2. etting input data in our console:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   let inp = document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);

//   e.preventDefault();
// });

// // 1. restricting the form defualt behavious using event called preventDefualt:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("form submitted");
// });
