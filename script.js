// script.js

// Countdown to the next competition (example: 2 days from now)
const countdownElement = document.getElementById("countdown");
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);
targetDate.setHours(targetDate.getHours() + 12);
targetDate.setMinutes(targetDate.getMinutes() + 45);
targetDate.setSeconds(targetDate.getSeconds() + 22);

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.innerText = "Competition is live!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

 // countdownElement.innerText = '${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds';
}

setInterval(updateCountdown, 1000);
updateCountdown();