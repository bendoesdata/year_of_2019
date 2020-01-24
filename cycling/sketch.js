let mid;
let ring;
let day, type, distance;
let circFill;
let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const backgroundColor = "rgba(55,64,80, 1)"
const cream = '#F7F6F4'

function preload() {
    //my table is comma separated value "csv"
    //and has a header specifying the columns labels
    table = loadTable('../data/cycle_clean.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 100;

    chartWidth = width - 100;
    chartHeight = windowHeight + 30;

    createCanvas(width, height + 400);
    background(backgroundColor);
    mid = width / 2;
    noLoop();
    angleMode(RADIANS);
}

function draw() {
    push();
    // make the axis
    stroke(210, 50);
    strokeWeight(1);
    noFill();

    // put everything in the center
    translate(width / 2, chartHeight / 1.3);
    arc(0, 0, 960, 960, PI, TWO_PI);

    ///// LEGEND /////

    noStroke();
    fill(230, 120)
    textSize(12)
    text('distance', (width / 2) - 180, (chartHeight / 2) - 280);
    stroke(230, 120);
    strokeWeight(1);
    noFill();
    circle((width / 2) - 180, (chartHeight / 2) - 250, 10);
    circle((width / 2) - 140, (chartHeight / 2) - 250, 40);

    // make use Jan 1 is at the top
    rotate(HALF_PI);

    push();
    angleMode(DEGREES);
    stroke(150);
    strokeWeight(1);
    let tickMark = 0;

    // draw tick marks for months
    for (let z = 0; z < 13; z++) {
        let monthSpace = 180 / 12;
        rotate(tickMark);
        tickMark = monthSpace;
        line(0, 480, 0, 490);
    }
    pop();

    push();
    angleMode(RADIANS);
    fill(230, 40)
    noStroke();
    textSize(10);
    textFont(regFont)
    textAlign(CENTER);
    push()
    rotate(PI)
    text('Jan', 60,-530)
    pop()
    push()
    rotate(PI + 0.5)
    text('Mar', 80,-530)
    pop()
    push()
    rotate(PI + 1.2)
    text('May', -3,-520)
    pop()
    push()
    rotate(PI + 1.6)
    text('July', 60,-510)
    pop()
    push()
    rotate(PI + 2.2)
    text('Sep', 10,-530)
    pop()
    push()
    rotate(PI + 2.74)
    text('Nov', 10,-530)
    pop()
    // draw tick marks for months


    pop();

    //cycle through the table and store values
    for (let r = 0; r < table.getRowCount(); r++) {
        day = table.getNum(r, 13);
        type = table.getString(r, 5);
        distance = table.getNum(r, 8);

        // select the ring to draw bubble
        if (type == "Ride") {
            ring = 480;
            circFill = "rgba(55,64,80, 0.8)"
        }

        noStroke();
        fill(230, 80);
        push();
        angleMode(DEGREES);

        // map to degrees around circle 0 - 360
        let circleSpot = map(day, 0, 360, 0, 180);

        // map the size of circle
        let size = map(distance, 0, 50, 5, 110);

        rotate(circleSpot);
        ellipse(0, ring, size);
        textSize(10);
        //text(title, 0, ring);
        pop();
    }

    pop();

    ///// START TEXT BELOW /////
    noStroke();
    fill(230);
    height = height - 50;
    textFont(boldFont);
    textAlign(LEFT)
    textSize(22);
    text('A year of', width / 6, chartHeight - 120);
    textFont(bolderFont);
    textSize(76);
    title = text('Cycling', (width / 6) - 5, chartHeight - 45);

    textSize(16);
    textFont(regFont)
    body = text('In May I moved from London to Boston, MA. For cycling specifically, this meant a huge increase in mileage. I used to ride in London a bit, but here in Boston I bike to work almost everyday. There were also a few longer treks over the year: like to Walden Pond in June!',
        width / 6, chartHeight - 10, // position
        400, 400); // wrap size

    // start stats to the right
    textSize(26);

    push()
    textFont(bolderFont)
    text('Longest ride', width - (width / 2.2), chartHeight - 10);
    textFont(regFont)
    text('36 mi', width - (width / 2.2), chartHeight + 20);
    pop()

    push()
    textFont(bolderFont)
    text('Total distance', width - (width / 3.2), chartHeight - 10);
    textFont(regFont)
    text('688 mi', width - (width / 3.2), chartHeight + 20);
    pop()

    push()
    textFont(bolderFont)
    text('Avg distance', width - (width / 2.2), chartHeight + 90);
    textFont(regFont)
    text('2.5 mi', width - (width / 2.2), chartHeight + 120);
    pop()

    push()
    textFont(bolderFont)
    text('Most common ride', width - (width / 3.2), chartHeight + 90);
    textFont(regFont)
    text('Work commute', width - (width / 3.2), chartHeight + 120);
    pop()

}
