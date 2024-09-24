// Iterator:
let str = "yash";
let obj = { name: "yash" };

// for in: gives key
for (let num in obj) {
  console.log(num);
  console.log(obj[num]);
  console.log(obj);
}
console.log(obj);

// for (let i of obj) {
//   console.log(i);
// }

// for of: gives value
// for (let i of str) {
//   let iterator = str[Symbol.iterator]();
//   //   console.log(iterator);
// }
// let iterator = str[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(str[Symbol.iterator]);
// console.log(obj[Symbol.iterator]);
