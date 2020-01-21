let mid;
let ring;
let bookDay, numPages, rating, title, star;
let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function preload() {
    regFont = loadFont('../fonts/Lato/Lato-Regular.ttf')
    boldFont = loadFont('../fonts/Lato/Lato-Bold.ttf')
    bolderFont = loadFont('../fonts/Lato/Lato-Black.ttf')
    table = loadTable('jonny.csv', 'csv', 'header');
    star = loadImage('star.png')

}

function setup() {
    createCanvas(1200, 1200);
    background('#E9E3CF');
    mid = width / 2;
    noLoop();
    angleMode(RADIANS);
}

function draw() {

    // put everything in the center
    translate(width / 2, height / 2);

    // make the axis
    stroke(180);
    strokeWeight(0.5);
    noFill();
    //ellipse(0, 0, 200);
    ellipse(0, 0, 350);
    ellipse(0, 0, 500);
    ellipse(0, 0, 650);
    ellipse(0, 0, 800);


    push();
    fill(160);
    textSize(12);
    text('2', 0, -180);
    image(star, 10, -189, 10, 10);
    text('3', 0, -260);
    image(star, 10, -269, 10, 10);
    text('4', 0, -330);
    image(star, 10, -340, 10, 10);
    text('5', 0, -410);
    image(star, 10, -419, 10, 10);

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

    textFont(boldFont);
    fill(80)
    textSize(82);
    textAlign(CENTER);
    text('72', 0, -10);
    textSize(32);
    textFont(regFont);
    text('books', 0, 30);
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
        title = table.getString(r, 0);
        bookDay = table.getNum(r, 2);
        rating = table.getNum(r, 3);
        numPages = table.getNum(r, 4);

        // select the ring to draw bubble
        if (rating == 5) {
            ring = 400;
        } else if (rating == 4) {
            ring = 325;
        } else if (rating == 3) {
            ring = 250;
        } else if (rating == 2) {
            ring = 175;
        }

        noStroke();
        fill('rgba(54, 34, 18,0.5)');
        push();
        angleMode(DEGREES);

        // map to degrees around circle 0 - 360
        circleSpot = map(bookDay, 0, 360, 0, 360);

        // map the size of circle
        let size = map(numPages, 0, 1200, 10, 140);

        rotate(circleSpot);
        ellipse(0, ring, size);
        textSize(10);
        //text(title, 0, ring);
        pop();
    }

}