/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // make sure that the site is fully loaded
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Responsive Tabs
============================================ */
$(function () {
	$("#services-tabs").responsiveTabs({
		animation: 'slide'
	});
});



/* =========================================
                Mobile menu
============================================ */
$(function() {
	
	// Show nav
	$("#mobile-nav-open-btn").click(function() {	
		$("#mobile-nav").css("height", "100%");	
	});
	
	// Hide nav
	$("#mobile-nav-close-btn, #mobile-nav a").click(function() {	
		$("#mobile-nav").css("height", "0%");	
	});
	
	

});

