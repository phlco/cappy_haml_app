$(document).ready(function() {
  $('#quiz').on('submit', function(event) {
    var input = $('input').val()
    input = input.split(',')
    sortedInput = _.sortBy(input, function(num) { return parseInt(num) })
    $('.answer').text(sortedInput)
    $('#quiz').remove();
    event.preventDefault();
  })
})
