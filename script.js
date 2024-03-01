const button = document.querySelector("button");
const body = document.querySelector("body");

function pressButton() {
  button.classList.toggle("btn-off");
  body.classList.toggle("content-dark");
}

button.addEventListener("click", pressButton);
