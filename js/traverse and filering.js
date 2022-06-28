//-----------------------traversing
$(function () {
const foundAll = $("#list").find("li");//all the li elements under the #list
// $(foundAll).css("background-color","rgba(180,180,30,.7)")

// $("#list").children("li").css("background-color","rgba(180,180,30,.7)");//only the children, not granchildren:)

// $("#list").parents("div").css("background-color","rgba(180,180,30,.7)");//basically going thrue everything above
// $("#list").parent().css("background-color","rgba(180,180,30,.7)");//just the parent
// $("#list").siblings().css("background-color","rgba(180,180,30,.7)");//same level, but not the element itself
// $("#list").next().css("background-color","rgba(180,180,30,.7)");//1 previous elem
// $(":header").next().css("background-color","rgba(180,180,30,.7)")
// $(":header").next().css("background-color","rgba(180,180,30,.7)")
// $("form").children("input:text").css("background-color","rgba(180,180,30,.7)")
});
//------------------------filtering
$(function(){
    // $("#list").find("li").filter(":even").css("background-color","rgba(180,180,30,.7)")//all beneth

    // $("li").filter(function(index){
    //     return index % 3 === 1
    // }).css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")

    // we can put any function there, and if it returns true, it will select the matching element
    // $("li").first().css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")
    // $("li").last().css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")

    // $("li").eq(1).css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")
    // $("li").eq(-2).css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")
    //we can pass the index here

    $("li").not(":first").css("background-color","rgba(180,180,30,.7)").css("background-color","rgba(180,180,30,.7)")
    //works oposite to filter
})

