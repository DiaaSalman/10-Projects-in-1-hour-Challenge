const openBtn = document.querySelector("button")
const closeBtn = document.querySelector(".close-btn")
const nav = document.querySelector("nav");

openBtn.addEventListener('click', () => nav.classList.add("active"))
closeBtn.addEventListener('click', () => nav.classList.remove("active"))
