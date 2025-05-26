function setup() {
  createCanvas(400, 400);
  
  background(250);
  
  
  strokeWeight(2);
  fill(color(255, 204, 0));
  circle(200,200,200);
  
  strokeWeight(3);
  arc(200, 230, 80, 80,  0, PI);
  

}


function draw() {
  
    fill(255)
  circle(160, 160, 50);
  circle(240, 160, 50);
  
  let x = constrain(mouseX, 153, 168);
  let y = constrain(mouseY, 153, 168);
  
  let x2 =constrain(mouseX, 233, 248);
  let y2 =constrain(mouseY, 153, 168);
  
  
  
  noStroke();
  fill(0);
  circle(x, y, 30);
  circle(x2, y2, 30);
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}
