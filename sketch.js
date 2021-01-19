
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10 
var tree;
var ground1;
var boy1;
var stone1, cons1;
var gameState = "stuck";
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new Mango(600, 400);
mango2 = new Mango(650, 350);
mango3 = new Mango(700, 250);
mango4 = new Mango(560, 290);
mango5 = new Mango(750, 400);
mango6 = new Mango(800, 350);
mango7 = new Mango(850, 270);
mango8 = new Mango(710, 300);
mango9 = new Mango(890, 400);
mango10 = new Mango(900, 310);


stone1 = new Stone(50, 500, 30, 30);
cons1 = new Cons(stone1.body, {x: 50, y: 500});



ground1 = new Ground(650, 1000, 60);
//boy1 = new Boy(100, 570, 150, 250);


//tree = new Tree(700, 400, 600, 500);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(111, 205, 247);
//tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	ground1.display();

//	boy1.display();
	cons1.display();
	stone1.display();

	detectollision(stone1,mango1);
	detectollision(stone1,mango2);
	detectollision(stone1,mango3);
	detectollision(stone1,mango4);
	detectollision(stone1,mango5);
	detectollision(stone1,mango6);
	detectollision(stone1,mango7);
	detectollision(stone1,mango8);
	detectollision(stone1,mango9);
	detectollision(stone1,mango10);
   
	//drawSprites();
 
}

function mouseDragged(){
	if (gameState==="stuck"){	
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
	}
}


function mouseReleased(){

	cons1.fly();
    gameState = "launched";

}

function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<= lmango.width/2 + lstone.width/2)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

	console.log("In detectCollision");
  }