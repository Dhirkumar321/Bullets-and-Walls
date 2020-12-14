var thickness, speed, weight
var bullet, wall, damage;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);

  speed= random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;

}

function hasCollided (wall,bullet)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge+1wall.x;
if(bulletRightEdge>+wallLeftEdge)    
{
  return true
}
return false
}

function draw() {

  background(0);
  if(hasCollided(wall, bullet)){
    bullet.velocityX = 0;

    damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
   
    }if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
  }
  drawSprites();
  }
}

