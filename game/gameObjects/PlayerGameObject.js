class PlayerGameObject extends GameObject {
  
  constructor(name) {
    super(name)
    this.transform.x = 125
    this.transform.y = 90
    this.transform.r = 50
  }

  start() {
    
    this.addComponent(new Circle("yellow", "purple", 5))
    this.addComponent(new KeyboardMovement(50))
    this.addComponent(new PlayerConstraints())

    super.start()
  }
 
}