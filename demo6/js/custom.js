/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Video
5. Init Date Picker
6. Init Time Picker


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/
	
 
		$("#owl-demo").owlCarousel({
	   
			autoPlay: 3000, //Set AutoPlay to 3 seconds
	   
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
	   
		});
	   
	 

	var header = $('.header');
	var hamburgerBar = $('.hamburger_bar');
	var hamburger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initVideo();
	initDatePicker();
	initTimePicker();
	initMenu();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
			hamburgerBar.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			hamburgerBar.removeClass('scrolled');
		}
	}

	

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			hamburger.on('click', function()
			{
				hamburger.toggleClass('active');
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Video

	*/

	function initVideo()
	{
		$(".vimeo").colorbox(
		{
			iframe:true,
			innerWidth:640,
			innerHeight:409,
			maxWidth: '90%'
		});
	}

	/* 

	5. Init Date Picker

	*/

	function initDatePicker()
	{
		var dp = $('#datepicker');
		var date = new Date();
		var dateM = date.getMonth() + 1;
		var dateD = date.getDate();
		var dateY = date.getFullYear();
		var dateFinal = dateM + '/' + dateD + '/' + dateY;
		dp.val(dateFinal);
		dp.datepicker();
	}

	/* 

	6. Init Time Picker

	*/

	function initTimePicker()
	{
		$('.timepicker').timepicker(
		{
		    interval: 60,
		    minTime: '10',
		    maxTime: '6:00pm',
		    defaultTime: '11',
		    startTime: '10:00',
		    dynamic:  true,
		    dropdown: true,
		    scrollbar: true
		});
	}

});