

$(function() {
  

  $("#contactForm-btn").on("click", function(event){
    //$("#contactForm").fadeOut(100);
    event.preventDefault();
    
    var name=$("#entry\\.1147727922").val().trim();
    var email=$("#entry\\.1268845243").val().trim();
    var message=$("#entry\\.940595447").val().trim();

    if(name&&email&&message){
      $("#btnSubmit").attr("disabled", false);
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#success > .alert-success')
          .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
          .append('</div>');


      $("#contactForm").submit();
      $('#contactForm').trigger("reset");
    } else {
      $('#success').html("<div class='alert alert-danger'>");
      $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
      $('#success > .alert-danger').append("<strong>Name, Email, and Message are required.  Please fill in missing info.");
      $('#success > .alert-danger').append('</div>');
    }


    
  });

  

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
  $('#success').html('');
});
