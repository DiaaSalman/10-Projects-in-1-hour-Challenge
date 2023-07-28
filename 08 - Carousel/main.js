const imagesContainer = document.getElementById("imgs")
const allImgs = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
  idx++;

  if(idx > allImgs.length - 1) {
    idx = 0;
  }

  imagesContainer.style.transform = `translateX(${-idx * 750}px`;
}

setInterval(run, 2000);