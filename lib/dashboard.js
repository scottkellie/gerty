var express = require('express'),
        app = express(),
     server = require('http').createServer(app),
         io = require('socket.io').listen(server),
     stylus = require('stylus'),
        nib = require('nib');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

// Dashbaord constructor
function Dashboard(port) {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'))
  app.use(stylus.middleware(
    { src: __dirname + '/public',
      compile: compile
    }
  ));

  // If port isn't specified, it defaults to 8000
  port = port || 8000;

  app.use(express.static(__dirname + '/public'));

  app.get('/', function (req, res) {
    res.render('index');
  });

  server.listen(port);
}

module.exports = Dashboard;