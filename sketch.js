
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload(){
	//ball1 = loadImage('sprites/paper.png');
	boxImage = loadImage('sprites/dustbingreen.png');
}	




function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(100, 200)
	ground = new Ground(200,390,1600,20);
	box = Bodies.rectangle(650, 370, 100, 15, {isStatic:true});
	World.add(world, box)
	// boxleft = new Box(550, 330, 10,100);
	// boxright = new Box(745, 330,10, 100)
	//ball1 = addImage('sprites/paper.png');

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background('white'); 
  Engine.update(engine);
  ball1.display();
  ground.display();
//   box.display();
  rect(box.position.x, box.position.y, 100, 15);
  imageMode(CENTER);

  image(boxImage, 650, 310, 150, 150)
 
 //drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW ){
	console.log(ball1.body.position);
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:30, y:-22})
}
}


