$(document).ready(function() {
  $("body").mousemove(function(e){
    console.log(e.pageX, e.pageY)
    $("body").css('background-position',(e.pageX - 250)+'px '+(e.pageY - 250)+'px');
  });
});