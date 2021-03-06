$(document).ready(function () {

	$('.scrollup').click(function () {
		/* scroll back to projects */
		$("html, body").animate({
			scrollTop: $("#projects").offset().top
		}, 1000, 'easeInOutExpo');
		return false;
	});

	$('.scrolldown').click(function() {
		/* first disable all */
		$(".project-details").hide();

		var pSection = $(this).attr("href");
		$(pSection).show(); /* enable only this one */

		/* get href of itself and animate scroll */
		$("html, body").animate({
			scrollTop: $(pSection).offset().top
		}, 1000, 'easeInOutExpo');

		/* Text Shadow for the title */ 
		$(pSection).addClass("active-shadow");
		setTimeout(function() { $(pSection).removeClass("active-shadow"); }, 900);

		return false;
	});

});

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 70

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

				}

	});

})(jQuery);
