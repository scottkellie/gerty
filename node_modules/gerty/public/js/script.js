$(document).ready(function() {
  var socket = io.connect('http://localhost');
  $('#button').click(function(e){
    socket.emit('click');
    e.preventDefault();
  });
});	