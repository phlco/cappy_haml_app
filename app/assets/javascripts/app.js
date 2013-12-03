$(document).ready(function() {
  $('#quiz').on('submit', function(event) {
    var input = $('input').val()
    input = input.split(',')
    sortedInput = _.sortBy(input, function(num) { return parseInt(num) })
    $('.answer').text(sortedInput)
    $('#quiz').remove();
    event.preventDefault();
  })
  $('#ajax').on('click', function() {
    var input = $('input').val();
    input = parseInt(input);
    $.ajax({
      type: "GET",
      url: "/random?number="+input,
    }).done(function(answer) {
      $('.answer').text(answer);
      $('#quiz').remove();
    });
  })
})
