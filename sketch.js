var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground_img, paper_img, dustbin_img;

function preload(){	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	paper = new Paper(200, 450, 40);
	 dustbin = new Dustbin(1200, 650);
	 ground = new Ground(width/2, 700, width, 20);
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(255);
	//engine.update();
	paper.display();
	dustbin.display();
	ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}
}