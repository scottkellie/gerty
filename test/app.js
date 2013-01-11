var gerty = require('../lib/gerty.js'),
     five = require('johnny-five'),
     dashboard, board, led, button;

dashboard = new gerty.Dashboard(8080);
board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);

//   How it should work:
//   -------------------------------------
//   button = new gerty.Button();

//   button.on("down", function(){
//     console.log("Button clicked!");
//   });


});