// add loadTable to use data instead of random for Music

var circles = [];
let width, height, chartWidth, chartHeight;
let name, totals, size;

// make sure data is loaded first
function preload() {
    table = loadTable('../data/music2.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 500;

    chartWidth = width - 100;
    chartHeight = windowHeight + 50;
    createCanvas(width, height);

    var protection = 0;

    while (circles.length < 100) {
        for (let r = 0; r < table.getRowCount(); r++) {
            name = table.getString(r, 0);
            totals = table.getNum(r, 1);
            noStroke();
            fill(230, 80);
            // map the size of circle
            size = map(totals, 0, 500, 0, 200);
            console.log(size)

            var circle = {
                x: random(20, windowWidth - 20),
                y: random(50, chartHeight - 100),
                r: size,
                artist: name
            }

            var overlapping = false;
            for (var j = 0; j < circles.length; j++) {
                var other = circles[j];
                var d = dist(circle.x, circle.y, other.x, other.y);
                if (d < circle.r + other.r) {
                    overlapping = true;
                }
            }

            if (!overlapping) {
                circles.push(circle);
            }

            protection++;
            if (protection > 100000) {
                break;
            }
        }
    }

    for (var i = 0; i < circles.length; i++) {

        // draw the circles and text
        fill(random(0, 120), random(50, 100), 190, 120);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
        textSize(12);
        fill(230);
        noStroke();
        textAlign(CENTER);
        if ((circles[i].r * 2) > 80) {
            text(circles[i].artist, circles[i].x - 50, circles[i].y - 10, 100, 50)
        }

    }

    ///// START TEXT BELOW /////
    noStroke();
    height = height - 50;
    fill(60);

    textFont(boldFont);
    textAlign(LEFT)
    textSize(22);
    text('A year of', width / 6, height - 380);
    textFont(bolderFont);
    textSize(76);
    title = text('Music', (width / 6) - 5, height - 310);

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
    text('Top artist', width - (width / 2.2), height - 270);
    textFont(regFont)
    text('Lauv', width - (width / 2.2), height - 235);
    pop()

    push()
    textFont(bolderFont)
    text('Top album', width - (width / 3.2), height - 270);
    textFont(regFont)
    text('Good Thing (Leon Bridges)', width - (width / 3.2), height - 235);
    pop()

    push()
    textFont(bolderFont)
    text('Top song', width - (width / 2.2), height - 170);
    textFont(regFont)
    text('Bad Bad News', width - (width / 2.2), height - 135);
    pop()

    push()
    textFont(bolderFont)
    text('Most feels', width - (width / 3.2), height - 170);
    textFont(regFont)
    text('Dawes', width - (width / 3.2), height - 135);
    pop()

}