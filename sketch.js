var R1;
var R2;

function setup(){
createCanvas(1000,800);
R1=createSprite(600,400,50,80);
R1.shapeColor="green";
R2=createSprite(400,200,80,30);
R2.shapeColor="yellow";
}

function draw(){
background(0,0,0);
R2.x=World.mouseX;
R2.y=World.mouseY;

if (R1.x-R2.x <R1.width/2 + R2.width/2 || R2.x-R1.x <R1.width/2 + R2.width/2 ||
R1.y-R2.y <R1.height/2 + R2.height/2 || R2.x-R1.x <R1.height/2 + R2.height/2  ){

R1.shapeColor="red";
R2.shapeColor="red";
}
drawSprites();
}