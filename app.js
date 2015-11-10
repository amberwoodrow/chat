var express = require('express');
var app = express();
var server = require('http').Server(app); 
var io = require('socket.io')(server); 

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connect', function(socket){
  // console.log("someone entered the chat room!");
  socket.on('chat message', function (data) {
    io.emit('data', data);
  });
});

server.listen(3000, function() {
  console.log('listening on localhost:3000');
});