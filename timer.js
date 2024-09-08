var samay = setInterval(greet, 1000);

let second = 30;
let minute = 01;

// let second = 03;
// let minute = 00;

function greet() {
  if (second == 1 && minute == 0) {
    clearInterval(samay);
    boom2();
  }

  if (second == 0) {
    second = 59;
    minute = minute - 1;
  } else {
    second = second - 1;
  }

  let formatted_sec = second < 10 ? `0${second}` : `${second}`;
  let formatted_min = minute < 10 ? `0${minute}` : `${minute}`;
  document.querySelector(
    "span.time"
  ).innerHTML = `${formatted_min}:${formatted_sec}`;
}
