// var calculateForm = document.getElementById("calculate-form");
var dimensionInput = document.getElementById("dimension-input");
var resultOutput = document.getElementById("result-output");
var sixteenToNineRadio = document.getElementById("16-9-radio");
var fourToThreeRadio = document.getElementById("4-3-radio");
var widthRadio = document.getElementById("width-radio");
var heightRadio = document.getElementById("height-radio");

function calculateAspectRatio(dimension) {
  if (parseInt(dimensionInput.value)) {
    if (sixteenToNineRadio.checked) {
      if (widthRadio.checked) {
        resultOutput.textContent = Math.round((dimensionInput.value / 16) * 9);
      } else if (heightRadio.checked) {
        resultOutput.textContent = Math.round((dimensionInput.value / 9) * 16);
      } else {
        resultOutput.textContent = "Please select the dimension type.";
      }
    } else if (fourToThreeRadio.checked) {
      if (widthRadio.checked) {
        resultOutput.textContent = Math.round((dimensionInput.value / 4) * 3);
      } else if (heightRadio.checked) {
        resultOutput.textContent = Math.round((dimensionInput.value / 3) * 4);
      } else {
        resultOutput.textContent = "Please select the dimension type.";
      }
    } else {
      resultOutput.textContent = "Please select the type of aspect ratio.";
    }
  } else {
    resultOutput.textContent = "Your input is not a number!";
  }
}

dimensionInput.addEventListener("keyup", function() {
  calculateAspectRatio(dimensionInput.value);
});
