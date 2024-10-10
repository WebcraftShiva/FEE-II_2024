// Promises: Promises represents the future events. technically they are objects. By defualt promise stays in pending state. Promise has 3 states- pending,fullfille, rejected.

// 4. Create a function downloadMovie which take a argument url. Create a promise if url is not mp4 reject status else resolve status:

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

// 3. Promise inside a function:
function MaggiLekarAao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dukaanKhulHai = false;
      if (dukaanKhulHai) {
        resolve("Maggi Mil Gayi");
      } else {
        reject("Maggi Ni Milli");
      }
    }, 2000);
  });
}
MaggiLekarAao()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// // 2. Promise chaining:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 2000);
// });
// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("Done!!!");
//     return 2;
//   })
//   .then((value) => {
//     console.log("Ok Now Done!!");
//   });

// // 1.2: promise accept 2 callbacks - resolve and reject:
// let like = false;
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (like) {
//       resolve("Yeah, she like you");
//     } else {
//       reject("Naah! You're shitt");
//     }
//   }, 2000);
// });
// // 2.1 consuming promises: then
// // p.then(
// //   (value) => {
// //     console.log(`Message: ${value}`);
// //   },
// //   (err) => {
// //     console.log(`Message: ${err}`);
// //   }
// // );
// // 2.2 consuming promises: then-catch
// p.then((value) => {
//   console.log(`Message: ${value}`);
// })
// .catch((err) => {
//   console.log(`Message: ${err}`);
// });

// 1.1: How we create promise:
// let p = new Promise();
