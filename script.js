function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {
    background('#EFE8DE');
    frameRate(120);
    noFill();
    strokeWeight(8);
    stroke(255,206,71,255);

    endFunction();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function hexagon(x, y, radius) {
    let angle = TWO_PI / 6;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

function endFunction(){
    noStroke();
    fill(255,206,71,255);
    ellipse(mouseX, mouseY, 120, 120);
}
  