$(document).ready(function() {
  $("form#appointment-info").submit(function(event) {
    event.preventDefault();

  var name = $("#name").val();
  var description = $("#description").val();
  var date = $("#date").val();
  var time = $("#time").val();

  $("span.name").text(name);
  $("span.description").text(description);
  $("span.date").text(date);
  $("span.time").text(time);

  $("#details").show();
  $("form#appointment-info").hide();
  $("h1").hide();

  });
});
