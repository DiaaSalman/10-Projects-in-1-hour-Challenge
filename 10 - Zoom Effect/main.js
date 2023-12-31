const container = document.querySelector(".container");
const img = document.querySelector("img")

container.addEventListener("mousemove", (e) => {
  // Get the position of the cursor
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2)";
})

container.addEventListener("mouseleave", () => {
  img.style.transformOrigin = `center center`;
  img.style.transform = "scale(1)";
})