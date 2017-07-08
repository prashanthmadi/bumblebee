const raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

 // Create a new `servos` hardware instances.
  var servos = new five.Servos('P1-32','P1-33');
  servos.sweep();

});