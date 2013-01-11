var gerty = require('./node_modules/gerty/gerty.js'),
     five = require('johnny-five'),
     board , led, button;

gerty.createDashboard();

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);

/* Here's how it should work:
-------------------------------------

  button = new gerty.Button();

  button.on("down", function(){
    led.toggle();
  });

-------------------------------------
*/

  led.on();

  this.wait( 3000, function() {
    led.off();
  });

});