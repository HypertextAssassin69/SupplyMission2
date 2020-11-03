var helicopterIMG, helicopterSprite, package,packageIMG;
var packageBody,ground;
var zomb1,zomb2,zomb3,zombImage1,zombImage2,zombImage3,object1,object2;
var backGround,backgroundImage;
var box1,box2,box3,invBox1,invBox2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	zombImage1 = loadImage("zomb2.gif");
	zombImage2 = loadImage("zomb1.gif");
	backgroundImage = loadImage("bg.jpg")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	 
	backGround = createSprite(400,420);
	backGround.addImage(backgroundImage);
	backGround.scale = 4;

	package=createSprite(width/2, 80, 10,10);
	
	package.addImage(packageIMG)
	package.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255);

	box1 = new Box(450,610,20,100);
	invBox1 = createSprite(460,610,20,100);
	invBox1.visible = false;

	box2 = new Box(350,610, 20,100);
	invBox2 = createSprite(340,610,20,100);
    invBox2.visible = false;

	box3 = new Box(400,600, 100,20);
    

	/*box1 = createSprite(500, 590, 20,100);
	box1.shapeColor=color("purple")

	box2 = createSprite(30,5900, 20,100);
	box2.shapeColor=color("purple")
	
	
	box3 = createSprite(400,635, 100,20);
	box3.shapeColor=color("purple")

	box1Body = Bodies.rectangle(500, 550, 20,100);
    World.add(world,box1Body);

	box2Body = Bodies.rectangle(300,550, 20,100);
    World.add(world,box2Body);

	box3Body = Bodies.rectangle(400,550, 200,20);
	World.add(world,box3Body);*/

	zomb1 = createSprite(30,600);
	zomb1.setCollider("rectangle",0,0,50,150)
	zomb1.debug = true;
	zomb1.scale = 0.5;
	zomb1.addImage(zombImage1);
	zomb1.velocityX = 1

	zomb2 = createSprite(770,600,50,50);
	zomb2.scale = 0.3;
	zomb2.addImage(zombImage2);
	zomb2.velocityX= -1
	


	
	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.6});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	 

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  
  box1.display();
  box2.display();
  box3.display();
  package.display();


  drawSprites();
  keyPressed();
  zomb1.collide(invBox2)
  zomb2.collide(invBox1)

 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	Matter.Body.setStatic(packageBody, false);
	   
	
  }
}
/*function collide(object1,object2){
if (object1.x - object2.x< object2.width/2 + object1.width/2&&
    object2.x - object1.x< object2.width/2 + object1.width/2&&
    object1.y - object2.y< object2.height/2 + object1.height/2&&
    object2.y - object1.y< object2.height/2 + object1.height/2) {

object1.velocityX = 0
object2.velocityX = 0




	}
}*/