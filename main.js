function preload() {
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(250, 100);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 500);
    circle(10, 30, 20);
    ellipse(90, 104, 55, 55);
    rect(31, 311, 75, 55);
}