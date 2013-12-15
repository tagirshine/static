$(function() {
	$(".collapse-trigger").on('click', function(){
		// $(this).children().hide();
		$(this).toggleClass('on');
		$('.collapse').toggleClass('in');
		if ($('.collapse').hasClass('in')) {
			$(this).slideDown('slow');
			$('.collapse').fadeIn(300);
		}
		else {
			$('.collapse').slideUp(400);
			$(this).children().not('.collapse').show(300);
		}
		return false;
	});
});

