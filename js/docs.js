$(function() {
// table carousel call
    $(".attachments-carousel").jCarouselLite({
        btnNext: ".icon-right-open",
        btnPrev: ".icon-left-open",
        width: 900
    });
// dropdown changes status history 
	$('.status-history').live('click', function(){

		var parent = $(this).closest('.dropdown-menu');

		parent.addClass('history');

		if ($(this).closest('.dropdown-menu.on')) {
			parent.animate({
			        width: "380px"
			      }, 500)
				.css( 	
			        "padding", "13px 25px 20px"
			      );
			parent.html("<li><span class='title icon-clock'>История назначения стстусов</span></li><li><soan><a class='btn btn-sm back-btn pull-left' href='#'>Назад</a></span></li><li>Подготовлен — 14.10.2013 — <a href='#'>Насиббулина Альбина</a></li><li class='dropdown-arr'></li><li>Подготовлен — 14.10.2013 — <a href='#'>Насиббулина Альбина</a></li><li>Подготовлен — 14.10.2013 — <a href='#'>Насиббулина Альбина</a></li><li>Подготовлен — 14.10.2013 — <a href='#'>Насиббулина Альбина</a></li>");
		}
		return false;
	}); 
	$('.back-btn').live('click', function(){
		$(this).closest('.dropdown-menu').removeClass('history').animate({
			        width: "250px"
			      }, 500).css( 	
			        "padding", "0"
			      )
				.html("<li class='time'>Последий статус назначен:<span class='date'>20 ноября 2013</span><div class='progress'><div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width: 40%'><span class='sr-only'>40% Complete (success)</span></div></div></li><li><a href='#' class='icon-ok'>Отправить</a></li><li class='status-history'><a href='#' class='icon-clock'>История статусов</a></li><li class='dropdown-arr'></li><li><a href='#' class='icon-block-1'>Отмена</a></li>");
		return false;
	});
});