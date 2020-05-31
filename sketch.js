var car,wall
var speed,weight



function setup() {

  
  createCanvas(1600,400);
 
 speed=Math.round(random(55,90))
 weight=Math.round(random(400,1500))


  car = createSprite(50,200,50,50)
  car.shapeColor = "black"
  wall = createSprite(1000,200,60,300)
  car.velocityX=speed
  wall.shapeColor = "grey"
}

function draw() {
  background(0); 
  
  if(wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX=0
  var def=0.5*weight*speed*speed/22509
  console.log(def)
  if(def > 180){
  car.shapeColor = color(255,0,0)
  }

  if(def < 180 && def > 100){
    car.shapeColor = color(230,230,0)
    }

    if(def < 100){
      car.shapeColor = color(0,255,0)
      }






  }


  drawSprites();
}