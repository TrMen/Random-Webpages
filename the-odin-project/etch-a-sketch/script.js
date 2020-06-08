/* eslint-disable linebreak-style */

function render() {
  grid.innerHTML = '';
  for (let i = 0; i < gridSize; ++i) {
    for (let j = 0; j < gridSize; ++j) {
      const cell = document.createElement('div');
      if (gridSize > 16) { // Display mark permanently
        cell.addEventListener('mouseenter', () => { cell.style.opacity = '1'; });
        document.getElementById('reset').style.visibility = 'visible';
        cell.classList.add('big-cell');
      } else {
        document.getElementById('reset').style.visibility = 'hidden';
        cell.classList.add('cell');
      }
      grid.appendChild(cell);
    }
  }
}

function reset() {
  Array.from(grid.children).forEach((child) => child.setAttribute('style', 'opacity: 0;'));
}

function changeGridSize(event) {
  gridSize = Math.abs(+event.target.value) || 16;
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  render();
}

const grid = document.getElementById('grid');
let gridSize = 16;

render();

setTimeout(() => { document.body.className = ''; }, 2000); // Allow animations to play normally after preload

const gridSizeInput = document.getElementById('grid-size');
gridSizeInput.addEventListener('change', changeGridSize);

document.getElementById('reset').addEventListener('click', reset);
