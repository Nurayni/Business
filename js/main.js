(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
        });
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
        });


	// POPPUP GALLERY JS CODE
	$('.popup-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image'
		// other options
	  });
	// END POPPUP GALLERY JS CODE

	
	// MIXITUP JS CODE
	var containerEl = document.querySelector('#shorting');
	var mixer = mixitup(containerEl, {
		animation: {
			animateResizeContainer: false // required to prevent column algorithm bug
		}
	});
	// END MIXITUP JS CODE



	// WOW active
	new WOW().init();


		var feedbackSlider = jQuery('.feedback-slider');
		feedbackSlider.owlCarousel({
			items: 1,
			nav: false,
			dots: false,
			autoplay: true,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			responsive:{

				// breakpoint from 767 up
				767:{
					nav: true,
					dots: false
				}
			}
		});

		feedbackSlider.on("translate.owl.carousel", function(){
			$(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
			$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
		});

		feedbackSlider.on("translated.owl.carousel", function(){
			$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
			$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
		});
		feedbackSlider.on('changed.owl.carousel', function(property) {
			var current = property.item.index;
			var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
			var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
			var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
			var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
			$('.thumb-prev').find('img').attr('src', prevThumb);
			$('.thumb-next').find('img').attr('src', nextThumb);
			$('.thumb-prev').find('span').next().html(prevRating + '<i class="icofont-star"></i>');
			$('.thumb-next').find('span').next().html(nextRating + '<i class="icofont-star"></i>');
		});
		$('.thumb-next').on('click', function() {
			feedbackSlider.trigger('next.owl.carousel', [300]);
			return false;
		});
		$('.thumb-prev').on('click', function() {
			feedbackSlider.trigger('prev.owl.carousel', [300]);
			return false;
		});

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-swoosh-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
    
}(jQuery));