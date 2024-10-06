// //3.
var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  var inp = document.querySelector("input");

  var p = document.querySelector("p");
  p.innerText = inp.value;
  event.preventDefault();
});

// // 2: accessing user data of input field:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   var inp = document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);
//   event.preventDefault();
//   console.log("form submitted");
// });

// // 1. restricting form default behaviour:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("form submitted");
// });
