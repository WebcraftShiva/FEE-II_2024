// 2. hoisting in anonymous function expression
var a = 17;

// console.log(myfunc(3)); // Error

var myfunc = function (num) {
  return num ** 3;
};
// console.log(cube(3));
// console.log(myfunc(3)); // here it will work

// // 1. function expression as a anonymous function

// const val = function(a, b) {
//   let c = a + b;
//   return c;
// };
// // console.log(sum(5, 3)); // function name before function annonymous
// // sum(5, 3);
// // console.log(val)
// console.log(val(5, 3));
