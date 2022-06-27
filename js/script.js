$(function(){
  $(".red-box").fadeTo(2000, 0.2);
  $(".green-box").fadeTo(1000, 0);
  $(".blue-box").fadeTo(700, 0.8);

  $(".blue-box").fadeToggle(1000);
  $(".blue-box").fadeToggle(1000);//fades back in only to 0.8 - the same it was before the toggle

  $(".red-box1").hide(1000);
  setTimeout(function(){
    $(".red-box1").show(1000);
  },2000)
  // we can call funciton toggle() if we are not sure if the element is shown or hiden
$(".green-box1").slideUp(2000);
$(".green-box1").slideDown(2000);
$("p").hide();
$("p").show(2000);
$(".blue-box1").slideToggle(2000)
}) 