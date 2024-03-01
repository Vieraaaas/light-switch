const button = document.querySelector("button");
const body = document.querySelector("body");
const title = document.querySelector("title");

function pressButton() {
  button.classList.toggle("btn-off");
  body.classList.toggle("content-dark");
  if (title.innerText === "Good Morning") {
    title.innerText = "Good Night";
  } else {
    title.innerText = "Good Morning";
  }
}

button.addEventListener("click", pressButton);
