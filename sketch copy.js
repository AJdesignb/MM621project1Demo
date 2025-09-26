let r;
let g;
let b;

function setup() {
  createCanvas(600, 600);
  frameRate(6);
}

function draw() {
  background(0);
  lollipop(500, 100, 500, 300);
  lollipop(300, 200, 150, 100);
  lollipop(500 + 40, 500, 75, 80);
  

  // fill(0, 200, 255);
  // rect(290, 200, 20, 150);

  // fill(255, 0, 200);
  // ellipse(300, 200, 100);
}

function lollipop(x, y, stickLength, lolliDiameter){
  // r = random(255);
  // g = random(255);
  // b = random(255);
  // x = mouseX;
  // y = mouseY;

  fill(0, 200, 255);
  rect(x - 10, y, 20, stickLength);

  fill(255, 0, 200);
  ellipse(x, y, lolliDiameter);
}