console.log(10 + 2); //output: 12
console.log(10 + "2"); //output: 102; Explanation: number 10 is coverted into string before concat with 2.
console.log(typeof (10 + "2"));

console.log(10 - "2"); //output:8; Explanation: string 2 is coverted into number
console.log(typeof (10 - "2"));

console.log(10 + "A"); //output:10A
console.log(10 - "A"); //output:NaN
console.log(10 + "2" - "A"); //output:NaN; Explanation: 10 get converted to string before concat with 2; but when it try to convert string A it won't be able to do that.Therfore, NaN will come as a output.
console.log(10 - "2" + "A"); //Output: 8A
console.log("\n");
// string to number:

let a = "20";

// let c = Number(a);
let d = parseInt(a);
// console.log(typeof a);
// console.log(typeof c);
console.log(typeof d);
