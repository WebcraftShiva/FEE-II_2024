console.log(1 + 2); //output:3
console.log(1 + "2"); //output: 12 Explanation: number 1 is coverted into string type before concat with string 2
console.log(typeof (1 + "2"));
console.log(5 - "2"); //output:3; Explanation: string 2 get converted into number type to perform substraction with number 5

console.log(10 + "A"); //output:10A
console.log(10 - "A"); //output:NaN
console.log(10 + "2" - "A"); //output:NaN

console.log(10 + "0" + "1"); //output:1001

// string to number:
let a = "20";
console.log(typeof a);
let c = Number(a);
console.log(typeof c);
let d = parseInt(a);
console.log(typeof d);
