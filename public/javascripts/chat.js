$(function() {
  var socket = io();
  var username;

  $(".name-form").submit(function(e) {
    e.preventDefault();
    // console.log($(".usernameInput").val());
    username = $(".usernameInput").val().trim();
    $('.login').hide();
    $('.chat-container').show();
    $("#someone-entered").fadeOut("slow");
  });

  $('#form').submit(function(event) {
    event.preventDefault();
    var userAndMessage = {'chatMessage': $('#m').val(), 'username': username};
    socket.emit('userAndMessage', userAndMessage);
    $('#m').val("");
  });

  socket.on('data', function (frogs) {
    console.log(frogs);
    $("#messages").append('<li><span class="color">'+frogs.username+": </span>"+frogs.chatMessage+'</li>');
  });

  // var element = $("#chat")[0];
  // element.scrollTop = element.scrollHeight;

});

// satiler angular specific