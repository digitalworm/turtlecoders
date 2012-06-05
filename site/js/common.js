$(function() {
	
	runIt();
		
});

function runIt() {
	$("#text_1").fadeIn(1500).delay(3500).slideUp(1500);	
	
	//$("#text_1").delay(800);
	
	$("#text_2").delay(5000).fadeIn(1500).delay(3500).slideUp(1500);	
	
	//$("#text_2").delay(800);
	
	$("#text_3").delay(11500).fadeIn(1500).delay(3500).fadeOut(1500, runIt);
	
}