let flag = 0;
let pre_number = null;

let box = document.getElementById("box");
box.onclick = function () {
  window.location.href = "index.html";
};

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

function activate(number, pre_number) {
  let allCard = document.querySelectorAll(".card");
  for (let i = 0; i < allCard.length; i++) {
    if (allCard[i].classList.contains("active")) {
      allCard[i].classList.remove("active");
    }
  }

  let showing = document.getElementById(number);
  showing.classList.add("active");
}

async function compare(number, pre_number) {
  let showing = document.getElementById(number);
  let showing2 = document.getElementById(pre_number);
  showing.classList.add("active");

  let delayres = await delay(1000);

  showing.classList.remove("active");
  showing2.classList.remove("active");
  if (number - pre_number == 1 || number - pre_number == -1) {
    showing.classList.add("hidden");
    showing2.classList.add("hidden");
    showing.classList.remove("exist");
    showing2.classList.remove("exist");
  }
  check_win();
}

function check_win() {
  let victory = 1;
  let option = document.querySelectorAll(".card");
  for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("exist")) {
      victory = 0;
    }
  }
  if (victory == 1) {
    boom();
    clearInterval(samay);
  }
}

function boom() {
  let box = document.getElementById("box");
  box.classList.add("aactive");
  document.querySelector(
    "h1.result"
  ).innerHTML = `Congrats <br><span> :-) </span><br> You Win `;
  document.querySelector("div.results").innerHTML = `Click to play again`;
}

function boom2() {
  let box = document.getElementById("box");
  box.classList.add("aactive");
  document.querySelector(
    "h1.result"
  ).innerHTML = `Time Up <br><span> :-( <br> </span>You Lose`;
  document.querySelector("div.results").innerHTML = `Click to play again`;
}

// uwin or game over mai ek or page which ask to replay

function GFG_click(number) {
  // console.log(number);
  let clicked = document.getElementById(number);
  if (clicked.classList.contains("hidden")) {
    // console.log("hidden hai")
    return;
  }
  if (flag == 0) {
    activate(number, pre_number);
    pre_number = number;
    flag = 1;
  } else {
    if (number != pre_number) {
      compare(number, pre_number);
      pre_number = null;
      flag = 0;
    }
  }
}
