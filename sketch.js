const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    stand = new Ground(600,350,1200,10);
    block1 = new Box(610,300,50,50);
    block2 = new Box(630,300,50,50);
    block3 = new Box(650,300,50,50);
    block4 = new Box(670,300,50,50);
    block5 = new Box(690,300,50,50);
    block6 = new Box(620,280,50,50);
    block7 = new Box(640,280,50,50);
    block8 = new Box(660,280,50,50);
    block9 = new Box(680,280,50,50);
    block10 = new Box(630,250,50,50);
    block11 = new Box(650,250,50,50);
    block12 = new Box(670,250,50,50);
    block13 = new Box(640,230,50,50);
    block14 = new Box(660,230,50,50);
    block15 = new Box(650,210,50,50);
    ball = new Bird(200,200);
    slingshot = new SlingShot(ball.body, {x: 200, y: 100});
    
    
    }

function draw(){
    Engine.update(engine);
    background(255);
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    ball.display();
    slingshot.display();
    

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}
