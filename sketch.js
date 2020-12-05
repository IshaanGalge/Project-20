
var car,wall
var speed ,weight
var deformation






function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90))
  weight=Math.round(random(1500,400))
  car=createSprite(50, 200, 200, 50);
  wall=createSprite(1500 ,200 ,60 ,height/2)
  wall.shapeColor=(80,80,80)
  car.velocityX=speed

}

function draw() {
  background(0);  
  if (car.x-wall.x<car.width/2+wall.width/2&&
      wall.x-car.x<car.width/2+wall.width/2) {
        car.velocityX=0
        deformation=(0.5*weight*speed*speed)/22500
        
        if (deformation<100) {
          car.shapeColor="green"
        }
        if (deformation>100&&deformation<180){
          car.shapeColor="yellow"
        }
        if (deformation>180) {
          car.shapeColor="red"

        }
        
          
      }
  drawSprites();
}