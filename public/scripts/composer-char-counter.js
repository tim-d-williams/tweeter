$(document).ready(function() {

  $('.new-tweet textarea').on('keyup', function()  {
    let tweetLength = $(this).val().length
    // target counter
    $(this).siblings('.counter').text(140 - tweetLength)

  if (tweetLength > 140) {
    $(this).siblings('.counter').css({color: 'red'})
  }

})

});
