//Game-specific classes
class MainScene extends Scene {
    

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 125, 90, 50)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 200, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 250, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 300, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 350, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 400, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 450, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 500, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"))
        this.addGameObject(new LevelNumberGameObject("Level Number Game Object"))
        this.addGameObject(new ControllerGameObject("Controller Game Object"))

        for(let gameObject of this.gameObjects){
            gameObject.start()
        }
    }

    update() {

        for(let gameObject of this.gameObjects){
            gameObject.update()
        }


    }
    draw() {

        //Engine drawing code
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        for(let gameObject of this.gameObjects){
            gameObject.draw()
        }

    }
}