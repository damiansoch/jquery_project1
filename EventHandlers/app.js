// slideshow
$(function () {
  const galleryImage = $(".gallery").find("img").first();
  var images = [
    "img/laptop-mobile_small.jpg",
    "img/laptop-on-table_small.jpg",
    "img/people-office-group-team_small.jpg",
  ];

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length; //secuence 0,1,2,0,1,2...

    galleryImage.fadeOut(function () {
      //callback function, when the img compleetly faded out
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
  }, 2000);
});

//-----------------------------------------Event handlers
$(function () {});
