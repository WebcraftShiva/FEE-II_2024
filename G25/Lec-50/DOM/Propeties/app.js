// Properties:

// 1.innerText:aware about css styling and dont showcase hidden content
const a = document.querySelector("p");

a.innerText;

// 2.textContent:not aware about css styling
a.textContent;

//3.innerHTML: give all html along with all text
a.innerHTML;

// ------------- getAttribute() and setAttribute()  ---------------

const input = document.querySelector("input");
// console.log(input)
// to get the value inside the input field
input.value;
// to set input value to something
input.value = "kartik";

// input.getAttribute("type");
input.getAttribute("type");

var image = document.querySelector("img");
console.dir(image.getAttribute("src"));
console.log(
  image.setAttribute(
    "src",
    "https://media.istockphoto.com/id/1479824277/photo/young-university-student-using-mobile-phone-on-stairs-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7OQ1lQp2g2Wq8t6ZNvNCNmEB4HDB6UoNh5pY-IfghU="
  )
);