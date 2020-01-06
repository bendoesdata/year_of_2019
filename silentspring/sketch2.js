// create global variables
var data = [];
var maxData;
let cnv;

// make sure data is loaded first
function preload() {
    mydata = loadJSON('grasslands.json');
}

// setup the document
function setup() {
    var canvas = createCanvas(1200, 1200);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    angleMode(DEGREES);
    rectMode(TOP);

    maxData = max(data);

}

function drawRadial(barValue, barDate) {

    var angleSeparation = 360 / barValue.length;
    var padding = 80;

    if (frameCount <= 200) {
        maxValue = constrain(frameCount * 2, 0, 400);
    } else {
        maxValue = 400;
    }

    var offset = 120;

    var dataMultiplier = (windowHeight * 0.1);

    for (var i = 0; i < barValue.length; i = i + 1) {
        push();
        fill(230)
        var currentData = barValue[i];
        var currentDate = barDate[i];

        var finalHeight = currentData * (dataMultiplier / 190);
        var animatedHeight = map(maxValue, 5, 50, 0, finalHeight);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(180 + (angleSeparation * i));

        // if (source[i] == "google") {
        //     fill(139, 171, 103);
        // } else {
        //     fill(200, 200, 200)
        // }

        var rects = rect(0, offset, angleSeparation * 1, animatedHeight);
        noStroke();
        fill(250, 250, 250);
        textSize(8);
        // text(currentDate, offset + 200, 0);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(angleSeparation * 1);
        pop();

    }


}

function draw() {

    background(43, 53, 63);
    // stroke(89, 86, 74);

    //create the axis circles
    c = color('rgba(250,250,250,0.2)'); // Define color 'c'
    noFill();
    stroke(c);
    strokeWeight(1);
    // circle(windowWidth / 2, windowHeight / 2, 300); // 10,000 steps
    // circle(windowWidth / 2, windowHeight / 2, 440); // 20,000 steps
    // circle(windowWidth / 2, windowHeight / 2, 580); // 20,000 steps

    var loss = mydata.perc;

    var species = mydata.species;

    // call the function to draw the radial graph
    drawRadial(loss, species);

    // add text
    noStroke();
    fill(250, 250, 250);
    textSize(32);


    fill(0, 102, 153);



}