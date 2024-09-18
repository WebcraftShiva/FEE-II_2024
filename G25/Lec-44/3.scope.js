// scope: 1:golbal, 2:function; 3:block scope; 4: lexical scope:

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

// 2. functional scope:
let c = 25; //global scope
function myfun(a, b) {
  let c = a + b; //functional scope
  console.log(c);
}
myfun(5, 3);
console.log(c);

// // 1.global scope: by default all values are globally accessible throught the code base.
// let a = 5;
// var b = 10;
// const c = 15;

// function myfunc() {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// myfunc();
// console.log(a);
// console.log(b);
// console.log(c);
