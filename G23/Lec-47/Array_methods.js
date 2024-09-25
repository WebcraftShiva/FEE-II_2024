// // -------------- spread --------------------
// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));

// // --------------- sort ---------------------
// const arr = [100, 10, 30, 20, 5];

// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// // ------------------- reduce ---------------

// const arr = [10, 20, 30, 40];

// const totalSum = arr.reduce(function (sum, nextValue) {
//   return sum + nextValue;
// });

// console.log(totalSum);

// // ----------------- filter ----------------
// Q.There is a array num. Find the even number from this array using filter method.

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   }
//   return false;
// }

// let nums = [1, 2, 3, 4, 5, 6, 3, 2, 1, 4];

// const evenNum = nums.filter(isEven);
// console.log(nums);
// console.log(evenNum);

// //------------------- MAP -------------------
// map: returns a new array.

// //2.
// let names = ["shivam", "kanav", "yashvi", "kartik"];

// const newNameList = names.map(function (name, index) {
//   return { name: name, id: index + 1 };
// });
// console.log(newNameList);

// // 1.
// function square(num) {
//   return num ** 2;
// }

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.map(square));
