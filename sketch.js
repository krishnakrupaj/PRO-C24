const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var bbi,bb2,bb3,paper,ground

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-5,width,10)

	paper = new Paper();
	
	bb1 = new BinBox(625-200,370,200,20);
	bb2 = new BinBox(735-200,332,20,100);
	bb3 = new BinBox(528-200,332,20,100);
	
  Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);	
  background(0);
  console.log(paper.x)

  Engine.update(engine);  

  ground.display();
  paper.display();
  bb1.display();  
  bb2.display();
  bb3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:05,y:-25});
	}
}