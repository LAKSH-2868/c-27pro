class Bob{
    constructor(x,y){
        var option = {
         'density':3,
         'friction': 0,
         'restitution':0  
        }
        this.body = Bodies.circle(x,y,30,option);
        this.radius = 60;
        World.add(world,this.body);
    }
        display(){        
            var pos = this.body.position;
            
            push();
            translate(pos.x,pos.y);
            fill = "red"
            ellipseMode(CENTER);
            ellipse(0,0,this.radius,this.radius);
            pop();
        }
}