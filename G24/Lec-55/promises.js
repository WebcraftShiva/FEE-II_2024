// Promises: It represents the future events. technical it a object.  which is not sure whether this will be fullfilled or not.
// Promises has 3 states- pending, fullfilled and reject

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

// // 3. Promise inside a function:
// function maggiLekaarAao() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dukaanKhuliHai = false;
//       if (dukaanKhuliHai) {
//         resolve("Maggi Mil Gayi");
//       } else {
//         reject("Maggi Nahi milli");
//       }
//     }, 2000);
//   });
// }
// maggiLekaarAao()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 2.Promise chaining:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolve will work after 2 sec");
//     resolve("Promise 1 resolved");
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);

//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Resolve will work after 2 sec");
//       resolve("Promise 2 working");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("!!Done");
//     return 2;
//   })
//   .then((value) => {
//     console.log("Ok Now done");
//   });

// // 1.2: Promise(resolve, reject) -> resolve,reject- callback function
// let like = false;
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (like) {
//       resolve("Yeah, she like you");
//     } else {
//       reject("naah! You're boring one ");
//     }
//   }, 2000);
// });

// 1.3.1: consuming Promise : then
// p.then(
//   (msg) => {
//     console.log("Message aya hai", msg);
//   },
//   (err) => {
//     console.log("Error aya hai", err);
//   }
// );
//  1.3.2: then.catch:
// p.then((msg) => {
//   console.log("Message aya hai", msg);
// }).catch((err) => {
//   console.log("Error aya hai", err);
// });

// // 1.1 how to create promises:
// const p = new Promise();
