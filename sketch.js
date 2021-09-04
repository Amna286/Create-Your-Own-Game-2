var alien, alienImage, asteroid, asteroidImage, comet, cometImage, meteor, meteorImage;
var spaceship, spaceshipImage;
var backgroundImage;
var bg;

function preload() {
  spaceshipImage = loadImage("images/spaceship.png");
  //alienImage = loadImage("alien.png");
  backgroundImage = loadImage("images/background.jpg");
  cometImage = loadImage("images/comet.png");
  meteorImage = loadImage("images/meteor.png");
}

function setup() {
  createCanvas(1200, 700);
  bg = createSprite(600, 300);
  bg.addImage(backgroundImage);
  bg.velocityY = 5;

  spaceship = createSprite(600, 650);
  spaceship.addImage(spaceshipImage);
  spaceship.scale = 0.4;
}

function draw() {
   if(bg.y > 400) {
     bg.y = 250;
   }

   spawnMeteors();

  drawSprites();
}

function spawnMeteors() {
  if(frameCount % 80 === 0) {
    meteor = createSprite(Math.round(random(100, 1100)), -50);
    meteor.addImage(meteorImage);
    meteor.velocityY = 3;
    meteor.scale = 0.1;
  }
}