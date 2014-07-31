
//	CUSTOM SCRIPTS

$(function() {

	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).slideDown('fast');
	}, function() {
		$('.dropdown-menu', this).slideUp('fast');
	});//hover
	
	//show tooltips
	$("[data-toggle='tooltip']").tooltip({ animation: true});
	$('.mytooltip').tooltip();
	
	//	slider / carousel
	$('.carousel').carousel({
		interval: false
	});

	//	scrollbars
	$(document).ready(function() {
		var nicesx = $(".boxscroll").niceScroll({
		touchbehavior:false,
		cursorcolor:"#303641",
		cursoropacitymax:0.7,
		cursorwidth:10
		});
	
	});
	  
	$(document).ready(function() {
		var nicesx = $("body").niceScroll({
			touchbehavior:false,
			cursorcolor:"#CECEBF",
			cursoropacitymax:.9,
			cursorwidth:10,
			autohidemode:false
		});
	});
	  
}); //jQuery is loaded