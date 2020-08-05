const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var box1,box2,box3,box4;
var box5,box6,box7;
var backgroundImg,platform;

var divisionHeight;
//arrays
var divisions = []; 
var particles = []; 
var plinkos = []; 


function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    for(var k = 0; k<=width; k = k +80 ){
        divisions.push(new Divisions( k, height-divisionHeight/2,10, divisionHeight))
    }
    /*box1 = new Divisions(10,450,10,350);
    box2 = new Divisions(70,450,10,350);
    box3 = new Divisions(150,450,10,350);
    box4 = new Divisions(230,450,10,350);
    box5 = new Divisions(310,450,10,350);
    box6 = new Divisions(390,450,10,350);
    box7 = new Divisions(470,450,10,350);
    */

}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(2);
  

  /*  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();*/
   
  
    ground.display();

    for(var k = 0; k<=width; k = k +80 ){
        divisions.push(new Divisions( k, height-divisionHeight/2,10, divisionHeight))
    }

}

