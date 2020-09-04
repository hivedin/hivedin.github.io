function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {
    background('#EFE8DE');
    frameRate(120);
    noStroke();
    // fill(255,206,71,255);
    // ellipse(mouseX, mouseY, 120, 120);
    fill(255,206,71,255);
    push();
    polygon(mouseX, mouseY, 120, 6);
    pop();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  