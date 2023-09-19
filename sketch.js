let x = 200;
let x1 = 200;
let x2 = 200;
let speed1 = 2;
let speed2 = 2;
let diameter = 40;
let isClicked = false

function setup() {

  createCanvas(400, 400);  
}

function draw (){
  background(125);
  rect(x1, height/4, 40)
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





// function mousePressed() {
// isClicked = !isClicked;
//   if (isClicked) {
//   } else {
    
//   }
//}
