var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  // // drawing the ball
  // stroke(255);
  // strokeWeight(4);
  // fill(200, 0, 200);
  // ellipse(ball.x, ball.y, 24, 24);

  display();
  bounce();
  move();

  // //bouncing the ball
  // if (ball.x > width || ball.x < 0) {
  //   ball.xspeed = ball.xspeed * -1;
  // }

  // if (ball.y > height || ball.y < 0) {
  //   ball.yspeed = ball.yspeed * -1;
  // }

  // //moving the ball
  // ball.x = ball.x + ball.xspeed;
  // ball.y = ball.y + ball.yspeed;
}

  
function display(){
 // drawing the ball
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 24, 24);
}

function bounce(){
 //bouncing the ball
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function move(){
 //moving the ball
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
