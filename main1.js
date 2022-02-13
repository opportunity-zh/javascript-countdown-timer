// select elements with classname
const timerEl = document.querySelector(".timer");
const clockEl = document.querySelector(".clock");

// setInterval is a function that runs a function every x amount of time
setInterval(function () {
  const dateNow = new Date();

  clockEl.innerText =
    dateNow.getHours().toString().padStart(2, "0") +
    ":" +
    dateNow.getMinutes().toString().padStart(2, "0") +
    ":" +
    dateNow.getSeconds().toString().padStart(2, "0");
}, 1000); // 1000 milliseconds = 1 second
