let frame = 0;

let r = 200;
let angle1, angle2;
let x1, y1;
let x2, y2;

let posX, posY;
let amt;

function setup() {
  createCanvas(1280, 800);
}

function draw() {
  background(19, 30, 51, 5);
  
  stroke(240);
  strokeWeight(0.5);
  for(let i = 0 ; i < 500; i++){
    point(random(width), random(height));
  }
  
  translate(width/2, height/2);
  
  insideCircle();
  insideCircle();
  insideCircle();
  insideCircle();
  
  push();
  
  rotate( frame * 0.01);
  translate(r + 100 , 0);
  fill (233,231,239);
  stroke(random(18,201),random(80,218),random(123,191));
  ellipse(0,0, 3, 3);
  
//  stroke(random(158,255),random(42,117),random(0,34));
  stroke(random(18,201),random(80,218),random(123,191));
  line(0,0,random(50),random(50));
  line(0,0,random(100),random(100));
  line(0,0,random(100),random(-100,100));
  
  stroke(233,231,239,random(50,100));
  line(0,0,random(50),random(100));
  line(0,0,random(100),random(200));
  
  push();

  for (i = 0; i < 10; i++){
    let nPosX = posX + random(-amt) * i;
    let nPosY = posY + random(-amt,amt) * i;
  
    strokeWeight(random( 0.1, 2));
    stroke(255);
    line(posX, posY, nPosX, nPosY);
  
    posX = nPosX;
    posY = nPosY;
  }
  
  posX = 0;
  posY = 0;
  amt = random(4,15);
  
  
  pop();
  
  pop();
  
  frame++;
}

function insideCircle(){
  stroke(random(233,255),random(117,231),random(0,239));
//  stroke(random(158,255),random(42,117),random(0,34));
  angle1 = random(0,(2 * PI));
  x1 =  r * cos(angle1);
  y1 =  r * sin(angle1);
  
  angle2 = random(0,(2 * PI));
  x2 = r * cos(angle2);
  y2 = r * sin(angle2);
  
  line(x1,y1,x2,y2);
}


