function sortNum(e){
  var numbers = $('#numbers').val().split(',');
  numbers = numbers.sort(function(a,b){ return b < a });
  $('#numbers').val(numbers.join());
}





//   for (i = 0; i < numbers.length; i++) {
//     // convert the string to number
//     numbers[i] = parseInt(numbers[i]);
//     // skip the first one because of i - 1
//     debugger;
//     if (i > 0) {
//       if (numbers[i] < numbers[i - 1]) {
//         increasing = false;
//       }
//     }
//   }
//  if (increasing) {
//     $('body').removeClass('red');
//     $('body').addClass('green');
//   } else {
//     $('body').removeClass('green');
//     $('body').addClass('red');
//   }
// };
