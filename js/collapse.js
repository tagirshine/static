/*Table accordeon*/
$(function() {
	var $trigger = $('.collapse-trigger');
    $trigger.find("tr").not('.accordion').hide();
    $trigger.find("tr").eq(0).show();

    $trigger.find(".accordion").click(function(){
        $trigger.find('.accordion').not(this).siblings().fadeOut(500);
        $(this).siblings().fadeToggle(500);
    }).eq(0).trigger('click');
});



