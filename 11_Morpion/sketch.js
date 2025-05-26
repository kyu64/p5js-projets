let cols = 3; let rows = 3;
let size;
let board = [];
let players =['X', 'O'];
let currentPlayer;

function setup() {
  createCanvas(400, 400);
  size = width/cols;
  currentPlayer = players[floor(random(2))];
  print(currentPlayer);
  for (let i=0; i<cols; i++){
    board[i] = [];
    for (let j=0; j<rows; j++){
      board[i][j] = 0;
    }
  }
}


function draw() {
  background(220);
  drawBoard();
}

function drawBoard(){
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      rect(i*size, j*size, size, size);
      if (board[i][j] != 0){
        textAlign(CENTER);
        textSize(30);
        text(board[i][j], size/2 + i*size, size/2 + j*size);  
      }
      
      
    }
  }
}

function mousePressed(){
  let index = [floor(mouseX/size), floor(mouseY/size)];
  placePieces(index[0], index[1]);
}

function placePieces(x, y){
  if (board[x][y] == 0){
    board[x][y] = currentPlayer;
    if (currentPlayer =='X'){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    } else {
      print("Spot not aailable");
    }
}


function keyPressed(){
  if( key =="s"){save("drawing.png");}}