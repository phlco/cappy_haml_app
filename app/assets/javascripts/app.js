$(document).ready(function(){

  $('.quiz-button').on('click',function(){

    // get numbers from text field
    var numArray = [];
    var strArray = $("input[name='numbers']").val().split(",");
    for (var i = 0; i < strArray.length; i++) {
      numArray[i] = +strArray[i];
    }
    // remove values and fields
    $("input[name='numbers']").val("");
    $("input[name='numbers']").remove();
    $('.quiz-button').remove();

    // sort numbers, convert to str, add a space and display
    var string = String(numArray.sort(function(a,b){return a > b})).replace(/,/g, ', ');
    var $list = $('<ul>').append($('<li>').html(string));
    $('#quiz').append($list)
  });
});