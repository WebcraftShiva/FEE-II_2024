// scope: 1.global scope, 2.functional scope, 3. block scope, 4.lexical scope:

// 4. lexical scope: varibale decalared in outerfunction can be accessible by inner function but value assigned to inner function cannot be accessible by outer function:

function outerFunc() {
  let x = 5;
  let y = 6;
  // console.log(a);

  function innerFunc() {
    // let a = 10;   //This is not possible
    console.log(x);
  }
  // console.log(a); //This is not possible
  innerFunc();
}
outerFunc();

// 3.block scope:
// {
//   let a = 50;
//   const b = 30;
//   var c = 20;
//   //   console.log(a);
// }

// //2. functional scope: varibales accessinle and visible inside a function but not outside the function

// let sum = 50; // global variable
// // let c = 50;
// function calsum(a, b) {
//   let c = a + b; //functional scope
//   console.log(c);
// }
// calsum(5, 2);
// // console.log(c);

// // 1.global scope: by default all variables have global scope
// let a = "global scope";
// var b = "global scope";
// const c = "global scope";

// function scopeGlobal() {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// scopeGlobal();
// console.log(a);
// console.log(b);
// console.log(c);
