const openBtn = document.querySelector("button");
const closeBtn = document.querySelector(".close-popup");
const container = document.querySelector(".popup-container");

openBtn.addEventListener("click", () => {
  container.classList.remove("close");
  document.body.style = "background-color: rgba(0,0,0,0.4)";
})
closeBtn.addEventListener("click", () => {
  container.classList.add("close");
  document.body.style = "background-color: #fff";
})