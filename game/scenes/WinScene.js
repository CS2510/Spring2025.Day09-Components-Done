class WinScene extends Scene {
  //Variables for the win scene
  
  start() {
    this.gameObjects.push(new WinController())
    this.gameObjects.push(new WinTextGameObject())

    for (let gameObject of this.gameObjects) {
      gameObject.start()
    }
  }
  update() {
    for (let gameObject of this.gameObjects) {
      gameObject.update()
    }
  }
  draw() {
    //Engine drawing code
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    for (let gameObject of this.gameObjects) {
      gameObject.draw()
    }

  }
}