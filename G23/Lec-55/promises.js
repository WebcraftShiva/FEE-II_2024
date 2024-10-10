//  Promises represents a future events. Technically thery are objects. By defualt Promises are in pending states. Promise state- pending, fullfilled, reject:

// 4. Create a function downloadMovie which takes an argument url. Create a promise if url is not mp4 reject status else resolve status:

function downloadMovie(url) {
  return new Promise(function (resolve, reject) {
    let ext = url.split("/").pop().split(".").pop();
    if (ext != "mp4") {
      reject("Abey Sahi URL dede, Bhakk!");
    } else {
      setTimeout(function () {
        resolve(url.split("/").pop());
      }, 2000);
    }
  });
}

downloadMovie("myurl.com/avengers.mp3")
  .then(function (movie) {
    console.log(movie);
  })
  .catch(function (err) {
    console.log(err);
  });

// // 3. promise inside a function:
// function burgerLekarAao() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dukaanKhuliHai = false;
//       if (dukaanKhuliHai) {
//         resolve("Burger Mil gaya");
//       } else {
//         reject("Burger Ni Milla");
//       }
//     }, 2000);
//   });
// }
// burgerLekarAao()
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 2. Promise chaining:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolve is working after 2 sec");
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 working");
//     }, 2000);
//   }).then((value) => {
//     console.log(value);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("Work Done!!");
//   })
//   .then((value) => {
//     console.log("Ok Now Done");
//   });

// // 1.1: How to create Promises!!: It accept 2 callback function- resolve and reject
// let p = new Promise((resolve, reject) => {
//   let like = true;
//   setTimeout(() => {
//     if (like) {
//       resolve("Yeah, she like you");
//     } else {
//       reject("Naah!! Your ugly");
//     }
//   }, 2000);
// });

// // 1.2.1: consuming promises: then
// // p.then(
// //   (value) => {
// //     console.log(value);
// //   },
// //   (err) => {
// //     console.log("Rejected ");
// //   }
// // );
// //1.2.2: using- then-catch
// p.then((pro) => {
//   console.log(pro);
// }).catch((er) => {
//   console.log("Rejected " + er);
// });
