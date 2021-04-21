//Create variables here
var happyDog,dog,foodStock,foodS,database;  

function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage)
  dog.scale=0.35;

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
 background("pink")
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(dogImage1)
 }
  drawSprites();
  //add styles here

}

function writeStock(x) {
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })


}

function readStock(data){
  foodS=data.val()
}


