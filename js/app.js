$(function() {

	let burger = $("#burger");
	let nav = $("#nav");

	//nav
	burger.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");

		burger.toggleClass("change");

	});

	// accordion
	$(".accordion__link").click(function() {
		$(".accordion__toggle").slideToggle(500);
	});

	$(".accordion__link1").click(function() {
		$(".accordion__toggle1").slideToggle(500);
	});

	$(".accordion__link2").click(function() {
		$(".accordion__toggle2").slideToggle(500);
	});

	$(".accordion__link3").click(function() {
		$(".accordion__toggle3").slideToggle(500);
	});

	// slider intro
	$('.slider').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 4000,
	  	dots: true,
	  	focusOnSelect: true,
	  	arrows: false,
		infinite: true,
        speed: 700,
	    fade: true,
		cssEase: 'linear'
	});

	// slider posts
	$(".posts__cards").slick({
		slidesToShow: 3,
	  	slidesToScroll: 3,
	  	autoplay: false,
  		autoplaySpeed: 2000,
  		arrows: false,
	 	dots:true,

	 	responsive: [ 
	 	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false,
	        arrows: false
	      }
	    }
	  ]
	});



        


});