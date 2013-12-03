$(document).ready(function() {
  $("#sort").on("click", function(e) {
    e.preventDefault();
    var numString = $("input[name='numbers']").val();
    $("#quiz").remove();
    var numArray = numString.split(", ");
    numArray.sort(function(a, b) { return a-b });
    var numJoin = numArray.join(", ")
    $("body").append(numJoin);
  });
  $("#random").on("click", function(e) {
    e.preventDefault();
    var numAmount = $("input[name='numbers']").val();
    $.ajax({
      type: "get",
      url: "/numbers/" + numAmount,
      dataType: "json"
    }).done(function(response) {
      $("input[name='numbers']").val(response.numbers);
    })
  });
})
