let columns = 8 ; let rows = 8;
let colSize; let rowSize;

function setup() {
  createCanvas(400, 400);
  colSize = width/columns;
  rowSize = height/rows;
}

function draw() {
  background(220);

  for (let i=0; i<columns; i++){
    for (let j=0; j<rows; j++){
      
            if ((i + j) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
     rect(i*colSize, j*rowSize, colSize, rowSize); 
    }
  }
}


function keyPressed(){
  if( key =="s"){save("drawing.png");}}