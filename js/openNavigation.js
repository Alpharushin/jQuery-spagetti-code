$(document).ready(function(){

	$('#toogleNavigation').on('click' , function (e) {
		e.preventDefault();
		$(".navigation").toggleClass('navigation-open');
		$('html').toggleClass('hide-scroll');
		$('body').toggleClass('hide-scroll');
	});

});