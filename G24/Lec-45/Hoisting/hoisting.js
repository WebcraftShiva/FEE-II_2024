// 2.let and const: refernce error: temperal dead zone
console.log(a);
let a = 10;

function myfunc() {
  var b = 20;
  console.log(b);
}
myfunc();

// // 1. var: undefined: top of the scope
// console.log(a); //undefined

// var a = 10;
// b();

// function b() {
//   console.log(c);
//   var c = 20;
//   console.log(c);
// }
