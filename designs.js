// Select color input
let color = document.getElementById('colorPicker')
let table = document.getElementById('pixelCanvas')
let sizePicker = document.getElementById('sizePicker')

let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);



sizePicker.addEventListener('click', (e) => {
    e.preventDefault();

    
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove(); // deletes everytime we make new grid
   
    makeGrid(height, width);
    
});
// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
  //let row = table.insertRow(0);
  //let cell = row.insertCell(0);

  for (let i = 0; i <= height; i++){
    let row = table.insertRow(i); // for the rows
    for (let k = 0; k <= width; k++){
      let cell = row.insertCell(k); // for the columns
      // added eventListeners to each cell
      cell.addEventListener('click', (e) => {
       // to change the color of each cell clicked
       cell.style.backgroundColor = color.value;
        console.log(e);
      });
    
    }
  }

 // console.log(height,width);
  // Your code goes here!
}