$(document).ready(function() {

	

	$( ".info_block" ).click(function() {
	  $( this).next().toggle('slow');
	});
		$( "#projects" ).click(function() {
	  $( ".projects_box").toggle('slow');
	});
})








// var downNow = function  () {
	// 	$(this).next().slideDown(1000);
	// }
	// var upNow = function () {
	// 	$(this).next().slideUp(1000);
	// 	// body...
	// }

	// $('.info_block').click(downNow, upNow)

// var ma =["dropmenu1"];
// function dropMenu(x){
// 	for (var m in ma){
// 		if (ma[m] !=x){
// 		document.getElementById(ma[m]).style.display="none";
// 	}
// }
// if(document.getElementById(x).style.display =='block') {
// 	fadeOut(x);
// } else {
// 		fadeIn(x);
// 	}
// }
