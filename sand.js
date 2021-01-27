class Sand {
    constructor(x,y, radius) {
      var options = {
          'restitution':0.7,
          'friction':1,
          'density':4,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius=radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      
      fill("yellow");
      ellipse(pos.x, pos.y,this.radius);
      
  
      
  
    }
  };