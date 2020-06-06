class Triangle {
    constructor(x, y, radius){
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.polygon(x, y,6, radius);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push ();
      strokeWeight(4)
      stroke("brown")
      translate(pos.x,pos.y);
      angleMode(RADIANS);
      rotate(this.body.angle);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  };