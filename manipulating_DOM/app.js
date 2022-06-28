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

  // $("<div class='red-box'>More red</div>").replaceAll(".blue-box,.green-box");
});

//------------------------------------------removing

$(function () {
  // $("li").remove();
  //remove all children of form, but not imput:text,br
  // $("form").children().not("input:text,br").remove();
  //using remove will remove all event handlers as well so if you want to store it and then attach somewere alse they wont work thats why you can use detach
  // var dettachecItemList = $("li").detach();
  // console.log(dettachecItemList);
  //empty doesnt remove the element, but makes it empty and removes the child elements
  // $(".red-box,.green-box,.blue-box").empty();
});
//-----------------------------------------manipulate atributes and properties

// attr() - attributes (href, title, )
// prop() - properties (for checked, select) - attrr wont work properly
// val() - values (using to check password, or imputs elements when form submitted)
$(function () {
  let specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  specialLink.attr("href", "http://petersommerhoff.com");

  let checBox = $("input:checkbox");
  console.log(checBox.prop("checked"));
  console.log(checBox.attr("checked"));

  let inputValue = $("input:text");
  console.log(inputValue.val());

  let rangeValue = $("input[type ='range']");
  console.log(rangeValue.val());

  //if you are calling feinput:text and there is more of them, its just going to return first, not an array
});
