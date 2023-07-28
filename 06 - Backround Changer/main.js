const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + randomBg();
})

function randomBg() {
  let chars = "abcdef0123456789";
  let bg = "";

  for(let i = 0; i < 6; i++) {
    let randomIdx = parseInt(Math.random() * chars.length);
    bg += chars[randomIdx];
  }

  return bg;
}
