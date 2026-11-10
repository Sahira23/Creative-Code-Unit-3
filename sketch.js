
let night = true;
let x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  // The color of the sky changes when clicked
  if (night == true) {
    background(30, 40, 100);
  } else {
    background(100, 190, 255);
  }

  noStroke();

  // Moon
  fill(255, 245, 180);
  ellipse(530, 60, 50, 50);

  // Grass
  fill(80, 170, 70);
  rect(0, 300, 600, 100);

  // Tree trunks
  fill(130, 80, 40);
  rect(90, 270, 20, 50);
  rect(290, 270, 20, 50);
  rect(490, 270, 20, 50);

  // Tree 1
  fill(20, 120, 50);
  triangle(60, 220, 100, 100, 140, 220);
  triangle(50, 260, 100, 150, 150, 260);
  triangle(40, 300, 100, 190, 160, 300);

  // Tree 2
  fill(30, 140, 60);
  triangle(260, 220, 300, 100, 340, 220);
  triangle(250, 260, 300, 150, 350, 260);
  triangle(240, 300, 300, 190, 360, 300);

  // Tree 3
  fill(20, 110, 50);
  triangle(460, 220, 500, 100, 540, 220);
  triangle(450, 260, 500, 150, 550, 260);
  triangle(440, 300, 500, 190, 560, 300);

  // Red ornaments
  fill(255, 50, 50);
  ellipse(100, 170, 12, 12);
  ellipse(75, 240, 12, 12);
  ellipse(300, 170, 12, 12);
  ellipse(275, 240, 12, 12);
  ellipse(500, 170, 12, 12);
  ellipse(475, 240, 12, 12);

  // Yellow ornaments
  fill(255, 220, 0);
  ellipse(120, 260, 12, 12);
  ellipse(320, 260, 12, 12);
  ellipse(520, 260, 12, 12);

  // Yellow stars
  fill(255, 220, 0);

  triangle(90, 110, 100, 80, 110, 110);
  triangle(90, 95, 100, 125, 110, 95);

  triangle(290, 110, 300, 80, 310, 110);
  triangle(290, 95, 300, 125, 310, 95);

  triangle(490, 110, 500, 80, 510, 110);
  triangle(490, 95, 500, 125, 510, 95);

  // snow
  fill(255);
  ellipse(50, 50, 8, 8);
  ellipse(150, 100, 8, 8);
  ellipse(250, 50, 8, 8);
  ellipse(350, 150, 8, 8);
  ellipse(450, 80, 8, 8);
  ellipse(550, 120, 8, 8);

  // Moving clouds
  fill(240, 240, 255);
  ellipse(x, 60, 60, 30);
  ellipse(x + 25, 50, 50, 35);
  ellipse(x + 50, 60, 60, 30);

  x = x + 1;

  if (x > 650) {
    x = -100;
  }
}

function mousePressed() {
  night = !night;
}
