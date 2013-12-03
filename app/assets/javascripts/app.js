$(function(){
  $('#sort').on('click', function(e){
    e.preventDefault();
    $('#numbers').hide();
    $(this).hide();

    var inputValue = $('#numbers').val();
    var sortedStrings = inputValue.split(', ');
    var nums = [];
    for (var i = 0; i < sortedStrings.length; i++) {
      var parsedNum = parseInt(sortedStrings[i], 10);
      nums.push(parsedNum);
    }
    var content = nums.sort(function(a, b){
      return a > b;
    });
    $('body').html(content.join(', '));
  });
});
