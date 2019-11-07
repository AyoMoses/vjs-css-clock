const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourdHand = document.querySelector(".hour-hand");

function setDate() {
  const timeNow = new Date();

  const seconds = timeNow.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = timeNow.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = timeNow.getMinutes();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
