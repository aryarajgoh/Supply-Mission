
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var box1;
var ground;
var box2;
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world=engine.world;
	box1=new Box(100,100,30,50);
	ground=new Ground(400,600,800,100);
	box2=new Box(90,200,30,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
}

