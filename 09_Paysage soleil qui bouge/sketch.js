
let posY =50



function setup() {
  createCanvas(700, 600);
   background(220);
   

}

function draw() {
 
  
  posY+=50;
    noStroke()
  
 //ciel//
  fill(60,100, 170)
  rect(0,0,700, 400)
 //ciel//
  
  
 //soleil//
  fill(250,210,60)
  
    circle(mouseX,mouseY,150);
 //soleil//
  
 //colline//
  fill(150,210,90);
  arc(100, 450, 1000, 400, HALF_PI + HALF_PI, 0);
  fill(100,190,60);
  arc(540, 540, 950, 390, HALF_PI + HALF_PI, 0);
  fill(150,180,40);
  arc(50, 600, 800, 370, HALF_PI + HALF_PI, 0);
  fill(130,150,40);
  arc(570, 630, 630, 240, HALF_PI + HALF_PI, 0);
 //colline//
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}