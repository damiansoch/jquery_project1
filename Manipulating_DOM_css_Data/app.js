//-----------------------------------------gallery
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

$(function () {
  //-----------------------------------changing CSS
  // $(".gallery").css("display", "none"); //.hide()

  var redBox = $(".red-box");
  console.log(redBox.css("width")); //with px
  console.log(redBox.width()); //only numbers

  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "20px");

  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);
  console.log(properties["font-size"]);
});
//-----------------------------------------css classes
$(function () {
  $("a").addClass("fancy-link");
  $("p:last").addClass("large emphasize"); //multiple clases, jus space between

  $("li li").addClass(function (index) {
    // ("li li") - li child of li
    $(this).addClass(`item-${index}`);
  });

  $("div").addClass(function (index, currentClass) {
    if (currentClass === "dummy") {
      return "red-box";
    }
  });
  //----remove class

  $(".red-box").removeClass("red-box").addClass("blue-box");
  $(".dummy").removeClass().addClass("green-box");
});
//-------------------------------------------------changing data on element
$(function () {
  var gallery = $(".gallery");
  var images = [
    {
      name: "picture 1",
      file: "img/laptop-mobile_small.jpg",
    },
    {
      name: "picture 2",
      file: "img/laptop-mobile_small.jpg",
    },
    {
      name: "picture 3",
      file: "img/people-office-group-team_small.jpg",
    },
  ];

  gallery.data("availableImages", images);
  gallery.data("name", "The awesome gallery"); // you can remove this data with removeData()
  console.log(gallery.data("availableImages"));
  const availableImages = gallery.data("availableImages");
  console.log(availableImages[0].file);

  //--------------------------------data attributed html5
  const pTag = $("#pWithDataAttr");
  console.log(pTag.data("mydata"));
});
