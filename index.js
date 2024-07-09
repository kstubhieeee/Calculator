var display = document.getElementById("display");

function appendToDisplay(input) {
  display.value = display.value + input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (error) {
    display.value = "Error";
  }
}

function cube() {
  try {
    display.value = Math.pow(eval(display.value), 3);
  } catch (error) {
    display.value = "Error";
  }
}
