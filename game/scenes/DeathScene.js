class DeathScene extends Scene {

  start() {
    this.gameObjects.push(new DeathController())
    this.gameObjects.push(new DeathTextGameObject())

    for (let gameObject of this.gameObjects) {
      gameObject.start()
    }


  }
  update() {for (let gameObject of this.gameObjects) {
      gameObject.update()
    }
  }
  
  draw() {

    //Engine drawing code
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    for (let gameObject of this.gameObjects) {
      gameObject.draw()
    }
  }
}