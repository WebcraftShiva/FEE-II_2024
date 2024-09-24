//2. let and const: temparel dead zone: reference error
console.log(a);
myfunc();
const a = 10;
// console.log(a);

function myfunc() {
  var b = 20;
  console.log(b);
}

// 1.var: undefined: before initialisation
// console.log(a);
// myfunc();
// var a = 10;
// // console.log(a);

// function myfunc() {
//   var b = 20;
//   console.log(b);
// }
