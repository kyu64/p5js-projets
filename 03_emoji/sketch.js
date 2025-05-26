function setup() {
  createCanvas(400, 400);
  
  background(250);
  
  
  strokeWeight(2);
  fill(color(255, 204, 0));
  circle(200,200,200);
  
  
}

function draw() {
  
  strokeWeight(3);
  line(230, 140, 230, 200);
  
  line(170, 140, 170, 200);
  
  arc(200, 230, 80, 80,  0, PI);
}


function keyPressed(){
  if( key =="s"){save("drawing.png");}}