// create global variables
let cnv;
let mid;
let width, height, chartWidth, chartHeight;
let day, distance;
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

    chartWidth = width - 100;
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
        circleSpot = map(day, 0, 360, 0, chartWidth);

        // map the size of circle
        let size = map(distance, 0, 13, 5, 80);

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

    line(0, chartHeight / 2, windowWidth, chartHeight / 2)

    // call the function to draw chart
    drawCircles();

    ///// START TEXT BELOW /////

    noStroke();


    textFont(bolderFont)
    textSize(52);
    fill(circleColor);
    title = text('A Year of Running', width / 6, height - 500);

    fill(250, 250, 250);
    textSize(16);
    textFont(regFont)
    body = text('Steps every day of 2019. What a time to be alive. Was it all worth it? I think so.',
        width / 6, height - 480, // position
        400, 400); // wrap size

    // start stats to the right
    textSize(26);

    push()
    textFont(bolderFont)
    text('Average', width - (width / 2.2), height - 470);
    textFont(regFont)
    text('9,898', width - (width / 2.2), height - 440);
    pop()

    push()
    textFont(bolderFont)
    text('Best day', width - (width / 3.2), height - 470);
    textFont(regFont)
    text('Dec 24th', width - (width / 3.2), height - 440);
    pop()

    push()
    textFont(bolderFont)
    text('Worst day', width - (width / 2.2), height - 370);
    textFont(regFont)
    text('Dec 1st', width - (width / 2.2), height - 340);
    pop()

    push()
    textFont(bolderFont)
    text('Other', width - (width / 3.2), height - 370);
    textFont(regFont)
    text('1,240', width - (width / 3.2), height - 340);
    pop()


}