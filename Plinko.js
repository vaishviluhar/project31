class Plinko{
    constructor(x, y, radius){
        var optons = {
            isStatic : true
        }

        this.body = ellipse(x, y, radius, radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}