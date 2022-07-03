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
// click()
$(function () {
  $("#btn-click").click(function (event) {
    console.log(event);
  });
  $(function () {
    $(".red-box").click(function () {
      $(this).fadeTo(500, 0.5);
    });
  });
  // hover
  $("#btn-hover").hover(function () {});

  // $(".green-box").hover(function () {
  //   $(this).replaceWith(function () {
  //     return "<div class='green-box'>Hovered</div>";
  //   });
  // });

  $(".green-box").hover(
    function () {
      $(this).text("hovering");
    },
    function () {
      $(this).text("not hovering");
    }
  );

  var blueBox = $(".blue-box");

  blueBox.mouseenter(function () {
    $(this).stop().fadeTo(500, 0.7);
  });
  blueBox.mouseleave(function () {
    $(this).stop().fadeTo(500, 1);
  });

  $("html").on("click keydown", function () {
    console.log("Event happened");
  });
});
// slideshow on click
$(function () {
  const galleryImage = $(".galleryOnClick").find("img").first();
  var images = [
    "img/laptop-mobile_small.jpg",
    "img/laptop-on-table_small.jpg",
    "img/people-office-group-team_small.jpg",
  ];
  const switchToNextImage = () => {
    galleryImage.fadeOut(400, fadeIn);
  };
  const fadeIn = () => {
    i = (i + 1) % images.length;
    galleryImage.attr("src", images[i]);
    galleryImage.fadeIn();
  };

  var i = 0;
  galleryImage.on("click", switchToNextImage);

  // dynamically added elements event hadler fix

  // $("p").click(function () {
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>Dynamically added 'p'</p>");

  //not like this
  //but like this
  //delegated events

  $("#content").on("click", "p", function () {
    // selecting or the childs on the content
    $(this).slideUp();
    // in this case 'this' refets to 'p' not to '#content'
  });
  $("#content").append("<p>Dynamically added 'p'</p>");

  //--------------- excercise
  $("body").on("mouseenter", "li", function () {
    $(this).css("color", "red");
  });
  $("body").on("mouseleave", "li", function () {
    $(this).css("color", "black");
  });
});
//passing additional data to the events
$(function () {
  $("#btn-click").click(
    {
      user: "peter",
      domain: "dkms.online",
    },
    function (event) {
      greetUser(event.data);
    }
  );
  const greetUser = (userdata) => {
    const username = userdata.user || "Anonymous";
    const domain = userdata.domain || "Unknown";
    alert(`Hello ${username} with domain ${domain}`);
  };
});
//keydown
$(function () {
  $("html").keydown(function (event) {
    console.log(event.which);
    var keyPressed = event.which;
    if (keyPressed == 39) {
      $(".blue-box").stop().animate({ marginLeft: "+=20px" });
    }
  });
});
