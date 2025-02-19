class LevelNumberGameObject extends GameObject {

  constructor(name) {
    super(name)
  }
  start() {
    
  }
  update() {

  }
  draw() {
    ctx.fillStyle = "black"
    ctx.font = "30px Times New Roman"
    ctx.fillText("Level: 1", 0, 20)
  }
}