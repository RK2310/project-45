var backgroundImage
//PC
var player, playerImage
//NPC
var zombie, zombieImage
//to fire
var bullet
//life count
var heart, brokenHeart

var gameState=0

//collect items
var bullets, bulletsImage, bomb, bombImage

function preload(){
    backgroundImage=loadImage("assets/background.png")

    playerImage=loadImage("assets/Player.png")

    zombieImage=loadImage("assets/Zombie.png")

    heart=loadImage("assets/Heart.png")

    brokenHeart=loadImage("assets/Heartbroken.png")

    bulletsImage=loadImage("assets/ammo.png")

    bombImage=loadImage("assets/dynamite.png")
}

function setup(){
    //To size canvas as window dimensions
    createCanvas(windowWidth, windowHeight)

    player=createSprite(width/2, height/2)
    player.addImage(playerImage)
    player.scale=0.25

    player.visible=false
}

function draw(){
    //loading image as background
    background(backgroundImage)

    //place holder text
    if(gameState===0){
        textSize(30)
        text("press space to begin", width/2, height/2)

        if(keyDown("space")){
            gameState=1
        }
    }

    if(gameState===1){
        //show player
        player.visible=true

        //movement of the players
        if(keyDown("w")){
        player.y-=5
    }

        if(keyDown("s")){
        player.y+=5
    }

        if(keyDown("a")){
        player.x-=5
    }

        if(keyDown("d")){
        player.x+=5
    }

    //spawning zombies
    spawnZombies()
    }

    drawSprites()
}

function spawnZombies(){
//to maintain frequency
    if(frameCount % 100 === 0){
        zombie=createSprite(random.choice(0,width),Math.round(random(0, height)))
        zombie.addImage(zombieImage)
        zombie.scale=0.25
        
        if(zombie.position.x<=width/2){
            zombie.velocityX +=2
        }  
        else{
            zombie.velocityX -=2
        }
    }
}