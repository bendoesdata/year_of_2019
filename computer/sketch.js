let mid;
let width, height, chartWidth, chartHeight;
let name, seconds, prod, c;
let c0, c1, c2, c3;
let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

// make sure data is loaded first
function preload() {
    table = loadTable('../data/comp_piv.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

// colors
c0 = '#2a8e9b'
c1 = '#97bfc5'
c2 = '#ffa797'
c3 = '#ff5245'
const cream = '#F7F6F4'

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 50;

    chartWidth = width - 100;
    chartHeight = windowHeight;

    createCanvas(width, height + 400);
    background(cream);
    noLoop();
    angleMode(RADIANS);
    strokeCap(SQUARE);
    offset = random(10, 50);

}

function draw() {
    background('#F7F6F4');
    // put everything in the center
    translate(chartWidth / 2, chartHeight / 2);


    /////  TICKS AND MONTHS /////
    push();
    translate(70, -20);
    fill(30, 40)
    let monthMark = 0;
    rotate(0.23)
    textAlign(CENTER);
    textSize(10);
    // draw tick marks for months
    for (let z = 1; z < 13; z++) {
        let wordSpace = 0.52;
        rotate(monthMark);
        monthMark = wordSpace;
        text(months[z], 0, -320);
    }
    pop();

    push();
    translate(70, -20);
    angleMode(DEGREES);
    stroke(30, 50);
    strokeWeight(1);
    let tickMark = -3;
    // draw tick marks for months
    for (let z = 1; z < 13; z++) {
        let monthSpace = 360 / 12;
        rotate(tickMark);
        tickMark = monthSpace;
        line(0, 300, 0, 310);
    }

    pop();

    // back to Radians
    angleMode(RADIANS)

    ///// LEGEND /////

    noStroke();
    fill(120)
    textSize(12)
    text('productivity', (width / 3) - 45, chartHeight - 515);
    textSize(10)
    text('low', (width / 3) - 65, chartHeight - 490);
    text('high', (width / 3) + 20, chartHeight - 490);
    fill(c0)
    rect((width / 3), chartHeight - 500, 15, 5)
    fill(c1)
    rect((width / 3) - 15, chartHeight - 500, 15, 5)
    fill(c2)
    rect((width / 3) - 30, chartHeight - 500, 15, 5)
    fill(c3)
    rect((width / 3) - 45, chartHeight - 500, 15, 5)

    fill(120)
    textSize(12)
    text('duration (mins)', (width / 3) + 70, chartHeight - 515);
    rect((width / 3) + 80, chartHeight - 500, 45, 3)
    rect((width / 3) + 90, chartHeight - 495, 20, 3)
    rect((width / 3) + 96, chartHeight - 490, 10, 3)

    ///// START STATS TEXT BELOW /////
    height = height - 50;
    fill(10);

    textFont(boldFont);
    textAlign(LEFT)
    textSize(22);
    text('A year of', (-width / 4), chartHeight - 440);
    textFont(bolderFont);
    textSize(76);
    title = text('Computing', (-width / 4) - 5, chartHeight - 370);

    fill(10);
    textSize(16);
    textFont(regFont)
    body = text('I track my laptop activity using RescueTime, but I only have this app installed on my personal laptop. In June I started a new job, which meant a work computer where I do most "work" things. My most productive activity tended to be early in the year, when I was searching for a job and adding new pieces to my portfolio. Looking back, it feels a bit depressing that my most used applications was Gmail...', -width / 4, chartHeight - 340, // position
        400, 400); // wrap size

    // start stats to the right
    textSize(26);

    push()
    textFont(bolderFont)
    text('Top site', (width / 6.2), chartHeight - 330);
    textFont(regFont)
    textSize(22);
    text('Gmail', (width / 6.2), chartHeight - 295);
    pop()

    push()
    textFont(bolderFont)
    text('Avg productivity', (width / 3.5), chartHeight - 330);
    textFont(regFont)
    textSize(22);
    text('+0.7', (width / 3.5), chartHeight - 295);
    pop()

    push()
    textFont(bolderFont)
    text('Best day', (width / 6.2), chartHeight - 230);
    textFont(regFont)
    textSize(22);
    text('Apr 26', (width / 6.2), chartHeight - 195);
    pop()

    push()
    textFont(bolderFont)
    text('Worst day', (width / 3.5), chartHeight - 230);
    textFont(regFont)
    textSize(22);
    text('Sept 11', (width / 3.5), chartHeight - 195);
    pop()

    /////  START RADIAL VIZ  /////

    // make use Jan 1 is at the top
    rotate(PI + 1.55);

    translate(0, -50);

    //cycle through the table and store values
    for (let r = 0; r < table.getRowCount(); r++) {
        day_computed = table.getNum(r, 0);
        seconds = table.getNum(r, 1);
        prod = table.getNum(r, 2);

        //print(title + ' ' + numPages)

        noStroke();
        fill(30, 80);

        angleMode(DEGREES);
        // map to degrees around circle 0 - 360
        let arcStart = map(day_computed, 0, 365, 0, 360);

        // map the size of each arc (stroke)
        let size = map(seconds, 0, 40000, 5, 200);

        // define color based on bins of values
        if (prod > 1.2) {
            c = c0
        } else if (prod > 0.5) {
            c = c1
        } else if (prod > 0) {
            c = c1
        } else {
            c = c2
        }

        noFill();
        stroke(c);
        strokeWeight(size);

        arc(0, 100, 450, 450, arcStart, arcStart + 1);
    }

    push();

    pop();

}
