// Suppose you want to maggie:
// Step 1: maggi lene gaya : 2 sec
// Step 2: mai maggi le k aa gaya
// Step 3: maggi banana start: 2 sec
// Step 4: maggi ban gayi
// Step 5: maggi khana start: 2 sec
// Step 6: maggi kha liya

// // B) Sturucture way to write asynchronous programming to avoid callback hell:

function maggiLaao(cb) {
  console.log("Maggi Lene gaya");
  setTimeout(function () {
    console.log("Maggi Lekar aa gaya");
    cb(maggiKhao);
  }, 2000);
}

function maggiBanno(cb) {
  console.log("Maggi Banana Start");
  setTimeout(function () {
    console.log("Maggi Ban Gayi");
  }, 2000);
  cb();
}

function maggiKhao() {
  console.log("Maggi Khana Start");
  setTimeout(function () {
    console.log("Maggi Khana Samapt");
  }, 2000);
}
maggiLaao(maggiBanno);

//  // A. Callback Hell: Nested callback: Pyramid of DOOM:
// console.log("Maggi lene gaya");
// setTimeout(() => {
//   console.log("maggi le k aa gaya");
//   console.log("maggi banana start");
//   setTimeout(() => {
//     console.log("maggi ban gayi");
//     console.log("maggi khana start");
//     setTimeout(() => {
//       console.log("maggi khana samapat");
//     }, 2000);
//   }, 2000);
// }, 2000);
