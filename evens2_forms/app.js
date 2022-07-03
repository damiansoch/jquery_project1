$(function () {
  let inputFields = $("input:text,input[type=email],input:password,textarea");
  inputFields.focus(function () {
    $(this).css("box-shadow", "0 0 7px #666");
  });
  inputFields.blur(function () {
    $(this).css("box-shadow", "none");
  });
  $("#name").blur(function () {
    const textLenght = $(this).val().length;
    console.log(textLenght);

    if (textLenght < 3) {
      $(this).css("box-shadow", "0 0 7px red");
    } else {
      $(this).css("box-shadow", "0 0 7px green");
    }
  });
  $("#checkbox").change(function () {
    const isChecked = $(this).is(":checked"); //.prop("checked")
    if (isChecked) {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811"); //add for this but also added the label in ("")
    }
  });
  $("#select").change(function () {
    const isSelected = $(this).find(":selected");

    alert($(isSelected).text());
  });
  //checkin form after submit
  $("#form").submit(function (event) {
    const name = $("#name").val();
    const email = $("#email").val();
    const checkbox = $("#checkbox").is(":checked");
    const message = $("#message").val();
    validateNameField(name, event);
    validateEmail(email, event);
  });
});

// name (i used th jquery validation plugin)
const validateNameField = (name, event) => {
  if (!isValidName(name)) {
    $("#name-feedback").text("Enter 2 char...");
    event.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
};
const isValidName = (name) => {
  return name.length >= 2;
};
//email
const validateEmail = (email, event) => {
  if (!isValidEmail(email)) {
    $("#email-feedback").text("email format, please");
    event.preventDefault();
  } else {
    $("#email-feedback").text("");
  }
};
const isValidEmail = (email) => {
  console.log(email);

  var EmailRegex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  console.log(EmailRegex.test(email));
  return EmailRegex.test(email);
};
