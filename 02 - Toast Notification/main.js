const btn = document.querySelector("button");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
  createToastNotification();
});


function createToastNotification() {
  const notif = document.createElement("div");

  notif.classList.add("notif");

  notif.innerText = "I'm a Toast Notification! 🎉"
  
  container.appendChild(notif);

  setTimeout(() => {
    notif.classList.add("remove");
  }, 3000);
}
