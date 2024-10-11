let url = "https://catfact.ninja/fact";

// 1.2.2:
fetch(url)
  .then((res) => {
    return res.json()
    }).then((data)=>{
        console.log(data)
    })
  .catch((err) => {
    console.log(err);
  });
 c
// 1.1 fetch returns a promise
// console.log(fetch(url));

// // 1.2.1:
// fetch(url)
//   .then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     res.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
