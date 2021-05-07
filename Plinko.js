class Plinko{
    constructor(x, y, radius){
        var optons = {
            isStatic : true
        }

        this.body = ellipse(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}