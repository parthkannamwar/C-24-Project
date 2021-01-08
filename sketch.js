
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pb,ground,db1,db2,db3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pb=new Paperball(50,200,20)

	ground=new Ground(400,400,800,20)

	db1=new Dustbin(650,380,200,20);
	db2=new Dustbin(550,340,20,100);
	db3=new Dustbin(750,340,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("up"))
  {
	Body.applyForce(pb.body,pb.body.position,{x:20,y:-25})
  }

  pb.display();
  ground.display();
  db1.display();
  db2.display();
  db3.display();

  drawSprites();
 
}



