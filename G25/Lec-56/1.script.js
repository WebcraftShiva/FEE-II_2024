let url = "https://catfact.ninja/fact";

// 4. chaining:
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((value) => {
    console.log(value);
    console.log(value.fact);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// // 3.
// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     res.json().then((value) => {
//       console.log(value);
//       console.log(value.fact);
//     });
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// // 2.
// fetch(url)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// // 1:
// // fetch technically returns a promise
// console.log(fetch(url));
