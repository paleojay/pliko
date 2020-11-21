const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions =[]; 
var divisionHeight=300;



function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  division1 = new  Divisions(0,650,10,300);
  division2 = new  Divisions(60,650,10,300);
  division3 = new  Divisions(120,650,10,300);
  division4 = new  Divisions(180,650,10,300);
  division5 = new  Divisions(240,650,10,300);
  division6 = new  Divisions(300,650,10,300);
  division7 = new  Divisions(360,650,10,300);
  division8 = new  Divisions(420,650,10,300);
  division9 = new  Divisions(480,650,10,300);
  ground = new Ground(240,height,480,20);
  plinko1 = new plinko (33,100,30,30);
  plinko2 = new plinko (86,100,30,30);
  plinko3 = new plinko (139,100,30,30);
  plinko4 = new plinko (192,100,30,30);
  plinko5 = new plinko (245,100,30,30);
  plinko6 = new plinko (298,100,30,30);
  plinko7 = new plinko (351,100,30,30);
  plinko8 = new plinko (404,100,30,30);
  plinko9 = new plinko (457,100,30,30);
  plinko10 = new plinko (18,150,30,30);
  plinko11 = new plinko (66,150,30,30);
  plinko12 = new plinko (114,150,30,30);
  plinko13 = new plinko (162,150,30,30);
  plinko14 = new plinko (210,150,30,30);
  plinko15 = new plinko (258,150,30,30);
  plinko16 = new plinko (306,150,30,30);
  plinko17 = new plinko (354,150,30,30);
  plinko18 = new plinko (402,150,30,30);
  plinko19 = new plinko (450,150,30,30);
  plinko20 = new plinko (33,200,30,30);
  plinko21 = new plinko (86,200,30,30);  
  plinko22 = new plinko (139,200,30,30);
  plinko23 = new plinko (192,200,30,30);
  plinko24 = new plinko (245,200,30,30);
  plinko25 = new plinko (298,200,30,30);
  plinko26 = new plinko (351,200,30,30);
  plinko27 = new plinko (404,200,30,30);
  plinko28= new plinko (457,200,30,30);
  plinko29 = new plinko (18,250,30,30);
  plinko30 = new plinko (66,250,30,30);
  plinko31 = new plinko (114,250,30,30);
  plinko32 = new plinko (162,250,30,30);
  plinko33 = new plinko (210,250,30,30);
  plinko34 = new plinko (258,250,30,30);
  plinko35 = new plinko (306,250,30,30);
  plinko36 = new plinko (354,250,30,30);
  plinko37 = new plinko (402,250,30,30);
  plinko38 = new plinko (450,250,30,30);

}

function draw() {
  background(0);  
  Engine.update(engine);
  if (frameCount % 60 === 0) {
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  

  drawSprites();
}