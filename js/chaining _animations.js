//delay() function (easier to use with animations)

$(function () {
  $(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();
});

//callback function (more usable with other than animation... do something aret animation is finnished)

$(function () {
  $(".red-box1").fadeTo(3000, 0, function () {
    $(".green-box1").animate(
      {
        marginLeft: "+=100px",
      },
      2000,
      function () {
        $(".blue-box1").fadeTo(1000, 0.3);
      }
    );
  });
});

$(function () {
  $(".red-box2").fadeTo(1000, 0.2);
  $(".green-box2").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box2").delay(2000).fadeTo(1000, 0.7);
});
//lightbox
$(function () {
  $(".lightbox").delay(1000).fadeIn(1000);
});
