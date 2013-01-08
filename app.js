var express = require('express'),
        app = express(),
     server = require('http').createServer(app),
         io = require('socket.io').listen(server),
       five = require('johnny-five'),
       board , led;

server.listen(8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);

  io.sockets.on('connection', function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  }); 
});