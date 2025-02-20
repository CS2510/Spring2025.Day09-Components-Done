//Game Engine class
class Scene {

  gameObjects = []

  start() {
    for (let gameObject of this.gameObjects) {
      gameObject.start()
    }
  }

  draw() {
    for (let gameObject of this.gameObjects) {
      gameObject.draw()
    }
  }

  update() {
    for (let gameObject of this.gameObjects) {
      gameObject.update()
    }
  }

  addGameObject(gameObject, x = 0, y = 0, r = 1) {
    this.gameObjects.push(gameObject)
    gameObject.transform.x = x
    gameObject.transform.y = y
    gameObject.transform.r = r
  }
  
  findGameObject(name) {
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        return gameObject
      }
    }
    return null
  }

  findGameObjects(name) {
    let toReturn = []
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        toReturn.push(gameObject)
      }
    }
    return toReturn
  }
}