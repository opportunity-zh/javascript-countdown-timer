// select elements with class classname
const timerEl = document.querySelector(".timer");
const clockEl = document.querySelector(".clock");
const inputEl = document.querySelector(".date-input");
const buttonEl = document.querySelector(".date-button");

// create new constant variable for the timer
let dateTarget = new Date("2022-02-13T21:00:00");

// setInterval is a function that runs a function every x amount of time
// calculate the time difference between now and the target date
// and update the timer element with the difference
setInterval(function () {
  const dateNow = new Date();
  const difference = dateTarget - dateNow;

  //calculate seconds from difference
  //divide by 1000 because Date() returns milliseconds
  // new Date() returns an object, so we need to convert it to a string
  // padStart() adds a 0 to the front of the string if the string is less than 2 characters long
  const seconds = Math.floor((difference / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((difference / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((difference / 1000 / 60 / 60) % 24)
    .toString()
    .padStart(2, "0");

  // update the timer element with the difference
  timerEl.innerText = `${hours}:${minutes}:${seconds}`;

  // update the clock element with the current time
  clockEl.innerText =
    dateNow.getHours().toString().padStart(2, "0") +
    ":" +
    dateNow.getMinutes().toString().padStart(2, "0") +
    ":" +
    dateNow.getSeconds().toString().padStart(2, "0");
}, 1000);

// add event listener to the button
// when the button is clicked, update the dateTarget variable
buttonEl.addEventListener("click", function () {
  dateTarget = new Date(inputEl.value);
});
