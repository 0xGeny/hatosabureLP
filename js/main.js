/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++
AUTHOR : R_GENESIS
PROJECT : RGen Landing Page with Page Builder
This file licensed to R_GENESIS (http://themeforest.net/user/r_genesis) and it’s strictly prohibited to copy or reuse it.
Copyright 2015-2018 R.Genesis.Art
++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

; (function () {
	'use strict';

	var rgen = {},
		package_ver = 'v4.6',
		$document = $(document),
		$window = $(window),
		$html = $("html"),
		isNovi = window.xMode,
		pageLoader = $('.page-loader'),

		userAgent = navigator.userAgent.toLowerCase(),
	  	isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
	  	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  	window.rgen = rgen;

	/* CONFIG
	********************************************/
	rgen.config = {
		/*
		TWITTER
		String: consumer key. make sure to have your app read-only
		String: consumer secret key. make sure to have your app read-only
		*********************/
		twitter: {
			consumer_key: 'YOUR_CONSUMER_KEY',
			consumer_secret: 'YOUR_CONSUMER_SECRET_KEY'
		},

		/*
		URL OF SUCCESS PAGE ON FORM SUBMIT
		*********************/
		success_url: "thankyou.html"
	}


	/* Page loader
	********************************************/
	if (pageLoader > 0 && !isNovi) {
		$window.on('load', function () {
			pageLoader.fadeOut('slow');
			$window.trigger("resize");
		});
	} else {
		pageLoader.remove();
	};

	rgen.dmod = false;
	rgen.demo = function () { if (rgen.dmod) { return rgenNotice(); } else { return true; }; }

	$(function () {


	var $o = {};
	$o.r                = !rgen.demo ? false : rgen.demo();
	$o.tooltip          = $o.r ? $('[data-toggle="tooltip"]') : false;
	$o.pageLoader       = $('.page-loader').length > 0 && $o.r ? $(".page-loader") : false;
	$o.header           = $('.main-head').length > 0 && $o.r ? $('.main-head') : false;
	$o.menuwrp          = $('.menu-wrp').length > 0 && $o.r ? $('.menu-wrp') : false;
	$o.navlink          = $('.menu-wrp').find(".menu-item").length > 0 && $o.r ? $('.menu-wrp').find(".menu-item") : false;
	$o.fullwh           = $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : false;
	$o.fullh            = $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : false;
	$o.bgimg            = $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : false;
	$o.slidebg          = $("[data-slide-bg]").length > 0 && $o.r ? $("[data-slide-bg]") : false;
	$o.section       	= $('#page > section').length > 0 && $o.r ? $("#page > section") : false;
	$o.hoverclass       = $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : false;
	$o.bgcolor          = $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : false;
	$o.txtcolor         = $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : false;
	$o.gradient         = $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : false;
	$o.videopop         = $(".video-popup").length > 0 && $o.r ? $(".video-popup") : false;
	$o.setpop           = $(".set-popup").length > 0 && $o.r ? $(".set-popup") : false;
	$o.countbox         = $(".count-box").length > 0 && $o.r ? $(".count-box") : false;
	$o.tabwidget        = $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : false;
	$o.tabsauto         = $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : false;
	$o.carouselwidget   = $(".carousel-widget").length > 0 && $o.r ? $(".carousel-widget") : false;
	$o.accordionwidget  = $(".accordion-widget").length > 0 && $o.r ? $(".accordion-widget") : false;
	$o.swiperwidget     = $(".swiper-widget").length > 0 && $o.r ? $(".swiper-widget") : false;
	$o.swipergallery    = $(".swiper-gallery").length > 0 && $o.r ? $(".swiper-gallery") : false;
	$o.videobg          = $(".videobg").length > 0 && $o.r ? $(".videobg") : false;
	$o.videwidget       = $(".vide-widget").length > 0 && $o.r ? $(".vide-widget") : false;
	$o.othersection1    = $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : false;
	$o.popgallerywidget = $(".popgallery-widget").length > 0 && $o.r ? $(".popgallery-widget") : false;
	$o.bgslider         = $("[data-bgslider]").length > 0 && $o.r ? $("[data-bgslider]") : false;
	$o.countdownwidget  = $(".countdown-widget").length > 0 && $o.r ? $(".countdown-widget") : false;
	$o.filterwidget     = $(".filter-widget").length > 0 && $o.r ? $(".filter-widget") : false;
	$o.gmapwidget       = $(".gmap-widget").length > 0 && $o.r ? $(".gmap-widget") : false;
	$o.socialsection    = $(".social-section").length > 0 && $o.r ? $(".social-section") : false;
	$o.instagramwidget  = $(".instagram-widget").length > 0 && $o.r ? $(".instagram-widget") : false;
	$o.twitterwidget    = $(".twitter-widget").length > 0 && $o.r ? $(".twitter-widget") : false;
	$o.formwidget       = $(".form-widget").length > 0 && $o.r ? $(".form-widget") : false;
	$o.stellar          = $("[data-stellar]").length > 0 && $o.r ? $("[data-stellar]") : false;
	$o.parallax          = $("[data-parallax-img]").length > 0 && $o.r ? $("[data-parallax-img]") : false;
	$o.elanimate        = $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : false;
	$o.bLazy            = $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : false;
	//$o.masonry          = $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;
	$o.masonry = $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;

	$o.styleid          = $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : false;
	$o.searchpop        = $("#popup-search").length > 0 && $o.r ? $("#popup-search") : false;

	rgen.bgimg = function(obj) {
		$(obj).css({ backgroundImage: "url(" + $(obj).attr("data-bg") + ")" });
	}
	
	if ($o.r) {


		
		$('html').before('<!-- ' + package_ver + ' -->');

		$(".copyright-year").text(new Date().getFullYear());

		if (isNovi) {
			$('head').append('<link href="css/builder.css" rel="stylesheet">');
		}

		
	/* RESPONSIVE
	********************************************/
	enquire.register("screen and (min-width: 992px)", {
		match : function() {
			rgen.device = 'd';
		},  
		unmatch : function() {}
	}).register("(min-width: 200px) and (max-width: 991px)", {
		match : function() {
			rgen.device = 'm';
		},  
		unmatch : function() {}
	});
	

	/* HELPERS FUNCTIONS
	********************************************/
	rgen.elcheck = function (el) {
		'use strict';
		if ($(el).length > 0) {
			return true;
		} else {
			return false;
		};
	}


	rgen.uid = function () {
		'use strict';
		var uid = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 3; i++)
			uid += possible.charAt(Math.floor(Math.random() * possible.length));
		return 'rg' + uid;
		//return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
	}

	
	rgen.setId = function (obj, prefix, n) {
		'use strict';

		n++;
		var a = prefix + n;
		$(obj).css({ opacity: 0 });
		$(obj).attr("id", a);
		$(obj).addClass(a);

		// Accordion setup
		if ($(obj).is(".accordion-widget")) {
			$(obj).find(".acc-block").each(function (index, el) {
				var id = a + "-acc-block-" + index;
				$(this).find(".acc-hd").attr("data-accid", "#" + id);
				$(this).find(".acc-content").attr("id", id);
				$(this).find(".acc-hd").append('<i class="acc-open ' + $(obj).attr("data-acc-openclass") + ' "></i><i class="acc-close ' + $(obj).attr("data-acc-closeclass") + '"></i>');
			});
		}
	}

	rgen.getMultiScripts = function (arr, path) {
		'use strict';

		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr);
		});

		_arr.push($.Deferred(function (deferred) {
			$(deferred.resolve);
		}));

		return $.when.apply($, _arr);
	}


	rgen.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
	}


	rgen.fullwh = function (obj) {
		'use strict';
		// global vars
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		// set initial div height / width
		$(obj).css({
			'width': winWidth,
			'height': winHeight,
		});
	}

	rgen.fullh = function (obj, wrp) {
		'use strict';

		if (wrp) {
			var winHeight = $(obj).closest(wrp).height();
		} else {
			var winHeight = $(window).height();
		}

		// set initial div height / width
		$(obj).css({
			'height': winHeight,
		});
	}


	
	
	/* ALL MENU RELATED SCRIPTS
	********************************************/
	rgen.mobmenu = function (el) {
		'use strict';
		
		// Main menu show / hide case
		$(el).on("click", function (e) {
			var nav = $(this).attr('data-nav');
			var c = $(this).attr('data-navclose');
			var o = $(this).attr('data-navopen');
			
			if ($(nav).hasClass('open')) {
				$(nav).removeClass('open');
				//$(this).find('i').removeClass($(this).attr('data-navclose')).addClass($(this).attr('data-navopen'));
				$(this).find('i').removeClass(c).addClass(o);
			} else {
				$(nav).addClass('open m-nav');
				//$(this).find('i').removeClass($(this).attr('data-navopen')).addClass($(this).attr('data-navclose'));

				$(this).find('i').removeClass(o).addClass(c);
			};
		});

		// Sub menu show / hide
		$('.menu').on("click", '.sub-handler', function(event) {
			var parent_el = $(this).closest(".has-dropdown");
			if ($(parent_el).hasClass('active')) {
				$(parent_el).removeClass('active');
				$(this).addClass('fa-plus').removeClass('fa-minus');
			} else {
				$(parent_el).addClass('active');
				$(this).addClass('fa-minus').removeClass('fa-plus');
			}
		});
	}
	
	rgen.menuH = function (header, menu) {
		'use strict';
		$(menu).removeAttr('style');
		$(menu).css({
			minHeight: $(header).height()
		});
	}

	rgen.menuFn = function ($menu) {
		'use strict';
		var mEnter = isNovi ? 'click' : 'mouseenter',
			mLeave = isNovi ? 'dblclick' : 'mouseleave';
			
		$menu.on(mEnter, '.has-dropdown', function(event) {
			$(this).addClass('active');
			$(this).children('.sub-handler').addClass('fa-minus').removeClass('fa-plus');
		});
		$menu.on(mLeave, '.has-dropdown', function(event) {
			$(this).removeClass('active');
			$(this).children('.sub-handler').addClass('fa-plus').removeClass('fa-minus');
			$(this).children('.sub').removeAttr('style');
		});

		$menu.on(mEnter, '.menu-item', function(event) {
			event.preventDefault();
			
			if($(this).children('.sub').length != 0){
				$(this).children('.sub').removeAttr('style');

				var submenu = $(this).children('.sub'),
					dropdown = $(submenu).offset(),
					l_offset_from_container = dropdown.left - (($(window).width()-$('.main-head > .container').width())/2),
					overflow_menu_w = l_offset_from_container + $(submenu).outerWidth() - $('.main-head > .container').width();
				
				if (overflow_menu_w > 0) {
					$(submenu).css({
						marginLeft: '-' + overflow_menu_w + 'px',
					});
				}

			}

		});
	}

	rgen.headerFn = function ($header) {
		
		if ($header.attr('data-sticky') == 'y') {
			
			// Hook to check data-sticky menu
			$('html').addClass('data-sticky');

			$header.addClass('fixed-top').removeClass('show-above');

			if ($(window).scrollTop() > $header.height()) {
				//console.log($header.height());
				$header.addClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.removeClass('bg-glass') : null;
				rgen.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.addClass('bg-glass') : null;
				rgen.menuH($header, $header.find('.menu'));
			}
		};

		if ($header.attr('data-sticky-scroll') == 'y') {
			if ($(window).scrollTop() > $header.height()) {
				$header.addClass('fixed-top').addClass("header-sticky");
				rgen.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass('fixed-top').removeClass("header-sticky");
				rgen.menuH($header, $header.find('.menu'));
			}
		}

		if ($header.attr('data-hide') == 'y' && rgen.device == 'd') {
			
			$header.addClass('header-hide');

			if ($(window).scrollTop() > $header.height()) {
				$header.addClass("header-show");
				rgen.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-show");
				rgen.menuH($header, $header.find('.menu'));
			}
		};
	}


	rgen.linkscroll = function (obj) {
		'use strict';
		$(document).on('click', obj, function (e) {
			e.preventDefault();
			if ($(this).closest('.nav-links').hasClass('nav-links') == false && $(this).attr('href').indexOf("popup") === -1) {
				// target element id
				var id = $(this).attr('href');
				// target element
				var $id = $(id);
				if ($id.length === 0) { return; }
				// top position relative to the document
				var pos = $(id).offset().top;
				// animated top scrolling
				$('body, html').animate({ scrollTop: pos }, 1200);
			};
		});
	}



	/* NAVIGATION
	********************************************/
	if (!isNovi) {
		if ($o.navlink) {
			$o.navlink.find('a').smoothScroll({
				speed: 1200,
				//offset: $o.header.attr('data-sticky') == 'y' || $o.header.attr('data-sticky-scroll') == 'y' ? -($o.header.height() - 20) : 0,
				beforeScroll: function () {
					$o.navlink.find('a').removeClass('active');
					$('.nav-handle').trigger('tap');
				},
				afterScroll: function () {
					$(this).addClass('active');
				}
			});
		};
	}

	/* LINK SCROLL
	********************************************/
	if (!isNovi) {
		if (rgen.elcheck("#page[data-linkscroll='y']")) {
			rgen.linkscroll('a[href^="#"]:not(.nav-links)');
		};
	}

	/* All header utilities
	********************************************/
	if ($o.menuwrp) {
		var $menu = $('.menu');
		$('.menu .has-dropdown').each(function() {
			$(this).prepend('<b class="sub-handler fa fa-plus">');
			if ($(this).hasClass('menu-item')) {
				$(this).children('ul').addClass('sub');
				$(this).children('.mega-menu').addClass('sub');
			}
		});
	}

	if (!isNovi) {
		if ($o.header) {
			
			$o.header.attr('data-glass') === 'y' ? $o.header.addClass('bg-glass') : null;
			$o.header.attr('data-above') === 'y' ? $o.header.addClass('show-above') : null;
			rgen.menuH($o.header, $o.header.find('.menu'));

			/* Change sticky with scroll for small screens */
			/*if (rgen.device == 'm') {
				$('.main-head').removeAttr('data-sticky').attr('data-sticky-scroll', 'y');
			}*/
			if ($o.header.attr('data-sticky') == 'y' || $o.header.attr('data-sticky-scroll') == 'y' || $o.header.attr('data-hide') == 'y' && rgen.device == 'd') {
				$(window).scroll(function () {
					rgen.headerFn($o.header);
				});
				rgen.headerFn($o.header);
			}
		}
	}
	
	
	/* CAROUSEL SCRIPTS
	********************************************/
	rgen.owlitems = function (arr) {
		'use strict';
		if (typeof (arr) == "string" && arr != 'false') {
			var t1 = arr.split('|');
			var t2 = {};
			$.each(t1, function (index, val) {
				var str = val;
				var newarr = str.split(',');
				t2[newarr[0]] = {}
				t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
			});
			return t2;
		} else if (arr === 'false') {
			return {};
		} else {
			return false;
		}
	}



	//var isNoviBuilder = window.xMode;
	var owl = $(".owl-carousel");

	/**
	 * Owl carousel
	 * @description Enables Owl carousel plugin
	*/
	if (owl.length) {
		var i;
		for (i = 0; i < owl.length; i++) {
			var c = $(owl[i]),
				responsive = {};
			owl[i].owl = c;

			var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"],
				values = [0, 480, 768, 992, 1200, 1800],
				j, k;

			for (j = 0; j < values.length; j++) {
				responsive[values[j]] = {};
				for (k = j; k >= -1; k--) {
					if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
						responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
					}
					if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
						responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
					}
					if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
						responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
					}
				}
			}

			// Create custom Numbering
			if (typeof(c.attr("data-numbering")) !== 'undefined') {
				var numberingObject = $(c.attr("data-numbering"));

				c.on('initialized.owl.carousel changed.owl.carousel', function (numberingObject) {
					return function (e) {
						if (!e.namespace) return;
						numberingObject.find('.numbering-current').text((e.item.index + 1) % e.item.count + 1);
						numberingObject.find('.numbering-count').text(e.item.count);
					};
				}(numberingObject));
			}

			// Enable custom pagination
			/*if (c.attr('data-dots-custom')) {
				c.on("initialized.owl.carousel", function (event) {
					var carousel = $(event.currentTarget),
						customPag = $(carousel.attr("data-dots-custom")),
						active = 0;

					if (carousel.attr('data-active')) {
						active = parseInt(carousel.attr('data-active'), 10);
					}

					carousel.trigger('to.owl.carousel', [active, 300, true]);
					customPag.find("[data-owl-item='" + active + "']").addClass("active");

					customPag.find("[data-owl-item]").on('click', function (e) {
						e.preventDefault();
						carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
					});

					carousel.on("translate.owl.carousel", function (event) {
						customPag.find(".active").removeClass("active");
						customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
					});
				});
			}*/

			c.on("initialized.owl.carousel", function () {
				//initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel');
			});

			c.owlCarousel({
				autoplay: isNovi ? false : c.attr("data-autoplay") === "true",
				loop: isNovi ? false : c.attr("data-loop") !== "false",
				items: 1,
				dotsContainer: c.attr("data-pagination-class") || false,
				navContainer: c.attr("data-navigation-class") || false,
				mouseDrag: isNovi ? false : c.attr("data-mouse-drag") !== "false",
				autoplayTimeout: !isNovi && c.attr("data-interval") ? parseInt(c.attr("data-interval")) : 3000,
				nav: c.attr("data-nav") === "true",
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				dots: ( isNovi && c.attr("data-nav") !== "true" )
					? true
					: c.attr("data-dots") === "true",
				dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
				animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
				animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
				responsive: responsive,
				center: c.attr("data-center") === "true",
				autoHeight: c.attr("data-center") ? c.attr("data-center") : true,
				/*navText: function () {
					try {
						return JSON.parse(c.attr("data-nav-text"));
					} catch (e) {
						return [];
					}
				}(),*/
				/*navClass: function () {
					try {
						return JSON.parse(c.attr("data-nav-class"));
					} catch (e) {
						return ['owl-prev', 'owl-next'];
					}
				}()*/
			});
		}
	}


	/*rgen.slider = function (owlObj) {

		'use strict';

		var resObj = {
			0: { items: 1 },
			420: { items: 2 },
			600: { items: 3 },
			768: { items: 3 },
			980: { items: 4 }
		}

		var owlEle = $(owlObj + ' .owl-carousel'),
			o = $(owlObj);

		var config = {
			center: rgen.getvar(o.attr('data-center'), false, 'b'),
			stagePadding: rgen.getvar(o.attr('data-stpd'), 0, 'n'),
			items: rgen.getvar(o.attr('data-items'), 5, 'n'),
			margin: rgen.getvar(o.attr('data-margin'), 0, 'n'),
			nav: rgen.getvar(o.attr('data-nav'), false, 'b'),
			dots: rgen.getvar(o.attr('data-pager'), false, 'b'),
			slideby: rgen.getvar(o.attr('data-slideby'), 1, 'n'),
			rbase: rgen.getvar(o.attr('data-rbase'), o.parent(), 's'),
			res: o.attr('data-itemrange') ? rgen.owlitems(o.attr('data-itemrange')) : resObj,
			animOut: rgen.getvar(o.attr('data-out'), 'fadeOut', 's'),
			animIn: rgen.getvar(o.attr('data-in'), 'fadeIn', 's'),
			autoplay: rgen.getvar(o.attr('data-autoplay'), false, 'b'),
			autoplayTimeout: rgen.getvar(o.attr('data-timeout'), 3000, 'n'),
			autoplayHoverPause: rgen.getvar(o.attr('data-hstop'), true, 'b'),
			loop: rgen.getvar(o.attr('data-loop'), false, 'b'),
			autoWidth: rgen.getvar(o.attr('data-awidth'), false, 'b'),
			autoHeight: rgen.getvar(o.attr('data-hauto'), true, 'b'),
			touchDrag: rgen.getvar(o.attr('data-tdrag'), true, 'b'),
			mouseDrag: rgen.getvar(o.attr('data-mdrag'), true, 'b'),
			pullDrag: rgen.getvar(o.attr('data-pdrag'), true, 'b'),
			contentHeight: rgen.getvar(o.attr('data-h'), true, 'b')
		}
		
		$(owlObj).animate({ opacity: 1 }, 300, function () {

			if (owlEle.find(".owl-stage").length === 0) {
				owlEle.owlCarousel({
					center: config.center,
					stagePadding: config.stagePadding,
					items: config.items,
					margin: config.margin,
					nav: config.nav,
					dots: config.dots,
					slideBy: config.slideby,
					navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					responsiveBaseElement: config.rbase,
					responsive: config.res,
					loop: $(owlObj + " .owl-carousel > .item").length > 1 ? config.loop : false,
					animateOut: config.animOut, //'slideOutDown',
					animateIn: config.animIn, //'flipInX',
					autoplay: config.autoplay,
					autoplayTimeout: config.autoplayTimeout,
					autoplayHoverPause: config.autoplayHoverPause,
					autoHeight: config.autoHeight,
					autoWidth: config.autoWidth,
					touchDrag: isNovi ? false : config.touchDrag,
					mouseDrag: isNovi ? false : config.mouseDrag,
					pullDrag: config.pullDrag,
					autoplaySpeed: 2000,

					onInitialized: function () {
						owlEle.animate({ opacity: 1 }, 300);
						
						// Align arrows
						owlEle.find('.owl-nav').css({
							top: owlEle.find('.owl-stage-outer').outerHeight() / 2
						});
						//rgen.blazyload(owlEle);
					}
				});

				o.find('.carousel-btn .prev').on('click', function () { owlEle.trigger('prev.owl.carousel'); });
				o.find('.carousel-btn .next').on('click', function () { owlEle.trigger('next.owl.carousel'); });
			}
		});
	}*/
