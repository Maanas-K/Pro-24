
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,stone1,rubber1,iron1;
var ground;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1= new Hammer (400,300,100);
	ground= new Plane (400,550,800,20);
	stone1= new stone (500,320,50,50);
	rubber1= new Rubber(300,40,50);
	iron1= new iron(200,400,60,60);

	sand1=new Sand(200,535,10);
	sand2=new Sand(240,535,10);
	sand3=new Sand(270,535,10);
	sand5=new Sand(110,535,10);
	sand4=new Sand(170,535,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  hammer1.show();
 // hammer1.position.x=Mouse.position.x;
 // hammer1.position.y=Mouse.position.y;
  
  ground.display();
  stone1.display();
  rubber1.display();
  iron1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();



  drawSprites();
 
}



