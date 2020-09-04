function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
}

function draw() {
    background('#EFE8DE');
    frameRate(120);
    noStroke();
    fill(255,206,71,255);
    ellipse(mouseX, mouseY, 120, 120);

    fill(255,206,71,255);
    ellipse(mouseX, mouseY, 120, 120);
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}