let display = document.getElementById("display");
let shuldValue = false;

function Display(value) {
  if (shuldValue) {
    display.value = "";
    shuldValue = false;
  }
  let startValue = (display.value += value);
  startValue = startValue.replace(/^0+/, "");
  display.value = startValue === "" ? "0" : startValue;
}

function clearDisplay() {
  display.value = "0";
}
function calculateResult() {
  try {
    display.value = eval(display.value);
    shuldValue = true;
  } catch (e) {
    display.value = "Error";
  }
}
function squreRoot() {
  try {
    display.value = Math.sqrt(display.value);
    shuldValue = true;
  } catch (e) {
    display.value = "Error";
  }
}
function power() {
  let value = parseFloat(display.value);
  display.value = value ** 2;
  shuldValue = true;
}
function pi() {
  display.value = Math.PI.toFixed(8);
  shuldValue = true;
}
function singleClear() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}
function zisan() {
  try {
    display.value = Math.sin(display.value);
    shuldValue = true;
  } catch (e) {
    display.value = "Error";
  }
}

Display("0");
