$(document).ready(function() {
  console.log('dom has loaded')
});

$('.new-tweet textarea').on('keypress', function()  {
  console.log(this.textLength)});



// document.getElementsByTagName('textarea').text.textLength