

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -1);
}

function draw() {
    background(239,232,222);
    ellipse(mouseX, mouseY, 10, 10);
}