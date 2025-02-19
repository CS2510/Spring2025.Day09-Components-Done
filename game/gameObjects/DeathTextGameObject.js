class DeathTextGameObject extends GameObject{

  start(){

  }

  update(){

  }
  
  draw(){
    ctx.fillStyle = "red"
      ctx.font = "30px Times New Roman"
      ctx.fillText("You are dead.", 0, 20)

  }
}