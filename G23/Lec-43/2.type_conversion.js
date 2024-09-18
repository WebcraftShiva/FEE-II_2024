console.log(1 + 2); //Output: 3
console.log(1 + "2"); //Output: 12; Explanation: Before concat with number 1 this value will be converted to string.
console.log(typeof (1 + "2"));

console.log(10 - "2"); //Output:8; Explanation String value 2 will be chnage to number before subtraction is done with 10 number.
console.log(typeof (10 - "2"));

console.log(10 + "A"); //Output:10A
console.log(10 - "A"); //Output:NaN

console.log(10 + "2" + "A"); //Output: 102A
console.log(10 + "2" - "A"); //Output: NaN

// string to number:

let a = "20";
console.log(typeof a);
// console.log(parseInt(a));

// 2.
let d = parseInt(a);
console.log(typeof d);
// 1.constructor:
let b = Number(a);
// console.log(typeof b);
