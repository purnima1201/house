const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var triangle;
var roof;


var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    //box2 = new Box(810,160,70,70);
    box5 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log1 = new Log(810,150,300,PI);
    //roof = createTriangle(180,180,180,180)
    //log2 = new Log(760,120,212,(-5*PI)/4);
    //log3 = new Log(810,120,212,(5*PI)/4);
    //log4 = new Log(870,120,150,-PI/7);
    triangle1 =  new Triangle(825,120,100);

    
    
    ground = new Ground(600,390,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    //box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    //roof.display();
    //log2.display();
    //log3.display();
    triangle1.display();
    //log4.display();
    
    ground.display();
}
