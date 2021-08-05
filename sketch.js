var PLAY = 1;
var END = 0;
var gameState = PLAY;

var diamonds,pick,diamondsGroup;
var diamondsImage,pickImage;

var score=0, gameOver, restart;
var score=0;
var gameOver, restart;

function preload(){
pickImage = loadImage("sprite_0 (2).png")
diamondsImage = loadImage("sprite_0.png")
gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
  
pick = createSprite(50,windowHeight-20,20,50);
 pick.addImage("pickaxe",pickImage);

 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImg);
 
 restart = createSprite(300,140);
 restart.addImage(restartImg);
 
 gameOver.scale = 0.5;
 restart.scale = 0.5;

 gameOver.visible = false;
 restart.visible = false;
 
 diamondsGroup = new Group();

}

function draw() {
 
}


function spawnDiamond() {
    
    if (frameCount % 60 === 0) {
      var diamonds = createSprite(windowWidth,windowHeight-80,40,10);
      diamonds.y = Math.round(random(windowHeight-120,windowHeight-80));
      diamonds.addImage(diamondsImage);
      diamonds.velocityX = -3;
      diamonds.lifetime = 600;
      diamonds.depth = pick.depth;
      pick.depth = pick.depth + 1;
      diamondsGroup.add(diamonds);

    }
    
  }

  function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    
    obstaclesGroup.destroyEach();
    
    pick.changeAnimation("running",trex_running);
    score = 0;
    
  }