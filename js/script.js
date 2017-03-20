$(document).ready(function() {


	$("h2").click(function(){
 	 $("p").slideToggle(2000);
 	});

 	//hides/shows  paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").hide(2000).show(2000);
 	});