// projectsFilter('all')
// function projectsFilter(c) {
// 	var x, i;
// 	x = document.getElementsByClassName("projects__item");
// 	/* Add the "show" class (display:block) to the filtered 
// 	 elements, and remove the "show" class 
// 	 from the elements that are not selected */
// 	if (c == "all") c = "";
// 	for (i = 0; i < x.length; i++) {
// 		projectsRemove(x[i], "showFilter");
// 		if (x[i].className.indexOf(c) > -1) projectsAdd(x[i], "showFilter");
// 	}
// }

// // Show filtered elements
// function projectsAdd(element, name) {
// 	var i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		element.className += " " + arr2[i];
// 	}
// }

// // Hide elements that are not selected
// function projectsRemove(element, name) {
// 	var i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		while (arr1.indexOf(arr2[i]) > -1) {
// 			arr1.splice(arr1.indexOf(arr2[i]), 1);
// 		}
// 	}
// 	element.className = arr1.join(" ");
// }

const filterBox = document.querySelectorAll('.item');

document.querySelector('.nav').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['f'];
	
	filterBox.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('hide');
		}
	});
});

$(function() {

	let burger = $("#burger");
	let nav = $("#nav");
	let change = $(".change");
	let show = $(".show");

	//nav
	burger.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
		
		burger.toggleClass("change");

		$(".search__form").toggleClass("show--form");
	});

	// fixed header
	$(window).scroll(function() {
		if ($(document).scrollTop() > $(".intro").innerHeight()) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});

	// wedo--active card
	$(window).resize(function(event) {
		event.preventDefault();
		if ($(window).innerWidth() < 968) {
			$(".wedo__item:first-child").addClass("wedo--active");
		} else {
			$(".wedo__item:first-child").removeClass("wedo--active");
		}
	});

	// smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		blockId = $this.data("scroll"),
		blockOffset = $(blockId).offset().top;

		nav.removeClass("show");
		burger.toggleClass("change");
		$(".search__form").removeClass("show--form");

		$("#nav a").removeClass("active");
		$this.addClass("active");
		

		$("html, body").animate({
			scrollTop: blockOffset - 55
		}, 500);
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
  		arrows: false,
	 	dots:true,

	 	responsive: [ 
	 	{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 1500,
	        dots: false,
	        arrows: false
	      }
	    }
	  ]
	});
});
