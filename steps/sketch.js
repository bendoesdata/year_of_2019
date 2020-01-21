// create global variables
var data = [];
var maxData;
let cnv;
const backgroundColor = "#fcc335"
const barColor = "#353E4D"
const estColor = "#cccccc"
const cream = '#F7F6F4'

// make sure data is loaded first
function preload() {
    mydata = loadJSON('../data/steps.json');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

// setup the document
function setup() {
    let width = windowWidth - 20;
    let height = windowHeight + 500;

    var canvas = createCanvas(width, height);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    angleMode(DEGREES);
    rectMode(TOP);

    maxData = max(data);

}

function drawRadial(barValue, barDate, source) {

    var angleSeparation = 360 / barValue.length;
    var padding = 80;

    if (frameCount <= 200) {
        maxValue = constrain(frameCount * 2, 0, 400);
    } else {
        maxValue = 400;
    }
    var offset = 70;
    var maxData = 1;
    var dataMultiplier = (windowHeight / 1 - offset - padding) / maxData;


    for (var i = 0; i < barValue.length; i = i + 1) {
        push();
        var currentData = barValue[i];
        var currentDate = barDate[i];
        var finalHeight = currentData / dataMultiplier * 1;
        var animatedHeight = map(maxValue, 5, 100, 0, finalHeight);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(180 + (angleSeparation * i));
        noStroke();
        if (source[i] == "google") {
            fill(barColor);
        } else {
            fill(estColor)
        }

        var rects = rect(0, offset, angleSeparation * 1, animatedHeight);
        // noStroke();
        // fill(250, 250, 250);
        // textSize(8);
        // text(currentDate, offset + 200, 0);
        translate(windowWidth / 2, windowHeight / 2);
        rotate(angleSeparation * 1);
        pop();

    }


}

function draw() {

    background(backgroundColor);

    //create the axis circlesrgb(255, 201, 53)
    c = color('rgba(60, 67, 76,0.15)'); // Define color 'c'
    noFill();
    stroke(c);
    strokeWeight(1);
    circle(windowWidth / 2, windowHeight / 2, 290); // 10,000 steps
    circle(windowWidth / 2, windowHeight / 2, 430); // 20,000 steps
    circle(windowWidth / 2, windowHeight / 2, 570); // 20,000 steps

    c = color('rgba(60, 67, 76,0.8)'); // Define color 'c'
    fill(c);
    noStroke();
    textSize(12);
    text('10k', windowWidth - 550, windowHeight / 2)
    text('20k', windowWidth - 480, windowHeight / 2)
    text('30k', windowWidth - 410, windowHeight / 2)


    var steps = mydata.steps;

    var date = mydata.date;

    // call the function to draw the radial graph
    drawRadial(steps, date, mydata.source);

    ///// START TEXT BELOW /////

    noStroke();


    textFont(boldFont)
    textAlign(LEFT)
    textSize(22);
    fill(barColor);
    text('A year of', width / 6, height - 580);
    textFont(bolderFont)
    textSize(76);
    title = text('Steps', (width / 6) - 5, height - 510);

    fill(250, 250, 250);
    textSize(18);
    textFont(regFont)

    if (windowWidth > 800) {
        body = text('Steps every day of 2019. What a time to be alive. Was it all worth it? I think so.',
            width / 6, height - 480,
            400, 400);
    }


    // start stats to the right
    textSize(26);

    push()
    textFont(bolderFont)
    text('Average', width - (width / 2.2), height - 460);
    textFont(regFont)
    text('9,898', width - (width / 2.2), height - 430);
    pop()

    push()
    textFont(bolderFont)
    text('Best day', width - (width / 3.2), height - 460);
    textFont(regFont)
    text('Dec 24th', width - (width / 3.2), height - 430);
    pop()

    push()
    textFont(bolderFont)
    text('Worst day', width - (width / 2.2), height - 360);
    textFont(regFont)
    text('Dec 1st', width - (width / 2.2), height - 330);
    pop()

    push()
    textFont(bolderFont)
    text('Other', width - (width / 3.2), height - 360);
    textFont(regFont)
    text('1,240', width - (width / 3.2), height - 330);
    pop()


}