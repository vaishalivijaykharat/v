var c,c1,c2,c3,c4;
var m,m1,m2,m3,m4;
var g1;
var p;
function preload() {
    //load the images here
c1=loadAnimation("images/cat1.png");
c2=loadAnimation("images/cat2.png");
c3=loadAnimation("images/cat3.png");
c4=loadAnimation("images/cat4.png");

m1=loadAnimation("images/mouse1.png");
m2=loadAnimation("images/mouse2.png");
m3=loadAnimation("images/mouse3.png");
m4=loadAnimation("images/mouse4.png");

g1=loadImage("images/garden.png");
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
c=createSprite(900,720,70,70);
c.addAnimation("cat1",c1);
c.scale=0.1;
m=createSprite(50,720,50,50);
m.addAnimation("mouse1",m1);
m.scale=0.1;
}

function draw() {
background(g1);
    //Write condition here to  if tom and jerry collide
if(c.isTouching(m)){
    c.velocity=0;
    c.addAnimation("cat4",c4);
    c.changeAnimation("cat4");   
   m.addAnimation("mouse4",m4);
m.changeAnimation("mouse4")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
c.velocityX=-5;
c.addAnimation("cat3",c2);
c.changeAnimation("cat3",c3);
m.addAnimation("mouse3",m3);
m.changeAnimation("mouse3");
}

}
