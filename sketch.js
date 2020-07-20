var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage, cloud, cloud_image , obstacle1, obstacle2,obstacle3,obstacle4,obstacle5,obstacle6, obstacle,cloudgroup,obstaclegroup ;




function preload(){
  
  //setting animations
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloud_image = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  
  //loading obstacle images
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
 //making groups
  cloudgroup = new Group();
obstaclegroup = new Group();

  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

 


}

function draw() {
  background("azure");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  
  //calling the funtions
  spawnClouds();
  spawnObstacles();
  
  drawSprites();


}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,50,40,10);
    cloud.y = random(20,100);
    cloud.addImage(cloud_image);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 210;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
 
    cloudgroup.add(cloud);
  
  }
  
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch (rand){
      case 1 : obstacle.addImage(obstacle1);
               break;
      
      case 2 : obstacle.addImage(obstacle2);
               break;
      
      case 3 : obstacle.addImage(obstacle3);
               break;  
     
     case 4 : obstacle.addImage(obstacle4);
               break;    
      
     case 5 : obstacle.addImage(obstacle5);
               break;
      
    case 6 : obstacle.addImage(obstacle6);
             break;
    } 
       
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
  
    
    obstaclegroup.add(obstacle);
  
  
  }
}














