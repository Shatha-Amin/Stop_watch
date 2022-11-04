let startBtn = document.getElementById("btnstart");
let stopBtn = document.getElementById("btnstop");
let resetBtn = document.getElementById("btnreset");

let getmin = document.getElementById("min");
let getsec = document.getElementById("sec");
let getmilsec = document.getElementById("milsec");
let interval;

let tens = 00;
let sec = 00;
let min = 00;

let runTimer = () => {
  tens++;
  if (tens <= 9) {
    getmilsec.textContent = "0" + tens;
  }
  if (tens > 9) {
    getmilsec.textContent = tens;
  }
  if (tens > 99) {
    sec++;
    getsec.textContent = "0" + sec;
    tens = 0;
    getmilsec.textContent = "0" + tens;
  }
  if (sec > 9) {
    getsec.textContent = sec;
  }

  if (sec > 60) {
    min++;
    getmin.textContent = "0" + min;
    sec = 0;
    getsec.textContent = "0" + sec;
  }
  if (min > 9) {
    getmin.textContent = min;
  }
};

let runMethod = () => {
  clearInterval(interval);
  interval = setInterval(runTimer, 10);
};

startBtn.addEventListener("click", runMethod);
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  sec = "00";
  min = "00";

  getmilsec.textContent = tens;

  getsec.textContent = sec;

  getmin.textContent = min;
});
