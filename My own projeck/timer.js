let input_hour = document.querySelector(".hour");
let input_minute = document.querySelector(".minute");
let input_second = document.querySelector(".second");
let btnCreate = document.querySelector(".btn1");

function zero() {
  input_hour.value = input_hour.value.padStart(2, 0);
  input_minute.value = input_minute.value.padStart(2, 0);
  input_second.value = input_second.value.padStart(2, 0);
}

zero();
let stop = document.querySelector(".btnStop");
let reset = document.querySelector(".btnReset");
var interval;
var click = false;
input_second.addEventListener("keyup", length1);
function length1() {
  if (input_second.value > 60) {
    input_second.value = 59;
  }
}
input_minute.addEventListener("keyup", length2);
function length2() {
  if (input_minute.value > 60) {
    input_minute.value = 59;
  }
}
input_hour.addEventListener("keyup", length3);
function length3() {
  if (input_hour.value > 23) {
    input_hour.value = 23;
  }
}

btnCreate.addEventListener("click", function discrease() {
  if (!click) {
    interval = setInterval(crease, 1000);
    click = true;
  }
  function crease() {
    if (input_second.value == 0 && input_minute.value != 0) {
      input_minute.value--;
      input_second.value = 60;
    }
    if (input_minute.value == 0 && input_hour.value != 0) {
      input_hour.value--;
      input_minute.value = 59;
      input_second.value = 60;
    }
    if (
      input_hour.value == 0 &&
      input_minute.value == 0 &&
      input_second.value == 0
    ) {
      clearInterval(interval);
      var message = new SpeechSynthesisUtterance();
      message.text = "Time is up, you lose the game";
      message.voice = speechSynthesis.getVoices()[0];
      message.rate = 1.0;
      message.volume = 1.0;
      message.pitch = 1.0;
      speechSynthesis.speak(message);
      click = false;
      return;
    }
    input_second.value--;
    zero();
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  click = false;
});
reset.addEventListener("click", () => {
  var zero = "";
  input_hour.value = zero.padStart(2, 0);
  input_minute.value = zero.padStart(2, 0);
  input_second.value = zero.padStart(2, 0);
  clearInterval(interval);
  click = false;
});
