$(document).ready(function(){
	$(".band_expand").click(function(){
		$(this).next('div').slideToggle('slow');
	});
	$("a").attr('rel', 'external');
	
	//Share Links
	$(".twitter_share").click(function(){
		var tweet_this = "https://twitter.com/share?url=";
		window.open(tweet_this+ window.location.href, 'tweet_this', 'width=350,height=350');
		//attr("href", share_this_url);
	});
	
	$('.facebook_share').click(function(){
		var fb_share = "https://www.facebook.com/sharer/sharer.php?u=";
		window.open(fb_share + location.href, 'fb_share', 'width=626,height=436');
		});
	
	$('.google_share').click(function(){
		var gp_share = "https://plus.google.com/share?url=";
		window.open( gp_share + location.href, "goog_plus", "height=600,width=600");
	
	});
	
	$('#show_share_panel').click(function(){
		$('#share_panel').toggle();
		$('#share_panel_pointer').toggle();
	});
		
	// $('#sponsors_carousel_1').jcarousel({
		 // auto: 2,
        // wrap: 'last',
        // initCallback: mycarousel_initCallback
		// });
});

//*******************************FUNCTIONS*****************************************//
	function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
}