let url = "https://swapi.dev/api/people/1";

let container = document.querySelector(".container");
fetch(url)
  .then((data) => data.json())
  .then((data) => {
    // console.log(data);
  });
async function getStarwardata() {
  let data = await fetch(url);
  let resultData = await data.json();
  //   console.log(resultData);
  showData(resultData);
}
getStarwardata();
function showData(data) {
  container.innerHTML = "";
  let div = document.createElement("div");
  div.innerHTML = `<div class="name">${data.name}</div>
    <div class="gender">${data.gender}</div>
    <div class="height">${data.height}</div>`;
  container.append(div);
}
