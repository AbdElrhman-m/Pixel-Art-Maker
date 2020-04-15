// define all the dom element need for this project
const 
      sizePicker    = document.querySelector("#sizePicker"),
      // the submit button to make a grid
      createGridBn  = document.querySelector("input[type=submit]"),
      pixelCanvas   = document.querySelector("#pixelCanvas");

let colorPicker   = document.querySelector("#colorPicker").value,
    inputHeight   = document.querySelector("#inputHeight").value,
    inputWidth    = document.querySelector("#inputWidth").value;
// test
console.log(inputHeight);
console.log("" + inputWidth);
console.log(colorPicker)
function cleanGrid(){
    "use strict";
    while (pixelCanvas.childElementCount != 0){
        pixelCanvas.removeChild(pixelCanvas.lastElementChild)
    }
}


function makeGrid(inputHeight, inputWidth, colorPicker, pixelCanvas) {
    console.log(colorPicker)
    // Your code goes here!
    // clear the out put 
    cleanGrid();
    // reassign the varriable everytime
    inputHeight   = document.querySelector("#inputHeight").value;
    inputWidth    = document.querySelector("#inputWidth").value;
    
    for (let i = 1; i <= inputHeight; i++) {
        let gRow = document.createElement('tr');
        console.log(gRow);
        pixelCanvas.appendChild(gRow);
        for (let j = 1; j <= inputWidth; j++) {
            let gCell = document.createElement('td');
            console.log(gCell);
            gRow.appendChild(gCell);
            gCell.addEventListener('mousedown', function() {
                colorPicker   = document.querySelector("#colorPicker").value;
                this.style.backgroundColor = colorPicker;
                
            });
        }
    }
}


// show the gird after activation

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid(inputHeight, inputWidth, colorPicker, pixelCanvas);
});

// 
