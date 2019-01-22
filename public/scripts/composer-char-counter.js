$(document).ready(function() {
  console.log('dom has loaded')
});

$('.new-tweet textarea').on('keypress', function()  {
  // console.log(this.textLength)
  let charsLeft = 139;
  console.log(charsLeft -= $(this).val().length)



});



// document.getElementsByTagName('textarea').text.textLength