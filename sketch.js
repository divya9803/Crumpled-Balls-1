const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, dustbinBottomSide, dustbinLeftSide, dustbinRightSide, ground;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(200, 350, 15);

	dustbinBottomSide = new Dustbin(1000, 665, 200, 25);
	dustbinRightSide = new Dustbin(1100, 603, 25, 100);
	dustbinLeftSide = new Dustbin(900, 603, 25, 100);

	ground = new Ground(600, 690, 1200, 30);

	Engine.run(engine);
	keyPressed();
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background("black");

  paperObject.display();

  dustbinBottomSide.display();
  dustbinRightSide.display();
  dustbinLeftSide.display();

  ground.display();
  
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 45, y: -45});
	}
}