/* SWIPER SLIDER JS
	********************************************/
	rgen.swiper_slider = function (obj) {

		'use strict';

		rgen.slidebg();

		/*var config = {
			autoplay: rgen.getvar($(obj).attr('data-autoplay'), false, 'b'),
			speed: rgen.getvar($(obj).attr('data-speed'), 1000, 'n'),
			fullsize: rgen.getvar($(obj).attr('data-fullsize'), false, 'b'),
		}*/



		if (config.fullsize) {
			rgen.fullwh(obj);
			$(window).resize(function () {
				rgen.fullwh(obj);
			});
		};

		var swiper = new Swiper(obj, {

			//direction: 'horizontal',
			//touchEventsTarget: 'container',
			//speed: config.speed,
			//autoplay: config.autoplay,
			//effect: 'fade', // 'slide' or 'fade' or 'cube' or 'coverflow'
			//parallax: false,
			pagination: {
				el: obj + ' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},

			autoplay: 					$(obj).attr('data-autoplay') ? $(obj).attr('data-autoplay') === "false" ? undefined : $(obj).attr('data-autoplay-delay') : 5000,
			direction: 					$(obj).attr('data-direction') ? $(obj).attr('data-direction') : "horizontal",
			effect: 					$(obj).attr('data-slide-effect') ? $(obj).attr('data-slide-effect') : "slide",
			speed: 						$(obj).attr('data-slide-speed') ? $(obj).attr('data-slide-speed') : 600,
			keyboardControl: 			$(obj).attr('data-keyboard') === "true",
			mousewheelControl: 			$(obj).attr('data-mousewheel') === "true",
			mousewheelReleaseOnEdges: 	$(obj).attr('data-mousewheel-release') === "true",
			nextButton: 				next.length ? next.get(0) : null,
			prevButton: 				prev.length ? prev.get(0) : null,
			//pagination: 				pag.length ? pag.get(0) : null,
			paginationClickable: 		pag.length ? pag.attr("data-clickable") !== "false" : false,
			paginationBulletRender: 	pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			} : null : null,
			scrollbar: 					bar.length ? bar.get(0) : null,
			scrollbarDraggable: 		bar.length ? bar.attr("data-draggable") !== "false" : true,
			scrollbarHide: 				bar.length ? bar.attr("data-draggable") === "false" : false,
			loop: 						isNovi ? false : $(obj).attr('data-loop') !== "false",
			simulateTouch: 				$(obj).attr('data-simulate-touch') && !isNovi ? $(obj).attr('data-simulate-touch') === "true" : false,

			
		});
	}


	rgen.swiper_gallery_th = function (obj, swi) {

		var swi_slides = [];
			//swi_slide = '';

		$(obj).find('.swiper-slide').each(function(index, el) {
			var _gl_img = $(this).attr("data-slide-bg"),

				swi_slide  = '<!-- Thumb image -->';
				swi_slide += '<div class="swiper-slide min-px-w100" style="background-image: url('+_gl_img+');" data-slide-bg="'+_gl_img+'"></div>';

				swi_slides.push(swi_slide);
		});

		//$(obj+"_th").find('.swiper-wrapper').html(swi_slides);
		swi.removeAllSlides();
		swi.appendSlide(swi_slides);
		swi.update();
	}

	rgen.swiper_gallery = function (obj) {
		'use strict';

		var config = {
			autoplay: rgen.getvar($(obj).attr('data-autoplay'), false, 'b'),
			/*speed: rgen.getvar($(obj).attr('data-speed'), 1000, 'n'),
			fullsize: rgen.getvar($(obj).attr('data-fullsize'), false, 'b'),*/
		}
		
		//var galleryTop = new Swiper(obj + ' .gallery-top', {
		var galleryTop = new Swiper(obj, {
			spaceBetween: 10,
			effect: 'slide',
			// Navigation arrows
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},
			simulateTouch: !isNovi ? true : false,
		});
		
		//var galleryThumbs = new Swiper(obj + ' .gallery-thumbs', {
		var galleryThumbs = new Swiper(obj+"_th", {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
			autoplay: config.autoplay,
			simulateTouch: !isNovi ? true : false,
		});

		galleryTop.controller.control = galleryThumbs;

		rgen.swiper_gallery_th(obj, galleryThumbs);
		galleryTop.on('update', function () {
			rgen.swiper_gallery_th(obj, galleryThumbs);
		});

		galleryThumbs.controller.control = galleryTop;

		rgen.slidebg();
	}

	


	/* Swiper widget
	********************************************/
	rgen.slidebg = function () {
		if ($o.slidebg) {
			for (var i = 0; i < $o.slidebg.length; i++) {
				$($o.slidebg[i]).css({ backgroundImage: "url(" + $($o.slidebg[i]).attr("data-slide-bg") + ")" });
			}
		}
	}
	
	if ($o.swiperwidget) {
		for (var i = 0; i < $o.swiperwidget.length; i++) {
			// SET ID ON ALL OBJECTS
			var swiObj = 'swiper' + i;
			//$($o.swiperwidget[i]).css({ opacity: 0 }).attr("id", swiObj).addClass(swiObj);
			$($o.swiperwidget[i]).find('.swiper-container').attr("id", swiObj).addClass(swiObj);
			rgen.swiper_slider("#" + swiObj);
		}
	}
	// Swiper gallery mode
	if ($o.swipergallery) {
		for (var i = 0; i < $o.swipergallery.length; i++) {
			// SET ID ON ALL OBJECTS
			var swiGal = 'swiperGallery' + i,
				swiGal_th = 'swiperGallery' + i + "_th";
			//$($o.swipergallery[i]).css({ opacity: 0 }).attr("id", swiGal).addClass(swiGal);
			$($o.swipergallery[i]).find('.gallery-top').attr("id", swiGal).addClass(swiGal);
			$($o.swipergallery[i]).find('.gallery-thumbs').attr("id", swiGal_th).addClass(swiGal);
			rgen.swiper_gallery("#" + swiGal);
		}
	}
	
	
	/* RGEN TABS
	********************************************/
	rgen.tabs = function (obj) {
		'use strict';

		if ($(obj.tb).hasClass('tabs-auto')) {
			var t = 0,
				tb_activeClass = $(obj.tb).attr('data-tb-active') ? 'active '+$(obj.tb).attr('data-tb-active') : 'active',
				pn_activeClass = $(obj.tb).attr('data-pn-active') ? 'active '+$(obj.tb).attr('data-pn-active') : 'active',
				
				tb_normalClass = $(obj.tb).attr('data-tb-normal') ? $(obj.tb).attr('data-tb-normal') : '',
				pn_normalClass = $(obj.tb).attr('data-pn-normal') ? $(obj.tb).attr('data-pn-normal') : '';

			$(obj.tb).find('.tb-list > .tb').each(function () {
				var tb = obj.count + '-tb-' + t;
				$(this).attr("data-tb", '#' + tb);
				$(this).addClass(tb_normalClass);
				$(obj.tb).find('.tb-content > .tb-pn:eq(' + t + ')').attr("id", tb);
				t++;
			});

			$(obj.tb).on('click', '.tb-list > .tb', function (e) {
				e.preventDefault();

				$(this).closest('.tb-list').find('.tb').removeClass(tb_activeClass).addClass(tb_normalClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tb-pn').removeClass(pn_activeClass);
				target.addClass(pn_activeClass);

			});
			if ($(obj.tb).find('.tb-list > .tb').hasClass(tb_activeClass)) {
				$(obj.tb).find('.tb-list > .tb.active').click();
			} else {
				$(obj.tb).find('.tb-list > .tb:first').click();
			};

		} else {

			$('[data-tb]').each(function (index, el) {
				var target = $(this).attr('data-tb');
				$(target).addClass('tab-pn');
			});
			$(obj).on('click', function (e) {
				e.preventDefault();

				var	tb_activeClass = $(obj).attr('data-tb-active') ? 'active '+$(obj).attr('data-tb-active') : 'active',
					pn_activeClass = $(obj).attr('data-pn-active') ? 'active '+$(obj).attr('data-pn-active') : 'active',
					tb_normalClass = $(obj).attr('data-tb-normal') ? $(obj).attr('data-tb-normal') : '',
					pn_normalClass = $(obj).attr('data-pn-normal') ? $(obj).attr('data-pn-normal') : '';

				$(obj).closest('.tab-widget').find('[data-tb]').addClass(tb_normalClass).removeClass(tb_activeClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tab-pn').addClass(tb_normalClass).removeClass(pn_activeClass).hide();
				target.show().removeClass(tb_normalClass).addClass(pn_activeClass);

			}).eq(0).click();
		};

	}



	/* Tab widget
	********************************************/
	if ($o.tabwidget) {
		for (var i = 0; i < $o.tabwidget.length; i++) {
			rgen.tabs($($o.tabwidget[i]).find('[data-tb]'));
		}
	}

	if ($o.tabsauto) {
		for (var i = 0; i < $o.tabsauto.length; i++) {
			var tabObj = {
				count: i,
				tb: $o.tabsauto[i]
			}
			rgen.tabs(tabObj);
		}
	}
	
	/* SWIPER SLIDER JS
	********************************************/
	rgen.accordion = function (obj) {
		'use strict';

		function close_acc(parent_obj) {
			$(parent_obj).find('.acc-hd').removeClass('active');
			$(parent_obj).find('.acc-content').stop().slideUp(200).removeClass('open');
		}

		$(obj).animate({ opacity: 1 }, 500, function () { });

		$(obj).on('click', '.acc-hd', function (e) {
			e.stopPropagation();
			e.preventDefault();

			var content = $(this).attr('data-accid');
			if ($(this).is('.active')) {
				close_acc(obj);
			} else {
				close_acc(obj);

				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$(obj).find(content).stop().slideDown(200).addClass('open');
			}

		});

		// First open option
		if ($(obj).attr("data-acc-firstopen") == 'y') {
			$(obj).find(".acc-block:first .acc-hd").click();
		} else {
			close_acc(obj);
		}

	}


	/* Accordion widget
	********************************************/
	if ($o.accordionwidget) {
		for (var i = 0; i < $o.accordionwidget.length; i++) {
			// SET ID ON ALL OBJECTS
			rgen.setId($o.accordionwidget[i], 'accwidget', i);
			rgen.accordion($o.accordionwidget[i]);
		}
	}
	if (!isNovi) {
		var captcha = $(".g-recaptcha").length;
		if (captcha > 0) {
			$.getScript("//www.google.com/recaptcha/api.js", function () {

			});
		}
		
		/* FORM JS
		********************************************/
		rgen.global_validation = {
			form: '',
			rules: {
				email: { required: true, email: true },
				name: { required: true },
				message: { required: true },
				phone: { required: true, number: true },
				date: { required: true, date: true },
				datetime: { required: true, date: true },
				people: { required: true, number: true }
			},
			msgpos: 'normal',
			msg: {
				email: { email: "Please, enter a valid email" }
			},
			subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
			form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

			successMsg: "",
			errorMsg: "Oops! Looks like something went wrong. Please try again later."
		}

		rgen.formVaidate = function (obj) {
			'use strict';
			var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
			if (msgpos == 'append') {
				$(obj.form).validate({
					onfocusout: false,
					onkeyup: false,
					rules: obj.rules,
					messages: obj.msg,
					highlight: false,
					errorPlacement: function (error, element) {
						if (msgpos == 'append') {
							error.appendTo(element.closest("form").find('.msg-wrp'));
						};
					},
					success: function (element) {
						element.remove();
					}
				});
			} else {
				$(obj.form).validate({
					onfocusout: false,
					onkeyup: false,
					rules: obj.rules,
					messages: obj.msg,
					highlight: false,
					success: function (element) {
						element.remove();
					}
				});
			};
		}

		rgen.resetForm = function (form) {
			'use strict';
			$(form).find('input[type="text"], input[type="email"], textarea').val(null);
		}

		rgen.contactForm = function ($form, formData, validate_data) {
			'use strict';

			if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

			var $btn = $form.find(".btn").button('loading');
			var timer = 4000;

			if ($form.valid()) {
				$.ajax({
					url: $form.attr('action'),
					type: 'POST',
					data: formData,
					success: function (data) {
						if (data.status == 'captcha_error') {
							// Email subscription error messages
							swal("Error!", data.type, "error");
							$btn.button('reset');

						} else if (data.status == 'error') {
							// Email subscription error messages
							swal("Error!", data.type, "error");
							$btn.button('reset');
							rgen.resetForm($form);
						} else {

							swal({
								type: "success",
								title: "Success!",
								text: validate_data.successMsg,
								timer: timer
							})
							.then(function(argument){
								if ($form.attr('data-success-redirect') === 'y') {
									window.location = rgen.config.success_url;
								}
							});

							$btn.button('reset');
							$.magnificPopup.close();
							rgen.resetForm($form);
							if (captcha > 0) {
								grecaptcha.reset();
							}
							//setTimeout(function () { swal.close(); }, timer);
						};
					},
					error: function () {
						swal("Error!", validate_data.errorMsg, "error");
						$btn.button('reset');
						$.magnificPopup.close();
						setTimeout(function () { swal.close(); }, timer);
					}
				});
			} else {
				$form.find("label.error").delay(timer).fadeOut('400', function () {
					$(this).remove();
				});
				$btn.button('reset');
			};
		}

		rgen.formWidget = function (obj) {
			'use strict';

			var config = {
				popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
				form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
				form_selector: obj
			}

			var $form = $(config.form_selector);

			// Validation rules
			rgen.global_validation.form = config.form_selector;
			var validate_data = rgen.global_validation;

			// Pop up form
			if (config.popup_selector) {
				$(config.popup_selector).each(function (index, el) {
					$(this).magnificPopup({
						type: 'inline',
						preloader: false
					});
				});
			};

			// Date and time picker options
			if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {

				var date_script_arr = [
					/*
					http://www.malot.fr/bootstrap-datetimepicker/index.php
					https://github.com/smalot/bootstrap-datetimepicker
					*/
					"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
				];

				rgen.getMultiScripts(date_script_arr, '').done(function () {
					// Date picker
					if ($form.find(".date-pick").length > 0) {
						$form.find(".date-pick").each(function (index, el) {
							$(this).datetimepicker({
								autoclose: true,
								startView: 2,
								minView: 2
							});
						});
					};

					// Date time picker
					if ($form.find(".datetime-pick").length > 0) {
						$form.find(".datetime-pick").each(function (index, el) {
							$(this).datetimepicker({
								autoclose: true
							});
						});
					};
				});
			}
			

			// Form validation
			rgen.formVaidate(validate_data);

			// Form
			$form.find('button').off('click').on('click', function (e) {
				e.preventDefault();
				if (config.form_type == "newsletter") {
					rgen.global_validation.successMsg = rgen.global_validation.subscribe_successMsg;
				} else {
					rgen.global_validation.successMsg = rgen.global_validation.form_successMsg;
				};

				rgen.contactForm($form, $form.serializeObject(), validate_data);
				return false;
			});
		}

		$.fn.serializeObject = function () {
			'use strict';

			var o = {};
			var a = this.serializeArray();
			$.each(a, function () {

				// Field labels
				var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

				// Field values
				if (o[this.name]) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push({ val: this.value, label: field_label } || '');
				} else {
					//o[this.name] = this.value || '';
					o[this.name] = { val: this.value, label: field_label } || '';
				}
			});
			return o;
		};



		/* Form widget
		********************************************/
		if ($o.formwidget) {
			for (var i = 0; i < $o.formwidget.length; i++) {
				$o.formwidget[i]
				rgen.formWidget($o.formwidget[i]);
				if ($('html').hasClass('builder')) {
					$($o.formwidget[i]).find('button').attr('disabled', true);
				} else {
					$($o.formwidget[i]).find('button').attr('disabled', false);
				}
			}
		};
	}
	
	/* VIDEO BACKGROUND JS
	********************************************/
	rgen.videoBg = function (obj, imglist) {
		'use strict';
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			$(obj).css("display", "none");
			/*$(obj).vegas({
				slides: [
					{ src: "images/bg-1.jpg" },
					{ src: "images/bg-2.jpg" },
					{ src: "images/bg-3.jpg" },
					{ src: "images/bg-4.jpg" }
				]
				slides: imglist
			});*/
		}
		else {
			$(obj).css("display", "block");
			if ($(obj).attr('data-videoid')) {
				$(obj).YTPlayer({
					//fitToBackground: true,
	    			videoId: $(obj).attr('data-videoid'),
	    			start: $(obj).attr('data-start') ? parseInt($(obj).attr('data-start')) : 0,
					onReady: function (player) { }
				});
			}
		}
	}


	rgen.vide = function (obj) {
		'use strict';

		var videofile = $(obj).attr("data-vide-src");
		$(obj).animate({ opacity: 1 }, 500, function () { });
		$(obj).vide({
			mp4: videofile,
			webm: videofile,
			ogv: videofile,
			poster: videofile + ".jpg"
		}, {
				volume: 1,
				playbackRate: 1,
				muted: true,
				loop: true,
				autoplay: true,
				position: 'center center', // Similar to the CSS `background-position` property.
				posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
				resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
				bgColor: 'transparent', // Allow custom background-color for Vide div,
				className: '' // Add custom CSS class to Vide div
			});
	}


	/* video background
	********************************************/
	if ($o.videobg) {
		for (var i = 0; i < $o.videobg.length; i++) {
			if ($($o.videobg[i]).attr('data-videoid')) {
				rgen.videoBg($o.videobg[i]);
			}
		}
	};
	if ($o.videwidget) {
		for (var i = 0; i < $o.videwidget.length; i++) {
			rgen.setId($o.videwidget[i], 'videwidget', i);
			rgen.vide($o.videwidget[i]);
		}
	}

	
	
	/* POPUP JS
	********************************************/
	rgen.videoPopup = function (obj) {
		'use strict';
		$(obj).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};

	rgen.inlinePopup = function (obj) {
		'use strict';
		$('body').off('click').on('click', obj, function (e) {
			$(this).magnificPopup({
				type: 'inline',
				preloader: false
			}).click();
		});
	}


	/* Video popup
	********************************************/
	if ($o.videopop) {
		for (var i = 0; i < $o.videopop.length; i++) {
			rgen.videoPopup($o.videopop[i]);
		}
	}


	/* Normal popup
	********************************************/
	if ($o.setpop) {
		for (var i = 0; i < $o.setpop.length; i++) {
			$o.setpop[i]

			var pop = $($o.setpop[i]).attr('href');
			$($o.setpop[i]).magnificPopup({
				type: 'inline',
				preloader: false,
				mainClass: 'mfp-fade',
				callbacks: {
					beforeOpen: function () {
						$(pop).removeClass('animate fadeInDown').addClass('animate fadeInDown');
					}
				}
			});
		}
	}

	/* Search popup
	********************************************/
	if ($o.searchpop) {
		$('[href="#popup-search"].set-popup').on('mfpOpen', function(e /*, params */) {
			$($o.searchpop).closest('.mfp-container').addClass('popup-search');
		});
	}

	$('.zoom-img').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
	});


	/* Simple pop up gallery
	********************************************/
	if (!isNovi) {
		if ($o.popgallerywidget) {
			for (var i = 0; i < $o.popgallerywidget.length; i++) {
				$o.popgallerywidget[i]

				$($o.popgallerywidget[i]).attr("id", 'popgallery' + i).addClass('popgallery' + i);

				$('#popgallery' + i).magnificPopup({
					delegate: '.pop-img',
					type: 'image',
					removalDelay: 300,
					tLoading: 'Loading image #%curr%...',
					mainClass: 'mfp-img-mobile mfp-fade',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function (item) {
							return item.el.attr('title');
						}
					}
				});
			}
		}
	}
	
	
	/* BACKGROUND SLIDERS
	********************************************/
	rgen.bgSlider = function (setting) {
		'use strict';
		setTimeout(function () {
			$(setting.obj).vegas({
				delay: setting.delay,
				slides: setting.slides,
				animation: setting.effect
			});
		}, 1000);

	}



	/* Background slider
	********************************************/
	if ($o.bgslider) {
		for (var i = 0; i < $o.bgslider.length; i++) {
			if ($($o.bgslider[i]).attr('data-bgslider')) {


				var s1 = $($o.bgslider[i]).attr('data-bgslider'),
					s2 = s1.split('|'),
					el = $o.bgslider[i],
					bgslides = [];
				
				$.each(s2, function (index, val) {
					bgslides.push({ src: val });
				});
				
				//console.log(bgslides);
				$(el).vegas({
					delay: 6000,
					slides: bgslides,
					timer: false,
					animation: 'kenburns'
				});
			}
			
		}
	};
	
	/* COUNTDOWN CLOCK
	********************************************/
	rgen.countdown = function (obj) {
		'use strict';

		var o = $(obj);
		var config = {
			day: parseInt(o.attr("data-day"), 10),
			month: parseInt(o.attr("data-month"), 10),
			year: parseInt(o.attr("data-year"), 10),
			hour: parseInt(o.attr("data-hr"), 10),
			min: parseInt(o.attr("data-min"), 10),
			sec: parseInt(o.attr("data-sec"), 10)
		}

		var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date(config.year, config.month - 1, config.day - 1);
		var d = new Date();
		var secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

		var countdownHtml = '<div class="inner-dashboard">';
		countdownHtml += '	<!-- DAYS -->';
		countdownHtml += '	<div class="dash days_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += diffDays > 99 ? '<div class="digit">0</div>' : '';
		//countdownHtml += '<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">days</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- HOURS -->';
		countdownHtml += '	<div class="dash hours_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">hours</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- MINIUTES -->';
		countdownHtml += '	<div class="dash minutes_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">minutes</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- SECONDS -->';
		countdownHtml += '	<div class="dash seconds_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">seconds</span>';
		countdownHtml += '	</div>';
		countdownHtml += '</div>';

		o.html(countdownHtml);

		// DESKTOP CLOCK
		o.countDown({
			targetDate: {
				'day': config.day,
				'month': config.month,
				'year': config.year,
				'hour': config.hour,
				'min': config.min,
				'sec': config.sec
			},
			omitWeeks: true
		});
	}



	/* Countdown
	********************************************/
	if ($o.countdownwidget) {
		for (var i = 0; i < $o.countdownwidget.length; i++) {
			$($o.countdownwidget[i]).children('div').attr("id", 'countdown' + i);
			rgen.countdown("#countdown" + i);
		}
	}
	
	/* FILTAERABLE ITEMS
	********************************************/
	rgen.filter = function (obj) {
		'use strict';

		$(obj).animate({ opacity: 1 }, 500, function () { });
		var filterObj = $(obj);
		var container = filterObj.find('.filter-container');
		var list = filterObj.find('.filter-list');
		var time = 500;

		list.find('[data-filter]').on('click', function (event) {
			event.preventDefault();

			var filter = $(this).attr("data-filter");

			list.find("[data-filter]").removeClass('active');
			$(this).addClass('active');

			container.find('.filter-content').stop().animate({ opacity: 0 }, 150, function () {
				$(this).hide();
				if (filter == 'all') {
					container.find('.filter-content').show().stop().animate({ opacity: 1 }, time);
				} else {
					$(filter).show().stop().animate({ opacity: 1 }, time);
				}
			});

		});

		list.find('.active') ? list.find('.active').trigger('click') : list.find('[data-filter]').first().trigger('click');
	}



	/* Filter widget
	********************************************/
	if ($o.filterwidget) {
		for (var i = 0; i < $o.filterwidget.length; i++) {
			$o.filterwidget[i]
			rgen.setId($o.filterwidget[i], 'filterwidget', i);
			rgen.filter($o.filterwidget[i]);
		}
	}
	/**
	 * Initialize All Scripts
	 */
	var maps = document.querySelectorAll(".google-map-container");
	if (maps.length) {
		$.getScript("//maps.google.com/maps/api/js?key=AIzaSyAwH60q5rWrS8bXwpkZwZwhw9Bw0pqKTZM&sensor=false&libraries=geometry,places&v=3.7", function () {
			var head = document.getElementsByTagName('head')[0],
					insertBefore = head.insertBefore;
	
			head.insertBefore = function (newElement, referenceElement) {
				if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
					return;
				}
				insertBefore.call(head, newElement, referenceElement);
			};
			
			var geocoder = new google.maps.Geocoder;
			for (var i = 0; i < maps.length; i++) {
				var zoom = parseInt(maps[i].getAttribute("data-zoom")) || 11;
				var styles;
				if (maps[i].hasAttribute('data-styles')){
					try {
						styles = JSON.parse(maps[i].getAttribute("data-styles"));
					}
					catch (error){
						styles = [];
					}
				}
				var center = maps[i].getAttribute("data-center");
				
				// Initialize map
				var map = new google.maps.Map(maps[i].querySelectorAll(".google-map")[0], {
					zoom: zoom,
					styles: styles,
					scrollwheel: false,
					center: {lat: 0, lng: 0}
				});
				// Add map object to map node
				maps[i].map = map;
				maps[i].geocoder = geocoder;
				maps[i].google = google;
				
				// Get Center coordinates from attribute
				getLatLngObject(center, null, maps[i], function (location, markerElement, mapElement) {
					mapElement.map.setCenter(location);
				})
	
				// Add markers from google-map-markers array
				var markerItems = maps[i].querySelectorAll(".google-map-markers li");
				if (markerItems.length){
				var markers = [];
				for (var j = 0; j < markerItems.length; j++){
					var markerElement = markerItems[j];
					getLatLngObject(markerElement.getAttribute("data-location"), markerElement, maps[i], function(location, markerElement, mapElement){
						var icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
						var activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
						var info = markerElement.getAttribute("data-description") || "";
						var infoWindow = new google.maps.InfoWindow({
							content: info
						});
						markerElement.infoWindow = infoWindow;
						var markerData = {
							position: location,
							  map: mapElement.map
						}
						if (icon){
						  markerData.icon = icon;
						}
						var marker = new google.maps.Marker(markerData);
						markerElement.gmarker = marker;
						markers.push({markerElement: markerElement, infoWindow: infoWindow});
						marker.isActive = false;
						// Handle infoWindow close click
						google.maps.event.addListener(infoWindow,'closeclick',(function(markerElement, mapElement){
							var markerIcon;
							markerElement.gmarker.isActive = false
							if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")){
								markerElement.gmarker.setIcon(markerIcon);
							}
						}).bind(this, markerElement, mapElement));
					
						
							// Set marker active on Click and open infoWindow
							google.maps.event.addListener(marker, 'click', (function(markerElement, mapElement) {
								if (markerElement.infoWindow.getContent().length === 0) return;
								var gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
								for (var k =0; k < markers.length; k++){
									var markerIcon;
									if (markers[k].markerElement === markerElement){
										currentInfoWindow = markers[k].infoWindow;
									}
									gMarker = markers[k].markerElement.gmarker;
									if (gMarker.isActive && markers[k].markerElement !== markerElement){
										gMarker.isActive = false;
										if (markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")){
											gMarker.setIcon(markerIcon);
										}
											markers[k].infoWindow.close();
									}
								}
	
								currentMarker.isActive = !currentMarker.isActive;
								if (currentMarker.isActive) {
									if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")){
										currentMarker.setIcon(markerIcon);
									}
									
										currentInfoWindow.open(map, marker);
								}else{
									if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")){
										currentMarker.setIcon(markerIcon);
									}
										currentInfoWindow.close();
								}
							}).bind(this, markerElement, mapElement))
					})
				}	
				}
			}
		});
	}
	
	function getLatLngObject(str, marker, map, callback) {
		var coordinates = {};
		try {
			coordinates = JSON.parse(str);
			callback(new google.maps.LatLng(
						coordinates.lat,
						coordinates.lng
					), marker, map)
		} catch (e) {
			map.geocoder.geocode({'address': str}, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();
	
					callback(new google.maps.LatLng(
						parseFloat(latitude),
						parseFloat(longitude)
					), marker, map)
				}
			})
		}
	}
	
	/* Lazy load images
	********************************************/
	rgen.blazyload = function (obj){
		'use strict';

		var bLazy = new Blazy({
			loadInvisible: true,
			success: function(ele){
				if ($(obj).hasClass('owl-carousel')) {
					$(obj).find('.owl-nav').css({
						top: $(obj).find('.owl-stage-outer').outerHeight() / 2
					});
				}
			}
		});
	}

	if ($o.bLazy) {
		rgen.blazyload();
	}
	
	
	/* Banner grids
	********************************************/
	if ($o.masonry) {
		$($o.masonry).each(function(index, el) {

			var masonry_wrp = $(this).closest('.masonry-wrp');
			
			masonry_wrp.css({
				opacity: 0,
			});

			var $mGrid = $(this).imagesLoaded()
			.always( function( instance ) {
				//console.log('all images loaded');
			})
			.done( function( instance ) {
				//console.log('all images loaded');
			})
			.fail( function() {
				//console.log('all images loaded, at least one is broken');
			})
			.progress( function( instance, image ) {
				
			});

			masonry_wrp.animate({
				opacity: 1},
				600, function() {
				$mGrid.isotope({
					itemSelector: '.masonry-item',
					percentPosition: true,
					stagger: 30,
					layoutMode: 'packery',
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					}
				});
			});

			

			$(masonry_wrp).on('click', '.filters [data-filter]', function(event) {
				event.preventDefault();
				
				$(masonry_wrp).find('.filters [data-filter]').removeClass('active');
				$(this).addClass('active');

				var filterValue = $(this).attr('data-filter');
				// use filterFn if matches value
				$mGrid.isotope({ filter: filterValue });
			});
		});
		
	}
	
	/* Quick utilities
	********************************************/
	/*var bgholder = '';
		bgholder += '<div class="bg-holder full-wh z1">';
		bgholder += '	<b data-bgholder="overlay" class="full-wh z3" data-bgcolor="rgb(45, 51, 69, 0.2)"></b>';
		bgholder += '	<b data-bgholder="bg-img" data-bg="images/bg10.png" class="full-wh bg-cover bg-cc bg-dark rgen-bg z1"></b>';
		bgholder += '</div>';

	if ($o.section) {
		for (var i = 0; i < $o.section.length; i++) {
			var sec = $($o.section[i]);
			if (sec.children('.bg-holder').length === 0) {
				sec.append(bgholder);
			}
		}
	}*/
	if ($o.bgimg) {
		for (var i = 0; i < $o.bgimg.length; i++) {
			rgen.bgimg($o.bgimg[i]);
			//$($o.bgimg[i]).css({ backgroundImage: "url(" + $($o.bgimg[i]).attr("data-bg") + ")" });
			//$($o.bgimg[i]).css({ backgroundImage: "url(" + $($o.bgimg[i]).attr("data-rgenbackground") + ")" });
		}
	}
	/*var bgimg = document.querySelectorAll('[data-rgenbackground]');
	
	if (bgimg.length > 0) {
		console.log(bgimg);
		for (var i = 0; i < bgimg.length; i++) {
			bgimg[i].style.backgroundImage = "url('"+bgimg[i].getAttribute("data-rgenbackground")+"')";
		}
	}*/

	if ($o.bgcolor) {
		for (var i = 0; i < $o.bgcolor.length; i++) {
			$($o.bgcolor[i]).css({ backgroundColor: $($o.bgcolor[i]).attr("data-bgcolor") });
		}
	}
	
	if ($o.txtcolor) {
		for (var i = 0; i < $o.txtcolor.length; i++) {
			$($o.txtcolor[i]).css({ color: $($o.txtcolor[i]).attr("data-txtcolor") });
		}
	}
	if ($o.hoverclass) {
		for (var i = 0; i < $o.hoverclass.length; i++) {
			var hov_class = $($o.hoverclass[i]).attr('data-hover-class');
			$($o.hoverclass[i]).hover(
				function() {
					$(this).addClass(hov_class);
				}, function() {
					$(this).removeClass(hov_class);
				}
			);
		}
	}
	
	if ($o.gradient) {
		for (var i = 0; i < $o.gradient.length; i++) {
			$o.gradient[i]

			var grd_colors = $($o.gradient[i]).attr('data-g-colors'),
				grd_color = grd_colors.split('|');
			$($o.gradient[i]).css({
				//background: grd_color[0],
				//background: "-moz-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
				//background: "-webkit-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
				background: "linear-gradient(to bottom, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
				//filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + grd_color[0] + "', endColorstr='" + grd_color[1] + "',GradientType=0 )"
			});
		}
	}


	/* Animated element
	********************************************/
	if ($o.elanimate) {
		for (var i = 0; i < $o.elanimate.length; i++) {

			var animateobj = $($o.elanimate[i]),
				animatein = animateobj.attr('data-animate-in'),
				animatearr = animatein.indexOf('|') > -1 ? animatein.split('|') : animatein,
				animateclass = typeof animatearr == 'object' ? animatearr[0] : animatearr,
				animatedelay = typeof animatearr == 'object' ? animatearr[1] : 0;

			animateobj.css({
				'-webkit-animation-delay': animatedelay + 's',
				'animation-delay': animatedelay + 's'
			});

			animateobj.viewportChecker({
				classToAdd: 'animated ' + animateclass,
				offset: 100
			});
		}
	}
	
	/* Parallax background image
	********************************************/
	if ($o.stellar) {

		for (var i = 0; i < $o.stellar.length; i++) {
			$($o.stellar[i]).parent().css({ overflow: 'hidden' });
		}
		
		
		//data-stellar-horizontal-offset="40"
		//data-stellar-vertical-offset="150"
		$.stellar({
			positionProperty: 'transform',
			horizontalScrolling: false,
			hideDistantElements: false
		});
	}


	/**
	* Material Parallax
	* @description Enables Material Parallax plugin
	*/
	if ($o.parallax) {
		if (!isNovi && !isIE && !isMobile) {
			for (var i = 0; i < $o.parallax.length; i++) {
				$($o.parallax[i]).parallax();
			}
		} else {
			for (var i = 0; i < $o.parallax.length; i++) {
				var parallax = $($o.parallax[i]),
				  	imgPath = parallax.data("parallax-img");

				parallax.css({
					"background-image": 'url(' + imgPath + ')',
					"background-attachment": "fixed",
					"background-size": "cover"
				});
			}
		}
	}
	
	/* Count box
	********************************************/
	if ($o.countbox) {
		/*var counterup_script_arr = [
			"//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js",
			"lib/counter-up/jquery.counterup.min.js"
		];

		rgen.getMultiScripts(counterup_script_arr, '').done(function () {
			$o.countbox.find('.count').counterUp();
		});*/
		
		//$('.count-box .count').counterUp();
		//
		var count_obj = document.querySelectorAll(".count-box");

		for (var i = 0; i < count_obj.length; i++) {
			var count_b = count_obj[i], //$($o.countbox[i]),
				count_o = $(count_b).find('.count'),
				count_val = parseInt(count_o.text()),
				count_prefix = count_o.attr('data-prefix'),
				count_suffix = count_o.attr('data-suffix'),

				options = {
					useEasing: true, 
					useGrouping: true, 
					separator: ',', 
					decimal: '.', 
					prefix: count_prefix ? count_prefix : '', 
					suffix: count_suffix ? count_suffix : '' 
				};


			// Params: Obj | Start val | End val | Decimals | Duration | options;
			var count_box = new CountUp(count_b.querySelector(".count"), 0, count_val, 0, 3, options);

			if (!count_box.error) {
				count_box.start();
			} else {
				console.error(count_box.error);
			}
		}
		
	};
		


		/* RESPONSIVE
		********************************************/
		enquire.register("screen and (min-width: 992px)", {
			match : function() {
				if ($o.menuwrp) {
					var $menu = $('.menu');
					rgen.menuFn($menu);
				}

				if ($('html').hasClass('data-sticky')) {
					/* Change sticky with scroll for small screens */
					$('.main-head').attr('data-sticky', 'y').removeAttr('data-sticky-scroll', 'y');
					$('[data-sticky]').addClass('fixed-top');
				}
			},
			unmatch : function() {}
		}).register("(min-width: 200px) and (max-width: 991px)", {
			match : function() {
				if ($o.menuwrp) {
					var $menu = $('.menu');
					$menu.find('.has-dropdown').off('mouseenter');
					$menu.find('.has-dropdown').off('mouseleave');
					$menu.removeAttr('style');
				}

				rgen.mobmenu('.nav-handle');
				$('html').addClass('data-sticky');
				$('[data-sticky]').removeClass('fixed-top');

				/* Change sticky with scroll for small screens */
				$('.main-head').removeAttr('data-sticky').attr('data-sticky-scroll', 'y');
			},  
			unmatch : function() {
				$('[data-sticky]').addClass('fixed-top');
				if ($o.menuwrp) {
					var $menu = $('.menu');
					rgen.menuFn($menu);
				}
			}
		});	


		
	} else {
		$o.r ? rgen.demo() : $('html').html('');
	}

	});
})();