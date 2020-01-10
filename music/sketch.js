// add loadTable to use data instead of random for Music

var circles = [];
let width, height, chartWidth, chartHeight;
let name, totals, size;

// make sure data is loaded first
function preload() {
    table = loadTable('../data/music.csv', 'csv', 'header');
    regFont = loadFont('../fonts/CircularStd-Medium.otf')
    boldFont = loadFont('../fonts/CircularStd-Bold.otf')
    bolderFont = loadFont('../fonts/CircularStd-Black.otf')
}

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 500;

    chartWidth = width - 100;
    chartHeight = height - 100;
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
            x: random(200, chartWidth),
            y: random(100, chartHeight),
            r: size,
            artist: name
        }

        var overlapping = false;
        for (var j = 0; j < circles.length; j++) {
            var other = circles[j];
            var d = dist(circle.x, circle.y, other.x, other.y);
            if (d < circle.r + other.r - 50) {
                overlapping = true;
            }
        }

        if (!overlapping) {
            circles.push(circle);
        }

        protection++;
        if (protection > 10000) {
            break;
          }
        }
    }

    for (var i = 0; i < circles.length; i++) {

        
        fill(random(0, 120), random(50, 120), 130, 120);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
        textSize(12);
        fill(230);
        noStroke();
        if (circles[i].r > 60) {
          text(circles[i].artist, circles[i].x - 10, circles[i].y - 10, 50, 50)
        }

    }

}
