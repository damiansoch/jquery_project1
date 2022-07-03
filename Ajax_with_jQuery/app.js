$(function () {
  // $.get(), $.post(), $.ajax(), $getJSON()
  //$.load() - getting file from your server

  $("#code").load("./app.js");

  $("#code").load("./app.js", function (response, status) {
    if (status == "error") {
      alert(status);
    }
    console.log(response);
  });
  //getting images from flickr
  const flickrApiUrl =
    "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    //options from (https://www.flickr.com/services/feeds/docs/photos_public/)
    tags: "sun,beautyfull,beach",
    tagmode: "all",
    format: "json",
  })
    .done(function (data) {
      //success
      console.log(data);
      $.each(data.items, function (index, item) {
        console.log(item.media.m);
        $("<img>")
          .attr({
            src: item.media.m,
            width: "300px",
            height: "300px",
            objectFit: "cover",
          })
          .appendTo("#code");

        // if you want to get only 10
        if (index == 9) {
          return false;
        }
      });
    })
    .fail(function () {
      //something wrong
      alert("Ajax call failed.");
    }); //event handler when the call was sucesfully finnished
});
