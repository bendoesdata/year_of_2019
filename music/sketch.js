// add loadTable to use data instead of random for Music

var circles = [];

function setup() {
    width = windowWidth - 20;
    height = windowHeight + 500;

    chartWidth = width - 300;
    chartHeight = height - 100;
    createCanvas(width, height);

    var protection = 0;

    while (circles.length < 500) {
        var circle = {
            x: random(300, chartWidth),
            y: random(100, chartHeight),
            r: random(2, 80)
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
        if (protection > 10000) {
            break;
        }
    }

    for (var i = 0; i < circles.length; i++) {
        fill(random(255), random(255), random(255), 120);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }

}