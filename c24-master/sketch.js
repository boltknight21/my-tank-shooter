// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var Engine,World;
var tanker;
var canonBall,canonBallImg;
var ground;
var ball1,ball2,ball3;
var shooter;
var angle;
var shooterBall;
var flag =start;
var backgroundImg;

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/
function preload() {
canonBallImg=loadImage("assets/canonBall.png");
backgroundImg=loadImage("assets/bg1.jpg");
}

function setup() {
  // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 var canvas= createCanvas(800,400);
  engine=Engine.create();
  World=engine.World;
  ground= new ground(width/2,height-8,width,35);

  ball1= new ball(400,55,10);
  ball2= new ball(450,100,10);
  ball3= new ball(500,200,10);
  ball1.shapeColor("black");
  ball2.shapeColor("black");
  ball3.shapeColor("black");
  
  canonBall= new canonBall(20,20);
   shooterBall= new shooterBall(canonBall.body,{x:60,y:height-200})


  }

function draw() {
// Remember to update the Matter Engine and set the background.
background(backgroundImg);
Matter.Engine.update(engine);
ground.display();
ball1.display();
ball2.display();
ball3.display();
canonBall.display();
tanker.display();
shooterBall.display();
if(keyIsDown(upArrow)){
  shooterBall.attach(canonBall.body)
}

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode===DownArrow){
      flag=launch
      shooterBall.shoot()
    }
}