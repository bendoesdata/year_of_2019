let mid;
let ring;
let day, type, distance;
let circFill;
let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const backgroundColor = "#2A8E9D"
const circleColor = "#353E4D"
const cream = '#F7F6F4'

function preload() {
    //my table is comma separated value "csv"
    //and has a header specifying the columns labels
    table = loadTable('../data/workouts_clean_2.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 400;

    chartWidth = width - 100;
    chartHeight = windowHeight - 200;

    createCanvas(width, height + 200);
    background(cream);
    mid = width / 2;
    noLoop();
    angleMode(RADIANS);
}

function draw() {
    push();
    // put everything in the center
    translate(width / 2, chartHeight / 1.4);

    // make the axis
    stroke(210);
    strokeWeight(1);
    noFill();
    //ellipse(0, 0, 200);
    ellipse(0, 0, 350);
    ellipse(0, 0, 500);
    ellipse(0, 0, 650);
    ellipse(0, 0, 800);

    push();
    fill(30, 50)
    let monthMark = 0;
    rotate(0.28)
    textAlign(CENTER);
    textSize(10);
    // draw tick marks for months
    for (let z = 1; z < 13; z++) {
        let wordSpace = 0.52;
        rotate(monthMark);
        monthMark = wordSpace;
        text(months[z], 0, -420);
    }
    pop();

    // make use Jan 1 is at the top
    rotate(PI);

    push();
    angleMode(DEGREES);
    stroke(150);
    strokeWeight(1);
    let tickMark = 0;
    // draw tick marks for months
    for (let z = 1; z < 13; z++) {
        let monthSpace = 360 / 12;
        rotate(tickMark);
        tickMark = monthSpace;
        line(0, 400, 0, 410);
    }

    pop();

    //cycle through the table and store values
    for (let r = 0; r < table.getRowCount(); r++) {
        day = table.getNum(r, 13);
        type = table.getString(r, 5);
        distance = table.getNum(r, 8);

        // select the ring to draw bubble
        if (type == "Ride") {
            ring = 400;
            circFill = "rgba(55,64,80, 0.5)"
        } else if (type == "Run") {
            ring = 325;
            circFill = "rgba(42,142,157, 0.5)"
        } else if (type == "Hike") {
            ring = 250;
            circFill = "rgba(255,82,69, 0.5)"
        } else {
            ring = 175;
            circFill = "rgba(252, 195, 53, 0.6)"
        }

        noStroke();
        fill(circFill);
        push();
        angleMode(DEGREES);

        // map to degrees around circle 0 - 360
        let circleSpot = map(day, 0, 360, 0, 360);

        // map the size of circle
        let size = map(distance, 0, 20, 10, 100);

        rotate(circleSpot);
        ellipse(0, ring, size);
        textSize(10);
        //text(title, 0, ring);
        pop();
    }

    pop();

    ///// START TEXT BELOW /////
    noStroke();
    height = height - 50;

    textFont(boldFont);
    textAlign(LEFT)
    textSize(22);
    text('A year of', width / 6, height - 380);
    textFont(bolderFont);
    textSize(76);
    title = text('Workouts', (width / 6) - 5, height - 310);

    fill(60);
    textSize(16);
    textFont(regFont)
    body = text('Steps every day of 2019. What a time to be alive. Was it all worth it? I think so.',
        width / 6, height - 280, // position
        400, 400); // wrap size

    // start stats to the right
    textSize(26);

    push()
    textFont(bolderFont)
    text('Average', width - (width / 2.2), height - 270);
    textFont(regFont)
    text('9,898', width - (width / 2.2), height - 235);
    pop()

    push()
    textFont(bolderFont)
    text('Best day', width - (width / 3.2), height - 270);
    textFont(regFont)
    text('Dec 24th', width - (width / 3.2), height - 235);
    pop()

    push()
    textFont(bolderFont)
    text('Worst day', width - (width / 2.2), height - 170);
    textFont(regFont)
    text('Dec 1st', width - (width / 2.2), height - 135);
    pop()

    push()
    textFont(bolderFont)
    text('Other', width - (width / 3.2), height - 170);
    textFont(regFont)
    text('1,240', width - (width / 3.2), height - 135);
    pop()

}