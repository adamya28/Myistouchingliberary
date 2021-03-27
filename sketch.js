var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1 = createSprite(400,200,50,80);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  


 if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";



}
else if(istouching(movingRect,fixedRect1)){

  movingRect.shapeColor="blue";
  fixedRect1.shapeColor="blue";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
fixedRect1.shapeColor="green";

 } 

  drawSprites();
}
