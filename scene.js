function setupScene(){

    let style = new TextStyle({
                    fontFamily: "Arial",
                    fontSize: 36,
                    fill: "white",
                    stroke: '#ff3300',
                    strokeThickness: 4,
                    dropShadow: true,
                    dropShadowColor: "#000000",
                    dropShadowBlur: 4,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowDistance: 6,
                    });

     let message = new Text("Hello Pixi!",style);
     message.width = 100
     message.height = 50
     message.x = 10
     message.y = 10
     app.stage.addChild(message);


}