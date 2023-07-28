const text = "I'm an auto written text! ✨";
const autoText = document.querySelector(".auto-text");

let idx = 0;

function writeText() {
  autoText.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 0
  }
}

setInterval(writeText, 100);