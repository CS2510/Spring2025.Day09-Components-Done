class ControllerGameObject extends GameObject {
  constructor(name) {
    super(name)
  }
  start() {
    this.addComponent(new ControllerComponent())
    super.start()
  }
}