class Rope{
    constructor(body1,body2,offsetX){
        this.offsetX = offsetX;
        //this.offsetY = offsetY;
        
        var setting = {
            bodyA:body1,
            bodyB:body2,
            posA:{x:this.offsetX,y:this.y}
        }
        this.rope = Constraint.create(setting);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        fill="red"
        strokeWeight(2);
    
        line(posA.x+this.offsetX,posA.y,posB.x,posB.y);
    }
}
