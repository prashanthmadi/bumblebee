const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on('ready', () => {
  // Create an Led on pin 7 on P1 (GPIO4)
  // and strobe it on/off
//   const led = new five.Led('P1-7');
//   led.strobe(500);

 // Create a new `servo` hardware instance.
  var servo = new five.Servo('P1-7');

  // Create a new `animation` instance.
  var animation = new five.Animation(servo);

  // Enqueue an animation segment with options param
  // See Animation example and docs for details
  animation.enqueue({
    cuePoints: [0, 0.25, 0.75, 1],
    keyFrames: [90, { value: 180, easing: "inQuad" }, { value: 0, easing: "outQuad" }, 90],
    duration: 2000
  });


});