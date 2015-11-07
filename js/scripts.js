$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput = $("input#date").val();
    var start_timeInput = $("input#start_time").val();
    var end_timeInput = $("input#end_time").val();

    $(".name").text(nameInput);
    $(".date").text(dateInput);
    $(".start_time").text(start_timeInput);
    $(".end_time").text(end_timeInput);

    $("#schedule").show();

    event.preventDefault();
  });
});
