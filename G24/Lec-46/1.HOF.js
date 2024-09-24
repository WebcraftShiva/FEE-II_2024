// // HOF: when we pass one function into another function as a argument

// 2..
let arr = [2, 4, 6, 8, 9];

function evenOrNot(func, arr) {
  for (let i = 0; i < 5; i++) {
    func(arr[i]);
  }
}
const even = function (num) {
  if (num % 2 == 0) {
    console.log(num);
  } else {
    console.log("Not even");
  }
};

evenOrNot(even, arr);

// //1.printName is a HOF bcz it takes myname function as a argument.
// function printName(func, num) {
//   for (let i = 1; i <= num; i++) {
//     func();
//   }
// }

// let myName = function () {
//   console.log("Yash");
// };
// printName(myName, 20);
