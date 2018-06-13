// Select color input
let color = document.getElementById('colorPicker')
let table = document.getElementById('pixelCanvas')
let sizePicker = document.getElementById('sizePicker')





sizePicker.addEventListener('click', (e) => {
    e.preventDefault();

    table.firstElementChild.remove() // deletes everytime we make new grid
    height = document.getElementById(inputHeight).value;
    width = document.getElementById(inputWidth).value;
    makeGrid(height, width)
    
};
// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
  //let row = table.insertRow(0);
  //let cell = row.insertCell(0);

  for (let i = 0; i <= height; i++){
    let row = table.insertRow(i); // for the rows
    for (let k = 0; k <= width; k++){
      let cell = row.insertCell(k); // for the columns
    }
  }

 // console.log(height,width);
  // Your code goes here!
}