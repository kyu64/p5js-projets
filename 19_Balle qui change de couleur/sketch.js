let x = 0;
let y = 200;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100);
  for (let i=0; i<width; i+=100){
    line(i, 0, i, height);
  }
  if (x >0 && x <= 100){
    fill(255, 0, 0);
  } else if (x > 100 && x <= 200){
    fill(156, 223, 124);
  } else if ( x > 200 && x <=300){
    fill(74, 189, 140);
  } else if ( x > 300 && x <=400){
    fill(0, 150, 142);
  } else if ( x > 400 && x <=500){
    fill(16, 110, 124);
  }
  else {
    fill(42, 72, 88);
  }
  ellipse (x, y, 50, 50);
  x = x + 3;
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}