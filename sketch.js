function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Set angle mode to degrees for easier calculations
  noStroke(); // Remove default stroke for a cleaner look
}

function draw() {
  background(255); // Set background to white
  
  translate(width / 2, height / 2); // Move origin to center of canvas

  let hr = hour();
  let mn = minute();
  let sc = second();

  // Colors for hour, minute, and second hands
  let hColor = color(255, 100, 100); // Light red for hour
  let mColor = color(100, 255, 100); // Light green for minute
  let sColor = color(100, 100, 255); // Light blue for second

  // Map the current time to angles
  let hAng = map(hr % 12, 0, 12, 0, 360) + map(mn, 0, 60, 0, 30) / 12; // Hour hand angle
  let mAng = map(mn, 0, 60, 0, 360); // Minute hand angle
  let sAng = map(sc, 0, 60, 0, 360); // Second hand angle

  // Draw hour hand as an abstract shape
  push();
  rotate(hAng);
  fill(hColor);
  beginShape();
  vertex(0, -50);
  vertex(-10, -30);
  vertex(10, -30);
  endShape(CLOSE);
  pop();

  // Draw minute hand as a series of colorful arcs
  noFill();
  stroke(mColor);
  strokeWeight(5);
  for (let i = 0; i < 360; i += 15) {
    let angle = radians(i + mAng);
    let x1 = cos(angle) * 100;
    let y1 = sin(angle) * 100;
    let x2 = cos(angle) * 150;
    let y2 = sin(angle) * 150;
    arc(0, 0, 200, 200, degrees(atan2(y1, x1)), degrees(atan2(y2, x2)));
  }

  // Draw second hand as dynamic colored lines
  stroke(sColor);
  strokeWeight(3);
  let sEndX = cos(sAng) * 180;
  let sEndY = sin(sAng) * 180;
  line(0, 0, sEndX, sEndY);

  // Draw the center point with a larger fill
  fill(0);
  ellipse(0, 0, 10, 10);
}