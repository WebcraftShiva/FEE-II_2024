// let and const: refernce error: temperal dead zone
console.log(a);
let a = 10;

function myfunc() {
  var b = 20;
  console.log(b);
}
myfunc();

// var: undefined:
// console.log(a);
// var a = 10;

// function myfunc() {
//   var b = 20;
//   console.log(b);
// }
// myfunc();