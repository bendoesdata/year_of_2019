// create global variables
let cnv;
let mid;
let width, height, chartWidth, chartHeight;
let day, distance;
let months = ['', 'Jan', '', 'Mar', '', 'May', '', 'July', '', 'Sept', '', 'Nov', ''];
const backgroundColor = "#2A8E9D"
const circleColor = "#353E4D"
const cream = '#F7F6F4'

// make sure data is loaded first
function preload() {
    table = loadTable('../data/run_clean.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

// setup the document
function setup() {
    width = windowWidth - 20;
    height = windowHeight + 500;

    chartWidth = width - 30;
    chartHeight = windowHeight;

    var canvas = createCanvas(width, height);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent("sketch-div");
    mid = width / 2;

}

function drawCircles() {

    for (let r = 0; r < table.getRowCount(); r++) {
        day = table.getNum(r, 0);
        distance = table.getNum(r, 3);
        noStroke();
        fill(230, 80);

        push();
        angleMode(DEGREES);

        // map to degrees around circle 0 - 360
        circleSpot = map(day, 0, 360, 30, chartWidth);

        // map the size of circle
        let size = map(distance, 0, 13, 2, 50);

        ellipse(circleSpot, chartHeight / 2, size);
        textSize(10);
        //text(title, 0, ring);
        pop();
    }

}

function draw() {

    background(backgroundColor);

    //create the axis circles
    c = color('rgba(30,30,30,0.2)'); // Define color 'c'
    noFill();
    stroke(c);
    strokeWeight(1);

    line(0, chartHeight / 2, windowWidth, chartHeight / 2);

    let startTick = 30;
    let divisor = chartWidth / 12;
    // draw tick marks for months
    for (let z = 0; z < 13; z++) {
        line(startTick, (chartHeight / 2) - 10, startTick, (chartHeight / 2) + 10);
        startTick = startTick + divisor;
    }

    push();
    noStroke();
    fill(230, 80);
    textSize(10);
    // add month labels
    let labelSpot = 75;
    for (let z = 1; z < 13; z++) {
        text(months[z], labelSpot, (chartHeight / 2) + 40);
        labelSpot = labelSpot + divisor;
    }
    pop();

    // call the function to draw chart
    drawCircles();

    ///// START TEXT BELOW /////

    noStroke();

    fill(240)
    textFont(boldFont);
    textAlign(LEFT)
    textSize(22);
    text('A year of', width / 6, height - 580);
    textFont(bolderFont);
    textSize(76);
    title = text('Running', (width / 6) - 5, height - 510);

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