$(function() {
  var socket = io();

  $('#form').submit(function(event) {
    event.preventDefault();
    socket.emit('chat message', $('#m').val());
    $('#m').val("");

  });

  socket.on('data', function (frogs) {
    $("#messages").append('<li>'+frogs+'</li>');
  });


});