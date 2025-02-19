class GuardGameObject extends GameObject {

  startY

  constructor(name) {
    super(name)
    this.transform.x = 100
    this.transform.r = 20
  }
  start() {
    this.elapsedTime = 0

    this.addComponent(new Circle("blue", "purple", 5))
    this.addComponent(new GuardMovement())

    super.start()
  }
}