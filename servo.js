const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

 // Create a new `servos` hardware instance.
  var servos = new five.Servos('P1-32','P1-12');

  // Create a new `animation` instance.
  var animation = new five.Animation(servos);

  // Enqueue an animation segment with options param
  // See Animation example and docs for details
  animation.enqueue({
    cuePoints: [0, 0.25, 0.75, 1],
    keyFrames: [90, { value: 180, easing: "inQuad" }, { value: 0, easing: "outQuad" }, 90],
    duration: 2000
  });

});