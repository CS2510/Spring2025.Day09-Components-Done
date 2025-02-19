class WinTextGameObject extends GameObject{

  start(){

  }
  
  update(){

  }
  draw(){
    ctx.fillStyle = "darkgreen"
    ctx.font = "30px Times New Roman"
    ctx.fillText("You beat the game. Horray!", 0, 20)
  }
}