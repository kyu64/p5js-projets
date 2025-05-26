function setup() {
  createCanvas(500, 500);
  background(82, 102, 89);
}

let taille =0.5;
let taille2=1;

function draw() {
  noFill();
  circle(340, 150, taille);
taille = taille + 80;
  
    noFill();
  circle(150, 150, taille2);
taille2 = taille2 + 50;
  
  stroke(4);
bezier(100, 350, 150, 450, 400, 420, 400, 350)
  
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}