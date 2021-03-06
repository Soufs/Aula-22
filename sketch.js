const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo;
var solo;
var bola;

function setup() {
  var canvas = createCanvas(400, 400);

  mecanismo = Engine.create();
  mundo = mecanismo.world;

  var solo_opcao ={
    isStatic: true
  }

  var bola_opcao ={
    restitution: 0.8
  }

  solo = Bodies.rectangle(200,390,200,20, solo_opcao);
  World.add(mundo,solo);
  
  bola = Bodies.circle(200,100,20, bola_opcao);
  World.add(mundo,bola);

  console.log(solo);
  console.log(solo.position.x);
  console.log(solo.position.y);
}
function draw(){
background(0);

Engine.update(mecanismo);

rectMode(CENTER);
rect(solo.position.x,solo.position.y,400,20);

ellipseMode(RADIUS);
ellipse(bola.position.x,bola.position.y,20,20);

}