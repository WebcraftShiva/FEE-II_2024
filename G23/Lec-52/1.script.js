// 5.event listener on elements:
var p = document.querySelector("p");

p.addEventListener("mouseenter", function myfunc() {
  console.log("mouse was over me ");
});

//4. event listener:
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   //   btn.onclick = myfunc;
//   //   btn.onclick = hello;
//   btn.addEventListener("click", myfunc);
//   btn.addEventListener("click", hello);
// }
// function myfunc() {
//   console.log("button pressed");
// }
// function hello() {
//   console.log("hello");
// }

// // 3.
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onclick = hello;
// }
// function myfunc() {
//   console.log("button pressed");
// }
// function hello() {
//   console.log("hello");
// }

// // 2.
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onmouseenter = function cursor() {
//     console.log("mouse is over the button");
//   };
// }
// function myfunc() {
//   console.log("button pressed");
// }

// // 1.
// var btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("button pressed");
// };
