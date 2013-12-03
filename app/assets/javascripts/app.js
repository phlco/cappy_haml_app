$(function(){
  $('#random-nums').hide();
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
    $('.show').html(content.join(', '));
  });

  $('#numbers').on('keypress', function(){
    $('#random-nums').show();
  });

  $('#random-nums').on('click', function(){
    var data = $('#numbers').val();
    getArray(data)
    .done(function(response) {
      $('#numbers').hide();
      $('.show').html(response.join(', '));
    });
  });
});

function getArray(data){
  return $.ajax({
    url: '/array',
    type: 'post',
    dataType: 'json',
    data: { array: data }
  });
}

