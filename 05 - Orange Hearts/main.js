function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);
  heart.innerText = "🧡"

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 1 + 3 + "s";

  setTimeout(() => {
    heart.remove();
  }, 6000)

}

setInterval(createHeart, 300);