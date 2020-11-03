const container = document.getElementById("container");
let gridsize=16;
function reset()
{
  gridSize=window.prompt("How many squares per side should the new grid have? (Enter a number from 1-100");
  while (isNaN(gridSize) | gridSize<1 || gridSize>100)
  {
    gridSize=window.prompt("Enter a valid number from 1-100.")
  }
  let grid= document.getElementsByClassName("grid-item");
  for (var i = (grid.length - 1) ; i >= 0; i--) {
      grid[i].parentNode.removeChild(grid[i]);
    }
  makeRows(gridSize,gridSize);
}
function clearGrid()
{
  let grid= document.getElementsByClassName("grid-item");
  for (var i = (grid.length - 1) ; i >= 0; i--) {
      grid[i].classList.remove('mycolor');
    }
}
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', 
    e => e.target.classList.add('mycolor')
  )
    container.appendChild(cell).className = "grid-item";
  };
};
function randomColor()
{
  let r=Math.floor(Math.random()*256), g=Math.floor(Math.random()*256), b=Math.floor(Math.random()*256)
  document.style.mycolor.backgroundColor="rgb("+r+","+g+","+b+")";
}
makeRows(16, 16);
let resetButton=document.querySelector('#reset'),clearButton=document.querySelector('#clear');
resetButton.addEventListener('click',() =>{
  reset();
});
clearButton.addEventListener('click',() =>{
  clearGrid();
});



