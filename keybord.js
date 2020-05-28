
function setupKeybord(){
  //Capture the keyboard arrow keys
  
  let left = keyboard(65),
      up = keyboard(87),
      right = keyboard(68),
      down = keyboard(83);
  left.press = () => {
    role.moveLeft()
  };
  left.release = () => {
    
    if (!right.isDown) {
      role.stopLeft()
    }
    
    
  };
  //Up
  up.press = () => {
      
  };
  up.release = () => {
    // if (!down.isDown && role.vx === 0) {
    //   role.vy = 0;
    // }
  };
  //Right
  right.press = () => {
    role.moveRight()
  };
  right.release = () => {
    if (!left.isDown) {
      role.stopRight()
    }
  };
  //Down
  down.press = () => {
      // role.vy = num;
      // role.vx = 0;
  };
  down.release = () => {
    // if (!up.isDown && role.vx === 0) {
    //   role.vy = 0;
    // }
  };
}
//keyboard函数
function keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }
  