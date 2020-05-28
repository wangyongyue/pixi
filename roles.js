function Role(x,y){

        // this.sprite = new Sprite(resources["images/ren.png"].texture)

        this.vx = 0
        this.vy = 0

        // this.con = new  Container()

        this.left = new Sprite(PIXI.loader.resources["images/a.json"].textures["a3.png"])
        this.left.x = x
        this.left.y = y
        app.stage.addChild(this.left);


        this.right = new Sprite(PIXI.loader.resources["images/a.json"].textures["a2.png"])
        this.right.x = x
        this.right.y = y
        this.right.visible = false
        app.stage.addChild(this.right);



        var left1 = resources["images/a.json"].textures["a3.png"]
        var left2 = resources["images/a.json"].textures["a2.png"]
        this.leftRun = new AnimatedSprite([left1,left2]); 
        this.leftRun.animationSpeed = 0.1; 
        // this.leftRun.play(); //开始动画
        this.leftRun.position.set(x,y)
        this.leftRun.visible = false
        app.stage.addChild(this.leftRun);


        var right1 = resources["images/a.json"].textures["a2.png"]
        var right2 = resources["images/a.json"].textures["a3.png"]
        this.rightRun = new AnimatedSprite([right1,right2]); 
        this.rightRun.animationSpeed = 0.1; 
        // this.leftRun.play(); //开始动画
        this.rightRun.position.set(x,y)
        this.rightRun.visible = false
        app.stage.addChild(this.rightRun);

     
        

}
let num = 3
Role.prototype.moveLeft = function(){

    this.left.visible = false
    this.right.visible = false
    this.leftRun.visible = true
    this.rightRun.visible = false
    this.leftRun.play()

    this.vx = -num
    this.vy = 0
 
}
Role.prototype.moveRight = function(){

    this.left.visible = false
    this.right.visible = false
    this.leftRun.visible = false
    this.rightRun.visible = true
    this.rightRun.play()

    this.vx = num
    this.vy = 0
}
Role.prototype.stopLeft = function(){

    this.left.visible = true
    this.right.visible = false
    this.leftRun.visible = false
    this.rightRun.visible = false
    
    this.vx = 0
    this.vy = 0

 
}
Role.prototype.stopRight = function(){

    this.left.visible = false
    this.right.visible = true
    this.leftRun.visible = false
    this.rightRun.visible = false
    
    this.vx = 0
    this.vy = 0
 
}


Role.prototype.play = function(){

    this.left.x += this.vx;
    this.left.y += this.vy;

    this.right.x += this.vx;
    this.right.y += this.vy;

    this.leftRun.x += this.vx;
    this.leftRun.y += this.vy;

    this.rightRun.x += this.vx;
    this.rightRun.y += this.vy;
    


}

Role.prototype.state = function(m1){

    if (hitTestRectangle(this.left,m1.left) || hitTestRectangle(this.leftRun,m1.left)){

        this.vx = 0

    }
    
}

