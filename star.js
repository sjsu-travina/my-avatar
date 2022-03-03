class Star {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation; 
    this.size = _size;
  }
  
   display() {
     // Star Color
     fill(200, 190);

     // Star Shape
     push();
     translate(this.xPos, this.yPos);
     rotate(45);
     scale(this.size);
     rectMode(CENTER);
     rect(0, 0, width * .05 + micVar , height * .05 + micVar)
     pop();
  }
  
  move() {
    
    if (this.yPos <= height * 1) {
    // this.yPos = this.yPos + 1;
    // shorthand below is +=
    this.yPos ++;
    } else {
      this.yPos = -height * .05;
    }
  }  
}
        
// function drawStar(xPos, yPos, rotation) {
//   // Star Color
//   fill(200, 190);
  
//   // Star Shape
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   rectMode(CENTER);
//   rect(0, 0, width * .05 , height * .05)
//   pop();
// }