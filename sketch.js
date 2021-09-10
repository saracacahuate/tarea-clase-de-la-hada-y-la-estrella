var starImg,bgImg;
var star, starBody;
var hada, hadaBody,hadaFly;
var joyMusic;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    hadaFly = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//carga aquí la animación del hada
	joyMusic = loadSound("joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	var object_options = {
		isStatic: true
	}

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    
	hada = createSprite(400,400);
    hada.addAnimation("flying",hadaFly);
    hada.scale = 0.2

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(400 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(keyDown("LEFT_ARROW")){
	  hada.velocityX = -2;
	  joyMusic.play();
  }
  
  if(keyDown("RIGHT_ARROW")){
	  hada.velocityX = 2;
  }

  

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada

  if(star.y > 400 && starBody.position.y > 400){
	Matter.Body.setStatic(starBody,true)
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	
}
