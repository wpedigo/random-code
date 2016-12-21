console.log("Connected");

$("img").css({width: "200px", height: "200px"});

// $("img:first-of-type").attr("src","https://s-media-cache-ak0.pinimg.com/736x/90/98/be/9098becb97c17967ed1f7d5dfdefa0b8.jpg");
// $("img").last().attr("src","http://www.gmkfreelogos.com/logos/D/img/Ducati_Monster-1.gif");

//methods
// $("h1").addClass("correct");
// $("h1").removeClass("correct");

// $("li").addClass("wrong");
// $("li").removeClass("wrong");
// $("li").addClass("correct");

// $("li").toggleClass("correct");
// $("li").toggleClass("correct");

// $("li").first().toggleClass("done");
// $("li").toggleClass("done");

//events
// $("h1").click(function(){
	
// });

// $("button").click(function(){
// 	$(this).css("background", "yellow");
// });

// $("button").click(function(){
// 	var text = $(this).text();
// 	console.log("you clicked " + text);
// });

// $("input").keypress(function(event

// 	){
// 	if(event.which === 13){
// 		alert("You hit enter");
// 	}
// });

//.on
$("h1").on("click", function(){
	$(this).css("color", "purple");
});

$("input").on("keypress", function(){
	console.log("keypressed");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});

//.fadeOut()
// $("button.fadeButton").on("click", function(){
// 	$(".fades div").fadeToggle(1000, function(){
// 		console.log("Fade Completed");
// 	});
// });

//.slideDown();
$("button.fadeButton").on("click", function(){
	$(".fades div").slideToggle(500, function(){
		
		console.log("Slide is Done!!");
	});
});



