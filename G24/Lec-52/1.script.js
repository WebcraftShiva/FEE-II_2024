var btns = document.querySelectorAll("button");

for (btn of btns) {
  //   btn.onclick = myfunc;
  //   btn.onclick = hello;
  btn.addEventListener("click", myfunc);
  btn.addEventListener("click", hello);
}

function myfunc() {
  console.log("b");
}

function hello() {
  console.log("hello");
}


//4. event listener:
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   //   btn.onclick = myfunc;
//   //   btn.onclick = hello;
//   btn.addEventListener("click", myfunc);
//   btn.addEventListener("click", hello);
// }

// function myfunc() {
//   console.log("button was pressed");
// }

// function hello() {
//   console.log("hello");
// }

// 3.
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onclick = hello;
// }

// function myfunc() {
//   console.log("button was pressed");
// }

// function hello() {
//   console.log("hello");
// }

// // 2.
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onmouseenter = function cursor() {
//     alert("your cursor was over me");
//   };
// }

// function myfunc() {
//   console.log("button was pressed");
// }

// // 1.
// var btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   console.log("button was pressed");
// };
