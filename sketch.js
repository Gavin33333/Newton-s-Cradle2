const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1, rope2, rope3, rope4, rope5

function setup(){
    createCanvas(innerWidth/2,innerHeight/2);
engine=Engine.create();
World.engine.world;
bobDiameter=40
bobObject1 = new Pendulum(175,500,100);
bobObject2 = new Pendulum(275,500,100);
bobObject3 = new Pendulum(375,500,100);
bobObject4 = new Pendulum(475,500,100);
bobObject5 = new Pendulum(575,500,100);
rope1 = new Sling(bobObject1.body, roof.body, -bobDiameter*2,0)
rope2 = new Sling(bobObject2.body, roof.body, -bobDiameter*2,0)
rope3 = new Sling(bobObject3.body, roof.body, -bobDiameter*2,0)
rope4 = new Sling(bobObject4.body, roof.body, -bobDiameter*2,0)
rope5 = new Sling(bobObject5.body, roof.body, -bobDiameter*2,0)

Engine.run(engine);

}

function draw(){
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display(); 
    rope5.display();
    drawSprites();
}
function mouseDragged(){
   
Matter.Body.setPosition(bobObject1.body, {x: mouseX , y: mouseY});
    }
