$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
	
	$('body').scrollspy({ target: '#navbarSupportedContent',  offset: '90' });
	
	var scroll = new SmoothScroll('a[href*="#"]');
	
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 10){
		$('.abc').addClass('scrolled');
	} else {	
		$('.abc').removeClass('scrolled');
	};
});

	
$(function () {
	$("body").niceScroll({
        cursorcolor:"#dea128",
        cursorwidth:"10px",
        cursorborder:"0px",
		cursorfixedheight: 100,
    });
	
    new WOW().init();
});