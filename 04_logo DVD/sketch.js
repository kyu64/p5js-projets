let boxSize = 50;
let img;


let posX = 123;
let posY = 234;
let vitX = 2;
let vitY = 1.234;

let r = Math.random()* 255;
let v = Math.random()* 255;
let b = Math.random()* 255;


function preload() {
  img = loadImage('dvd-logo-png_seeklogo-178409.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {
  background(paletteLerp([
    ['white', 0],
    ['red', 0.05],
    ['green', 0.25],
    ['blue', 1]
  ], millis() / 10000 % 1));
  
  fill(r, v, b);
  
  
  posX += vitX;
  posY += vitY;
  
  
  
  if( posX + boxSize  > width || posX <0 ){
    vitX = vitX *-1;
    changeColor()
  }
  
   if( posY +boxSize  > height || posY <0 ){
    vitY = vitY *-1;
     changeColor()
     
  }

  image(img, posX, posY, boxSize, boxSize);
}

function changeColor(){
  r = Math.random()* 255;
  v = Math.random()* 255;
  b = Math.random()* 255;
}


//save to GIF
function keyPressed () {
  if (key ==='s') {
    saveGif ('mySketch', 6);
  }
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}
