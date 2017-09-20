let width = 400;
let height = 400;

function setup() {
    createCanvas(width,height);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    let hh = hour();
    let mm = minute();
    let ss = second();

    //Clock here
    
    //pie(hh,mm,ss)
    stack(hh,mm,ss);
}

function stack(hh,mm,ss) {
    translate(width/2, width/3);

    rectMode(CENTER);

    stroke(255);
    strokeWeight(8);
    
    fill(255, 100, 150);
    rect(0, 0, width/60*ss, height/6, 20);

    fill(150, 255, 100);
    rect(0, height/6, width/60*mm, height/6, 20);

    fill(100, 150, 255);
    rect(0, 2 * height/6,width/24 * hh, height/6, 20)
}

function pie(hh,mm,ss) {
    
    translate(width/2,height/2);
    rotate(-90);
    noStroke();

    fill(255, 100, 150);
    let hourAngle = map(hh % 12, 0, 12, 0, 360)
    arc(0,0,300,300,0,hourAngle,PIE);

    fill(150, 255, 100);
    let minuteAngle = map(mm, 0, 60, 0, 360)
    arc(0,0,250,250,0,minuteAngle,PIE);

    fill(100, 150, 255);
    let secondAngle = map(ss, 0, 60, 0, 360)
    arc(0,0,200,200,0,secondAngle,PIE);

    stroke(255);
    strokeWeight(8);
    noFill();
    arc(0,0,300,300,0,360);
}