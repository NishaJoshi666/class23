const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,Ground,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    Ground = new ground(200,370,400,20);
}

function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    Ground.display();
   box2.display();
}