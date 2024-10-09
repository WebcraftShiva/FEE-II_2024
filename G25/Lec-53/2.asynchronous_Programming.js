// // C: Asynchronous way:

console.log("Execution starts...");

setTimeout(() => {
  console.log("This is a Asynchronous execution");
}, 1000);

for (let i = 1; i < 1000; i++) {
  console.log("####");
}
console.log("Execution Ended");

// // B: SetInteval: it execute the code in repeatedly manner: -------------------------------------------

// // 3. create a count upto 3 times:
// let count = 0;

// const interval = setInterval(function () {
//   count++;
//   console.log(`Message: ${count}`);

//   if (count >= 3) {
//     clearInterval(interval);
//     console.log("Inteval stop after executing 3 times");
//   }
// }, 1000);

// //  2. clearInteval:
// console.log("Started");
// const interval = setInterval(() => {
//   console.log("This is a setInteval example");
// });
// clearInterval(interval);
// console.log("Ended");

// // 1.
// setInterval(() => {
//   console.log("This is a setInteval example");
// });

// // A) setTimeout(callback, delay): This function execute after a specified delay.------------------

// // 3. clearTimeout:
// console.log("IMAGE SEARCHING STARTED");
// const a = setTimeout(() => {
//   console.log("IMAGE FETCHED");
// }, 3000);
// clearTimeout(a);
// console.log("Searching ends");

// //2.
// console.log("IMAGE SEARCHING STARTED");
// setTimeout(() => {
//   console.log("IMAGE FETCHED");
// }, 3000);
// console.log("Searching ends");

// // 1.
// setTimeout(() => {
//   console.log("Setinterval function is working");
// }, 3000);
