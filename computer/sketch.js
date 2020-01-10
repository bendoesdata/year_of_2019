let mid;

let width, height, chartWidth, chartHeight;
let name, seconds, prod, c;
let c0, c1, c2, c3;

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
  height = windowHeight + 400;

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

    // make use Jan 1 is at the top
    rotate(PI + 1.55);

    //cycle through the table and store values
for (let r = 0; r < table.getRowCount(); r++) {
    day_computed  = table.getNum(r, 0);
    seconds  = table.getNum(r, 1);
    prod  = table.getNum(r, 2);

    //print(title + ' ' + numPages)

    noStroke();
    fill(30, 80);

      angleMode(DEGREES);
      // map to degrees around circle 0 - 360
      let arcStart = map(day_computed, 0, 365, 0, 360);

      // map the size of each arc (stroke)
      let size = map(seconds, 0, 40000, 5, 120);

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



}
