let inp = document.querySelector("input");
inp.addEventListener("keydown", function (e) {
  console.log("key:" + e.code);
  console.log("value" + e.key);
});

// //2. keydown with event value of code and key value
// inp.addEventListener("keydown", function (e) {
//   console.log(e);
//   console.log("Key was Pressed");
// });

// // 1. keyup:
// inp.addEventListener("keyup", function () {
//   console.log("Key was Released");
// });
