let mid;
let ring;
let bookDay, numPages, rating, title;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('jonny.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
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

    // make use Jan 1 is at the top
    rotate(PI);

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
    angleMode(DEGREES);
    stroke(150);
    strokeWeight(1);

    // draw tick marks for months
    for (let z = 0; z < 13; z++) {
      let tickMark = map(z, 0, 13, 0, 360);
      rotate(tickMark);
      line(0, 400, 0, 410);
    }


    pop();

      //cycle through the table and store values
  for (let r = 0; r < table.getRowCount(); r++) {
      title  = table.getString(r, 0);
      bookDay  = table.getNum(r, 2);
      rating  = table.getNum(r, 3);
      numPages  = table.getNum(r, 4);

      //print(title + ' ' + numPages)

      // select the ring to draw bubble
      if (rating == 5) {
        ring = 400;
      } else if (rating == 4) {
        ring = 325;
      } else if (rating == 3) {
        ring = 250;
      } else if (rating ==2) {
        ring = 175;
      }

      noStroke();
      fill(30, 80);
      push();
        angleMode(DEGREES);

        // map to degrees around circle 0 - 360
        circleSpot = map(bookDay, 0, 360, 0, 360);

        // map the size of circle
        let size = map(numPages, 0, 1200, 10, 100);

        rotate(circleSpot);
        ellipse(0, ring, size);
        textSize(10);
        //text(title, 0, ring);
      pop();
    }

}
