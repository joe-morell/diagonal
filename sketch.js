function setup() {
    createCanvas(400, 400);
    x = 100
    y = 100
    dx = 1
    dy = 1
    size = 0
  }
  
  function draw() {
    background(220);
    circle(x,y,100)
    
    x = x + dx
    y = y + dy
    
    if (x > 300 || x < 100) {
      dx = - dx
    }
    
    if (y > 300 || y < 100) {
      dy = - dy
    }
  
  }