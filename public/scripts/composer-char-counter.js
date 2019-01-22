$(document).ready(function() {
  console.log('dom has loaded')


  $('.new-tweet textarea').on('keyup', function()  {
    let tweetLength = $(this).val().length
    // target counter
    $(this).siblings('.counter').text(140 - tweetLength)
  })



});

