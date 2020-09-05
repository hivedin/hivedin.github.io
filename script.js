function setup() {
    //let vh = windowHeight/100;
    //let vw = windowWidth/100;
    let vh = 330;
    let vw = 330;
    canvas = createCanvas(40 * vw, 30*vh);
    canvas.parent("sketchContainer");
}

function draw() {
    // background('#EFE8DE');
    background(0);
    frameRate(60);

    endFunction();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

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

function endFunction() {
    noStroke();
    fill(255, 206, 71, 255);
    ellipse(mouseX, mouseY, 120,120);
}

