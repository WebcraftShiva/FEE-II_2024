// getAttribute and setAttribute:

const input = document.querySelector("input");

// input.value;
const img = document.querySelector("img");

// getAttribute:
input.getAttribute("type");

// setAttribute:
img.setAttribute(
  "src",
  "https://media.istockphoto.com/id/467233280/photo/nepal-jungle.webp?a=1&b=1&s=612x612&w=0&k=20&c=L6s_nSTbxZn_zOwbnO_0ZrKyInSZuxVox3anfAg9EX4="
);

// // 1.innerText: aware of css styling: dont give block content
// const para = document.querySelector("p");
// para.innerText;

// // 2.textContent: not aware of css style.Hidden content will also be visible
// para.innerContent;
// // 3.innerHtml: give all html along with all text
// para.innerHtml;

//
setInterval(() => {
  img.setAttribute("src", ".........");

  img.setAttribute("src", ".........");
}, 1000);
