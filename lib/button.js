var Dashboard = require("../lib/dashboard.js")
    events = require("events"),
      util = require("util");

// This doesn't work :(
// -----------------------------
// function Button() {
//   io.sockets.on('connection', function (socket) {
//     socket.on('click', function () {
//       this.emit("down");
//     }); 
//   }); 
// }

util.inherits( Button, events.EventEmitter );

module.exports = Button;