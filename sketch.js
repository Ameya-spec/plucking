
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var girl;
var girlImage;
var mango;
var tree;
var treeImage;

var stone;
var band;
function preload(){

girlImage = loadImage("sprites/boy.png")	
treeImage=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
  world = engine.world;
  
 girl = createSprite(100,680,25,100);
 girl.addImage("girlImage",girlImage);
 girl.scale = 0.1;
 tree = createSprite(550,275,50,150);
 tree.addImage("treeImage",treeImage);
 tree.scale = 0.4;
	//Create the Bodies Here.
mango = new Mango (200,200);
mango2 = new Mango (600,600);
stone = new Stone (180,400);
band = new Band(girl.body,{x:200,y:360});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  mango.display();
  mango2.display();
 
  stone.display();
  band.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  band.fly();
}



