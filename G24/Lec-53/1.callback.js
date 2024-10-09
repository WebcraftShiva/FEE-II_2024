// 2.function second with callback as first
function first() {
  console.log("First function");
}

function second(call) {
  console.log("Second Function");
  call();
}
// function call:
second(first());

// // 1.simple function:
// function first() {
//   console.log("First function");
// }

// function second() {
//   console.log("Second Function");
// }
// // function call:
// first();
// second();

// 1.synchronous way:
// console.log("Execution started...");

// for (let i = 0; i < 1000; i++) {
//   console.log("Loop Ends here..");
// }
// console.log("Execution Ends here..");
