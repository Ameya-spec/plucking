class Stone{
constructor(x,y,angle){
var options = {
isStatic:true,
restitution:0,
friction:1,
density:1.2
}
this.body = Bodies.circle (x,y,30,options);
this.radius=15;

World.add(world,this.body);
this.image = loadImage("sprites/stone.png");
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("grey");
   
    imageMode(CENTER);
    image(this.image,0,0, 40, 40);
    pop();
  
}
}