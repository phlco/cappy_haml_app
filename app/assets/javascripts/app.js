$(document).ready(function() {
  $("button").on("click", function(e) {
    e.preventDefault();
    numString = $("input[name='numbers']").val()
    $("#quiz").remove();
    numArray = numString.split(", ");
    numArray.sort(function(a,b) { return a-b});
    numJoin = numArray.join(", ")
    $("body").append(numJoin);
  });
})
