


function sort(){
	var inputArrayString = $('#numbers').val().split(",")
	var numberArray = _.map(inputArrayString, function(i){return parseInt(i)})
	var sortedArray = numberArray.sort(function(a,b){return b<a})
	return sortedArray
}

function sortNReplace() {
		var array = sort();
		$("#result").text(array.join(', '))
		$(this).remove();
		$("#numbers").remove();
}


$(document).ready(function(){

	$("#sort").on("click", sortNReplace)
	// $("#sort").on("click", function(){
	// 	var array = sort();
	// 	$("#result").text(array.join(', '))
	// 	$(this).remove();
	// 	$("#numbers").remove();
	// })

})