const image = document.querySelector("img");

function imageToggler() {
  let isTrue = false;

  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1608889336076-13c5c2dc1ee7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
      );
    } else {
      image.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();
