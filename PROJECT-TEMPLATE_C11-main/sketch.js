var sea
var navio


function preload(){
  shipImg1 = loadanimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png ")
  sea.addImage("sea.png")
  sea.loadImage("sea.png")
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
    



 
}
