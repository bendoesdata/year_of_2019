// viz mine as bars with start and end

let mid;
let ring;
let bookDay, numPages, rating, title;
let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function preload() {
    regFont = loadFont('../fonts/Lato/Lato-Regular.ttf')
    boldFont = loadFont('../fonts/Lato/Lato-Bold.ttf')
    bolderFont = loadFont('../fonts/Lato/Lato-Black.ttf')
    table = loadTable('jonny.csv', 'csv', 'header');

}

function setup() {
    createCanvas(1200, 1200);
    background('#E9E3CF');
    mid = width / 2;
    noLoop();
}

function draw() {

    // put everything in the center
    // translate(width / 2, height / 2);

    push();
    fill(160);
    textSize(12);
    text('2 ★', 0, -180);
    text('3 ★', 0, -260);
    text('4 ★', 0, -330);
    text('5 ★', 0, -410);

    push();
    fill(30, 50)
    let monthMark = 0;
    rotate(0.25)
    textAlign(CENTER);
    textSize(10);
    // // draw tick marks for months
    // for (let z = 1; z < 13; z++) {
    //     let wordSpace = 0.52;
    //     rotate(monthMark);
    //     monthMark = wordSpace;
    //     text(months[z], 0, -420);
    // }

    pop();

    pop();


    push();

    stroke(150);
    strokeWeight(1);
    // let tickMark = 0;
    // // draw tick marks for months
    // for (let z = 1; z < 13; z++) {
    //     let monthSpace = 360 / 12;
    //     rotate(tickMark);
    //     tickMark = monthSpace;
    //     line(0, 400, 0, 410);
    // }

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
        fill(30, 140);

    }

}