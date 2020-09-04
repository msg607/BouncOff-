var fr,mr;
var r1,r2,r3;

function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor="green";
  fr.velocityX=-3;
  fr.velocityY=4;
  mr = createSprite(200,200,90,90);
  mr.shapeColor="green";
  mr.velocityX=3;
  mr.velocityY=-4;

  r1 = createSprite(100,100,50,50);
  r1.shapeColor="green";
  r2 = createSprite(200,100,50,50);
  r2.shapeColor="green";
  r3 = createSprite(300,100,50,50);
  r3.shapeColor="green";

  fr.debug=true;
  mr.debug=true;



}

function draw() {
  background(255,255,255);  
  
  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if(isTouching(mr,r1)){
     mr.shapeColor="yellow";
     r1.shapeColor="yellow";
  }
 else {
   mr.shapeColor="blue";
   r1.shapeColor="blue";
 }

bounceOff(mr,fr);


  drawSprites();

}





