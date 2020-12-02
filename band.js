class Band{
constructor (body,point){
    var options = {
        bodyA: body,
        pointB:point,
        stiffness: 0.04,
        length: 10
}
this.pointB=point;
this.band = Constraint.create(options);
World.add(world,this.band);
}

fly(){
    this.band.bodyA=null;
}
display(){
    if(this.band.bodyA!==null){

    var pointA = this.band.bodyA.position;
    var pointB = this.pointB
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}