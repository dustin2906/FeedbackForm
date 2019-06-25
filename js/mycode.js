$(document).ready(function() {
  initializeForm(); //when page in loaded, inite the form
  $("#new").hide();
  $("#btnSubmit").click(function() {
        formHandler();
        //calling a function called formHandler()

  });
  $("#new").click(function() {
    initializeForm();
  });
});

function formHandler() {
  //check the fields and if they are correct, send further
  var error=false;
  var email=$("#email").val();
  var feedback=$("#feedback").val();
  var maillist=$("#maillist").val();
  if(email.length<6) {
    elert('Email is not correctly formed');
    $("#email").val('');
    $("#email").css("background-color","yellow");
    $("#email").focus();
    error=true;
  }
  //everything is fine, send the form etc
  if(!error) {
      
      //sending the form is missing here as purpose!
      $("#feedbackForm").fadeOut(1000);
      $("#info").html('<p>Your feedback was sent.</p>');
      $("#new").show();
}
};


function initializeForm() {
  //clears all the fields etc
  $("#feedbackForm").fadeIn(1000);
  $("#email").val('');
  $("#feedback").val('');
  $("#maillist").prop("checked",false);
  $("#info").html('<p> Fill in the form!</p>');
  $("#new").hide();
}