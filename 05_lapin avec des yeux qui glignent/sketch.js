
let eyeHeight = 150;
let counter = 0;
let eyesClosed = false;


function setup() {
  createCanvas(1000, 1000);


   

}

function draw() {
  background(220);
  noStroke();
  //tete
  fill("white");
  ellipse(height/2, 600, 640, 540);
  
  //oreille
   ellipse(380, 250, 100, 340); // droite
  ellipse(590, 250, 100, 340); // gauche

  //bouche
  stroke(1);
  line(470,630,490,660);
  line(510,630,490,660);
  noFill();
  curve(491, 680, 491, 660, 445, 675, 110, 490)
  curve(491, 500, 491, 660, 535, 670, 690, 550)
  
  counter = counter + deltaTime;


  if (eyesClosed && counter > 200) {

    eyeHeight = 150;
    eyesClosed = false;

    counter = 0;

  } else if (counter > 2000) {

    eyeHeight = 2;
    eyesClosed = true;

    counter = 0;
  }

  // oeil gauche
  fill(0);
  ellipse(400, 500, 150, eyeHeight);
  
  // oeil droit
  fill(0);
  ellipse(600, 500, 150, eyeHeight);
}

function keyPressed(){
  if( key =="s"){save("drawing.png");}}