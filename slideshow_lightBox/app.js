//-----------------------------------------gallery
$(function () {
  const galleryItems = $(".gallery").find("img");
  galleryItems.css("width", "32%").css("opacity", "0.7");
  galleryItems.mouseenter(function () {
    $(this).stop().fadeTo(500, 1);
  });
  galleryItems.mouseleave(function () {
    $(this).stop().fadeTo(500, 0.7);
  });
  galleryItems.click(function () {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).fadeIn(1000);
  });
  $(".lightbox").on("click", function () {
    $(this).stop().fadeOut();
  });
  $("html").on("keydown", event, function () {
    $(".lightbox").stop().fadeOut();
    console.log(event.which);
  });
});
