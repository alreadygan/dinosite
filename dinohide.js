var main = function() {
	$('.title').mouseenter(function() {
		clearTimeout();
        $('.dino').css("visibility","visible");
		setTimeout(function(){
			$('.dino').css("visibility","hidden");
		},2500);
    });
    /*$(".title").mouseleave(function(){
        $(".dino").css("visibility","hidden");
    });*/
}

$(document).ready(main);