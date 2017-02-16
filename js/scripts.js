$(document).ready(function() {
  $("form#appointment-info").submit(function(event) {
    event.preventDefault();
//Give inputs variable names
  var name = $("#name").val();
  var description = $("#description").val();
  var date = $("#date").val();
  var time = $("#time").val();
//Output of inputs
  $("span.name").text(name);
  $("span.description").text(description);
  $("span.date").text(date);
  $("span.time").text(time);
//Hide form and show details of appointment
  $("#details").show();
  $("form#appointment-info").hide();
  $("h1").hide();

  });
});
