let url = "https://catfact.ninja/fact";

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data);
    console.log(data.fact);
  } catch (e) {
    console.log("Error!!", e);
  }
}
getData();
