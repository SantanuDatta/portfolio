$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
	
	$('body').scrollspy({ target: '#navbarSupportedContent',  offset: '90' });
	
	var scroll = new SmoothScroll('a[href*="#"]');
});


$(function () {
	$("body").niceScroll({
        cursorcolor:"#368afe",
        cursorwidth:"10px",
        cursorborder:"0px",
		cursorfixedheight: 100,
    });
	
    new WOW().init();
});