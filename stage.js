   let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }
    PIXI.utils.sayHello(type)
    //Aliases
    let Application = PIXI.Application,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite,
        AnimatedSprite = PIXI.extras.AnimatedSprite
        Text = PIXI.Text,
        TextStyle = PIXI.TextStyle;


    //Create a Pixi Application
    let app = new Application({
        width: 500,
        height: 500,                       
        antialias: true,
        transparent: false,
        resolution: 1
      }
    );
    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);
    //load an image and run the `setup` function when it's done
    loader
      .add("images/role.json")
      .add("images/a.json")
      .on("progress", loadProgressHandler)
      .load(setup);
    // loader.load(setupText)

    //This `setup` function will run when the image has loaded
    function loadProgressHandler() {
      console.log("loading");
    }

    function setup() {

        setupScene()
        setupRoles()
        setupKeybord()

    }

    