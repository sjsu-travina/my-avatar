let count = 0;
let myMap = 0;
let mic;
let micVar;
let micVar2;
let micVar3;
let stars = [ ];

function setup() {
  let cnv = createCanvas(400, 400);
  noStroke();
  angleMode(DEGREES);
  
  //mic setup 
    cnv.mousePressed(userStartAudio); {
    mic = new p5.AudioIn();
    mic.start();
  }
  
  //star setup
  for (let i = 0; i <= 20; i++){
    stars[i] = new Star(random(1, 10) * width * .1, random(1,10) * width * .1, random(360), random(5) * .12);
}
}

function draw() {
  background(20, 20, 40);
  micInput(); // sparkling stars imput
  mouseInput();// telescope movement
  classStars();// stars in background
  drawLegs();
  drawCenter();
  drawTelescope();// myMap, micVar
 } 

function micInput() {
  //sparking stars
  micVar = map(mic.getLevel(), 0, .1, 0, 10);
  micVar2 = map(mic.getLevel(), 0, 1, 0, 5);
 }  
   
function mouseInput(){
  if (count<360){
  count ++
  }else if (count==360){count=0}
  
  myMap = map(mouseX, 0, width, -90, -120);
}

function classStars(){
  //generate stars with class
  for (i = 0; i < stars.length; i ++) {
    stars[i].display();
    stars[i].move();
  }       
 }

function drawLegs() {
  //Legs Structure Section Left, Right, & Center
  fill(90);
  noStroke();

  push();
  translate(width * 0.385, height * 0.78);
  rotate(33);
  rectMode(CENTER);
  rect(0, 0, width * 0.03, width * 0.3);
  pop();

  push();
  translate(width * 0.62, height * 0.78);
  rotate(-33);
  rectMode(CENTER);
  rect(0, 0, width * 0.03, width * 0.3);
  pop();

  rect(width * 0.487, height * 0.6, width * 0.03, width * 0.325);
}

function drawCenter() {
  //Center Rect & Ellipse Structure Section
  ellipse(width * 0.5, width * 0.576, width * 0.09);

  fill(50);
  noStroke();
  ellipse(width * 0.5, width * 0.576, width * 0.05);
  rect(width * 0.437, height * 0.64, width * 0.13, width * 0.032);
}

function drawTelescope() {
  push();
  translate(width/1.999, height/1.74);
  rotate(myMap);
    fill(90);
      rect(11, -6, width * 0.08, width * 0.03);
      rect(42, -120, width * 0.075, width * 0.08);
      ellipse(57, -120, width * 0.075, width * 0.05);
    fill(55, 0, 400);
      rect(30, -85, width * 0.14, width * 0.35);
      rect(18, 55.5, width * 0.202, width * 0.16);
      ellipse(58, -85, width * 0.139, width * 0.1);
      ellipse(58.5, 55, width * 0.2, width * 0.1);
      ellipse(58.5, 120, width * 0.2, width * 0.1);
    fill(10, 100);
      ellipse(58, 120, width * 0.16, width * 0.085);
    fill(90, 100, 400);
      ellipse(58, 114.5, width * 0.135, width * 0.055);
    rotate(45);
    fill(200, 190);
    rectMode(CENTER);
      rect(124, 34, width * .015 + micVar2, height * .015+ micVar2)
      rect(113, 47, width * .01 + micVar2, height * .01 + micVar2)
      rect(122, 48, width * .005 + micVar2, height * .005 + micVar2)
      rect(133, 31, width * .01 + micVar2, height * .01+ micVar2)
   pop();
}
