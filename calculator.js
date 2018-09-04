var dimensionInput = document.getElementById("dimension-input");
var resultOutput = document.getElementById("result-output");
var sixteenToNineRadio = document.getElementById("16-9-radio");
var fourToThreeRadio = document.getElementById("4-3-radio");
var widthRadio = document.getElementById("width-radio");
var heightRadio = document.getElementById("height-radio");

function calculateAspectRatio() {
  var parsedNumber = Math.abs(parseInt(dimensionInput.value, 10));
  if (parsedNumber) {
    if (sixteenToNineRadio.checked) {
      if (widthRadio.checked) {
        resultOutput.textContent = Math.round((parsedNumber / 16) * 9);
      } else if (heightRadio.checked) {
        resultOutput.textContent = Math.round((parsedNumber / 9) * 16);
      } else {
        resultOutput.textContent = "Please select the dimension type.";
      }
    } else if (fourToThreeRadio.checked) {
      if (widthRadio.checked) {
        resultOutput.textContent = Math.round((parsedNumber / 4) * 3);
      } else if (heightRadio.checked) {
        resultOutput.textContent = Math.round((parsedNumber / 3) * 4);
      } else {
        resultOutput.textContent = "Please select the dimension type.";
      }
    } else {
      resultOutput.textContent = "Please select the aspect ratio type.";
    }
  } else {
    resultOutput.textContent = "Your input is empty or not a number.";
  }
}

dimensionInput.addEventListener("input", calculateAspectRatio);
fourToThreeRadio.addEventListener("click", calculateAspectRatio);
sixteenToNineRadio.addEventListener("click", calculateAspectRatio);
widthRadio.addEventListener("click", calculateAspectRatio);
heightRadio.addEventListener("click", calculateAspectRatio);
