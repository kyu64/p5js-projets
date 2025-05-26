let cx, cy; let r = 100;
let angle1, angle2;

function setup() {
  createCanvas(400, 400);
  cx = width/2;
  cy = height/2;
  angle1 = 0;
  angle2 = 0;
}

function draw() {
  background(220);
  angle1 += 0.1;
  angle2 += 0.1;

  fill(0);
  stroke(0);
  let x = cx + r*cos(angle1);
  let y = cy + r*sin(angle2);
  line(cx,cy, x, y);
  ellipse(x, y, 10, 10);
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}