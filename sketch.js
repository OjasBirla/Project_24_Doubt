const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	paper = new Paper();
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  ground.display();
  paper.display();
 
}