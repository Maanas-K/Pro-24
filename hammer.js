class Hammer {
    constructor(x, y, width) {
     
      this.body = Bodies.rectangle(x, y, width, 50,   {'restitution':0.5,'friction':1, 'density':2.0});
      this.width = width;
      this.height = 50;
      
      
      World.add(world, this.body);
    }
    show(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight (5)
      
      fill("gray");
      rect(0, 0, this.width, this.height);
      pop();

      this.body.position.x= World.mouseX  
      this.body.position.y= World.mouseY
    
    }
  };