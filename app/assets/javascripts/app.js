function removeInput(){
  alert('yay');
  $('input').val() = "";
}

$(document).ready(function(){
  $('button#sort').on("click", function(){
    removeInput();
  });
});


