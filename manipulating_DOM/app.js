$(function () {
  // ----------------------------------------------Adding as a child
  //   $("ul ul:first").append("<li>I'm going to be the last item.</li>");
  //   //append() adds new element as a last child
  //     $("<li>I'm going to be the last item (second) </li>").appendTo(
  //       $("ul ul:last")
  //     );
  //   //Can use the prepend()
  //   $("ul ul:first").prepend("<li>I'm going to be the first item.</li>");
  //   // prepend() adds new element as a first child
  // ------------------------------------------Adding as a sybling
  //   $(".red-box").after("<div class='red-box'>New sibling after</div>");
  //   $(".blue-box").before("<div class='blue-box'>New sibling before</div>");
  //   //we can use the fuction as well
  //   $(".blue-box").before(function () {
  //     return '<div class="blue-box">New sibling before</div>';
  //   });
  //   $(".blue-box").before($(".red-box"));
  //this is actually move the element and if i had more that one blue one, it will clone the red, and pot it before every blue
});
//--------------------------------------------replacing

$(function () {
  const text = "replaced";
  // $("li").replaceWith(`<li>${text}</li>`);

  // $("li").replaceWith(function () {
  //   return `<li>${text}</li>`;
  // });

  // $(".blue-box,.green-box").replaceWith("<div class='red-box'>More red</div>");

  // or

  $("<div class='red-box'>More red</div>").replaceAll(".blue-box,.green-box");
});
