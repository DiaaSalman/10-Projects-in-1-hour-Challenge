const sounds = ["01", "02", "03", "04", "05"];

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play();
  })

  document.body.appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    document.getElementById(sound).pause();
  })
}