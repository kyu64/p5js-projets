function setup() {
  createCanvas(400, 400);
  background(250);
  

}

function draw() {
  
  rouge()
  jaune()
  bleu()    
  
  stroke(1);
  strokeWeight(5);
   line(170, 0, 170, 400);
  
  line(0, 170, 400, 170);
  
  line(270, 280, 270, 400);
  
  line(0, 280, 400, 280);
  
  line(40, 280, 40, 400);
}

function rouge(){
  noStroke()
  fill(240,10, 10);
  rect(0,0,170);
}

function jaune (){
  fill(256, 210,50);
  rect(0, 280, 40, 120);
}

function bleu (){fill(10,20,120)
  rect(172, 280, 100)}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}