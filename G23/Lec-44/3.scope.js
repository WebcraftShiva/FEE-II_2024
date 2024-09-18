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

// console.log(a);
// console.log(b);
// console.log(c);

// // 2.functional scope: varibale declared inside a function can be accessed into a function only

// let a = 30; //global scope
// function myfun() {
//   let a = 20;
//   console.log(a);
// }
// myfun();
// // console.log(a);

// // 1.global scope: by default all variables has a functional scope means they can be accesssing throught the code base.

// var globalVar1 = "GLobal Variable";
// let globalVar2 = "GLobal Variable";
// const globalVar3 = "GLobal Variable";

// function myfunc() {
//   console.log(globalVar1);
//   console.log(globalVar2);
//   console.log(globalVar3);
// }
// myfunc();
// console.log(globalVar1);
// console.log(globalVar2);
// console.log(globalVar3);
