$(function() {
  var socket = io();
  var username;
  $('.pages').addClass('border-radius');

  $(".name-form").submit(function(e) {
    e.preventDefault();
    // console.log($(".usernameInput").val());
    username = $(".usernameInput").val().trim();
    $('.login').hide();
    $('.pages').removeClass('border-radius');
    $('.message-area').addClass('border-radius');
    $('.message-area').show();
    $('.chat-container').show();
    $("#someone-entered").fadeOut("slow");
  });

  $('#form').submit(function(event) {
    event.preventDefault();
    var userAndMessage = {'chatMessage': $('#m').val(), 'username': username};
    socket.emit('userAndMessage', userAndMessage);
    $('#m').val("");
  });

  socket.on('data', function (frogs) { // use jquery instead of raw html pass message to .text
    console.log(frogs);
    // $("#messages").append('<li><span class="color">'+frogs.username+": </span>"+frogs.chatMessage+'</li>');
    // $("#messages").append($("li").text(frogs.username, ": ", frogs.chatMessage));
    $("ul").append($("<li>").text(frogs.username+": "+frogs.chatMessage));
    $(function() {
      var scroll = $('#scroll');
      var height = scroll[0].scrollHeight;
      scroll.scrollTop(height);
    });
  });

  // var element = $("#chat")[0];
  // element.scrollTop = element.scrollHeight;

});

// satiler angular specific