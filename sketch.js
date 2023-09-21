let x1 = 200;
let x2 = 200;
let speed1 = 2;
let speed2 = 2;
let diameter = 40;
let isClicked = false
let transparency = 0


function setup() {
  
  createCanvas(400, 400);  
}


function draw (){
  if (millis() > 10000) {
    background("blue");
  } else {
    background(255, 125, 0);
  }
  
  if (transparency < 255) {
    transparency++;
  }
    fill(255, 0, 0, transparency)
  rect(x1, height/4, 40)

  fill(255, 255, 0)
  ellipse(x2, height/2, 40);

  if (x1 >= width || x1 <= 0) {
  speed1 = speed1 * -1
  }

  x1 += speed1;

  if (mouseIsPressed) {
    speed2 = 0
      } else {x2 += 0}
  

  if (x2 >= width || x2 <= 0) {
    speed2 = speed2 * -1
    }
  
    x2 += speed2;

  }

  function keyPressed() {
    if (key == 'j' || key == 'J'){
      if (speed2 < 0) {
        console.log("Going Left!")
      } else {
        console.log("Going Right!")
      }
      }
    console.log("a key was pressed");
    }
  