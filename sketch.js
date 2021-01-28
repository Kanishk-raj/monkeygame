
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   
  monkey=createSprite(50,340,15,15)
monkey.addAnimation("monkeyrunning",monkey_running)
 monkey.scale= .1   
  
  ground=createSprite(200,380,1000,15)
  ground.velocityX=-4
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
 
background("white")
  stroke("white")
  textSize(20)
  
  survivaltime = Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivaltime,150,50)
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  monkey.collide(ground)
 if (keyDown("space")&& monkey.y>=270) {
   monkey.velocityY=-15
     
 }
 monkey.velocityY=monkey.velocityY+0.8 
  
 spawnbanana(); 
  spawnobstacle();
  
drawSprites();  
  
}
function spawnbanana(){
  
 if (frameCount % 80 === 0){ 
 banana = createSprite(400,Math.round(random(120,200)),15,15)
banana.addImage(bananaImage) 
 banana.scale=.1
 banana.velocityX=-7
 banana.lifetime=100
  FoodGroup.add(banana) 
   
 }
  
  
}
function spawnobstacle(){
  
 if (frameCount % 300 === 0){ 
 obstacle = createSprite(400,350,15,15)
obstacle.addImage(obstacleImage)
 obstacle.scale=.1
 obstacle.velocityX=-7
 obstacle.lifetime=100
  obstacleGroup.add(obstacle) 
   
 }
  
  
}




