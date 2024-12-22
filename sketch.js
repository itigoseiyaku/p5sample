const SCREEN_HEIGHT = 480;
const SCREEN_WIDTH = 640;

const COOKIE_SIZE = 200;
const COOKIE_X = COOKIE_SIZE / 2 + 16;
const COOKIE_Y = SCREEN_HEIGHT / 2;

let score = 0;
function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    frameRate(60);
}

function draw_Cookie() {
    circle(COOKIE_X, COOKIE_Y, COOKIE_SIZE);
}
function click_Cookie() {
    // Check how far the mouse is from the circle
    let distanceToCookie = dist(mouseX, mouseY, COOKIE_X, COOKIE_Y);

    // If the mouse is closer to the circle's center than the circle's radius,
    // that means the player clicked on it
    if (distanceToCookie < COOKIE_SIZE) {
        // Give the player a point
        score += 1;
    }
}

function mousePressed() {
    click_Cookie();
}

function draw() {
    background(255);
    text(`cookie num: ${score}`, 0, 10);
    draw_Cookie();
}
