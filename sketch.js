
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3,dustbin4; 
function setup() {
    createCanvas(900, 680);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 20);
    ground = new Ground(400,677,1000,15);
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)
    //dustbin4 = new Dustbin(170,620,20,100)

    slingshot=new SlingShot(paper1.body,{x:200,y:100});
    Engine.run(engine);
 
}

function draw() {
  
  rectMode(CENTER);
  
  background(20,230,90);
  
  //Engine.update(engine);
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 // dustbin4.display();
  
  slingshot.display();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
     Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 14.4,y: -14.4})
    }
  }

  function mouseDragged(){

Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY}) 
  }

 


  function mouseReleased(){

   slingshot.fly()
    
    }