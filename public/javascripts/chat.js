$(function() {
  var socket = io();
  var username;

  $(".name-form").submit(function(e) {
    e.preventDefault();
    // console.log($(".usernameInput").val());
    username = $(".usernameInput").val().trim();
    $('.login').hide();
    $('.container').show();
  });

  $("#someone-entered").fadeOut("slow");
  console.log("someone entered the chat room!");

  $('#form').submit(function(event) {
    event.preventDefault();
    var userAndMessage = {'chatMessage': $('#m').val(), 'username': username};
    socket.emit('userAndMessage', userAndMessage);
    $('#m').val("");
  });

  socket.on('data', function (frogs) {
    $("#messages").append('<li>'+frogs+'</li>');
  });


});

// satiler angular specific