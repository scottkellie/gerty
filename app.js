var express = require('express'),
        app = express(),
     server = require('http').createServer(app),
         io = require('socket.io').listen(server),
     stylus = require('stylus'),
        nib = require('nib'),
       five = require('johnny-five'),
       board , led;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public',
    compile: compile
  }
));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

server.listen(8080);

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(13);

  io.sockets.on('connection', function (socket) {
    socket.on('click', function () {
      led.toggle();
    });
  }); 
});