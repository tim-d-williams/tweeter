$(document).ready(function() {
  console.log('dom has loaded')


  $('.new-tweet textarea').on('keyup', function()  {
    let tweetLength = $(this).val().length
    // target counter
    $(this).siblings('.counter').text(140 - tweetLength)

  if (tweetLength > 140) {
    $(this).siblings('.counter').css({color: 'red'})
  }

})

  $('.tweet').hover(
    function () {
    $(this).css( { opacity: 1 });
    },
      function () {
  $(this).css( { opacity: .5 });
  })

});
