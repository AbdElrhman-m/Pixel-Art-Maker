// define all the dom element need for this project
const colorPicker   = document.querySelector("#colorPicker"),
      sizePicker    = document.querySelector("#sizePicker"),
      inputHeight   = document.querySelector("#inputHeight").value,
      inputWidth    = document.querySelector("#inputWidth").value,
      // the submit button to make a grid
      createGridBn  = document.querySelector("input[type=submit]"),
      pixelCanvas   = document.querySelector("#pixelCanvas");

// test
console.log(inputHeight);
console.log("" + inputWidth);

function cleanGrid(){
    "use strict";
    while (pixelCanvas.childElementCount != 0){
        pixelCanvas.removeChild(pixelCanvas.lastElementChild)
    }
}


function makeGrid() {

// Your code goes here!

}

// show the gird after activation

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});