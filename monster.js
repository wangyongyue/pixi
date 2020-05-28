
function Monster(x,y){

    this.sprite = new Sprite(resources["images/a.json"].textures["a1.png"])
    this.sprite.x = x
    this.sprite.y = y
    this.vx = 0
    this.vy = 0
    // this.sprite.scale.set(.3,.3)
    app.stage.addChild(this.sprite);


}




