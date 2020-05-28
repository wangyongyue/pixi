    let role,cat,amonster;
    function setupRoles() {
        

      cat = new Role(100,100);
      role = new Role(400,100);

      amonster = new Monster(100,400);

      app.ticker.add(delta => gameLoop(delta));

    }
    
    function gameLoop(delta){
       

          
          role.play()
          // role.state(amonster)
          role.state(cat)

    }
    
    
   
    
//从精灵图中获取精灵
function setupLead() {
    //Create the `tileset` sprite from the texture
    let texture = TextureCache["images/lead.png"];
    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`)
    let rectangle = new Rectangle(0, 0, 70, 70);
    //Tell the texture to use that rectangular section
    texture.frame = rectangle;
    //Create the sprite from the texture
    let rocket = new Sprite(texture);
    //Position the rocket sprite on the canvas
    rocket.x = 0;
    rocket.y = 0;
    //Add the rocket to the stage
    app.stage.addChild(rocket);
    //Render the stage   
    // renderer.render(stage);
  }
  