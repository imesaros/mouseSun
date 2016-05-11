$(document).on('mousemove',function(){

	var mouseX = event.pageX;
	var mouseY = event.pageY;
	var windowY =  $(window).height();
	var windowX =  $(window).width();

	$('.mouse-shadow').each(function(){
		var topleft = $(this).closest('div').offset();
		var sizeX = $(this).width();
		var sizeY = $(this).height();
		var x = topleft.left + sizeX/2;
		 x = x.toFixed(0);
		var y = topleft.top + sizeY/2;
		 y = y.toFixed(0);

		var shadowProX = (x - mouseX)/windowX;
		 shadowProX = shadowProX.toFixed(2);
		var shadowProY = (y - mouseY)/windowY;
		 shadowProY = shadowProY.toFixed(2);

		$(this).css('top',100*shadowProY);
		$(this).css('left',100*shadowProX);
	});

	$('.kursor').css('top',mouseY-20);
	$('.kursor').css('left',mouseX-20);

});