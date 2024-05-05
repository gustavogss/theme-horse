/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR EQUESTRIAN                       |||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/



"use strict";



//Submenu Dropdown Toggle
if($('.main-header li.dropdown ul').length){
    $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');

}



//Mobile Nav Hide Show
if($('.mobile-menu').length){

    $('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Dropdown Button
    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
    });
    
    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function() {
        $('body').addClass('mobile-menu-visible');
    });

    
    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
        $('body').removeClass('mobile-menu-visible');
    });
}






// Scroll to a Specific Div
if($('.scroll-to-target').length){
    $(".scroll-to-target").on('click', function() {
        var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
           scrollTop: $(target).offset().top
        }, 1000);

    });
}




function SmoothMenuScroll () {
    var anchor = $('.scrollToLink');
    if(anchor.length){
        anchor.children('a').bind('click', function (event) {
            if ($(window).scrollTop() > 10) {
                var headerH = '80';
            }else {
                var headerH = '80';
            }
            var target = $(this);
            $('html, body').stop().animate({
                scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
            }, 1200, 'easeInOutExpo');
            anchor.removeClass('current');
            target.parent().addClass('current');
            event.preventDefault();
        });
    }
}

function OnePageMenuScroll () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.mainmenu.one-page-scroll-menu .scrollToLink').find('a').each(function (){
            // grabing section id dynamically
            var sections = $(this).attr('href');
            $(sections).each(function() {
                // checking is scroll bar are in section
                if ($(this).offset().top <= windscroll + 100) {
                    // grabing the dynamic id of section
                    var Sectionid = $(sections).attr('id');
                    // removing current class from others
                    $('.mainmenu').find('li').removeClass('current');
                    // adding current class to related navigation
                    $('.mainmenu').find('a[href*=\\#'+Sectionid+']').parent().addClass('current');
                }
            });
        });
    } else {
        $('.mainmenu.one-page-scroll-menu li.current').removeClass('current');
        $('.mainmenu.one-page-scroll-menu li:first').addClass('current');
    }
}




// body-layout
function bodylayout() {
    if ($('.boxed_switch_menu').length) {

        $('.body_switch_btn button').on('click', function() {
            $('.body_switcher').toggleClass('switcher-show')
        });

        $("#myonoffswitch").on('click', function() {
            $(".fixed").toggleClass("static");
        });

        $("#boxed").on('click', function() {
            $(".main_page").addClass("active_boxlayout");
            $('body').addClass('bg')
        });
        $("#full_width").on('click', function() {
            $(".main_page").removeClass("active_boxlayout");
            $('body').removeClass('bg')
        });
    };
}

// color switcher
function swithcerMenu () {
    if ($('.switch_menu').length) {

        $('.switch_btn button').on('click', function(){
        $('.switch_menu').toggle(500)
        });

        $('#styleOptions').styleSwitcher({
        hasPreview: true,
        fullPath: 'assets/css/color/',
            cookie: {
            expires: 30,
            isManagingLoad: true
            }
        });

    };
}






//Update Header Style and Scroll to Top
function headerStyle() {
    if($('.main-header').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.main-header');
        var scrollLink = $('.scroll-top');
        if (windowpos >= 350) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}
headerStyle();


//Accordion Box
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.accord-btn', function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}


//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
            }

        });
    };
}


//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
}


// Date picker
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



// Time picker
function timepicker () {
    if ($('input[name="time"]').length) {
        $('input[name="time"]').ptTimeSelect();
    }
}



// ===Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
}



//  Fact counter
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}



// Single Product Tab
function singleProductTab () {
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }
}



// Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}






// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}



//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}



function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}


// Select Menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('.filter-text').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            var count = $('.filter-layout').find(filterElement).length;
            $(this).children('.filter-text').append('<span class="count">' + count + '</span>');
        });
    };
}








/////////////////////////////
//Universal Code for All Owl Carousel Sliders
/////////////////////////////

if ($('.theme-carousel').length) {
        $(".theme-carousel").each(function (index) {
        var $owlAttr = {},
        $extraAttr = $(this).data("options");
        $.extend($owlAttr, $extraAttr);
        $(this).owlCarousel($owlAttr);
    });
}



// Main Slider Carousel
if ($('.banner-carousel').length) {
    $('.banner-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:0,
        dots: false,
        nav:true,
        singleItem:true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout:6000,
        navText: [ '<span class="fas fa fa-angle-left"></span>', '<span class="fas fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1024:{
                items:1
            }
        }
    });    		
}



























if ($('.products-box .bxslider2').length) {
	$('.products-box .bxslider2').bxSlider({
        nextSelector: '.products-box #slider-next',
        prevSelector: '.products-box #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'horizontal',
        auto: 'true',
        speed: '700',
        pagerCustom: '.products-box .slider-pager .thumb-box'
    });
};
	


//Hidden Sidebar
if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    var navToggler = $('.nav-toggler');
    $('.hidden-bar-wrapper').mCustomScrollbar();

    //Show Sidebar
    hiddenBarOpener.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });

    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });
} 
    


//Single Vertical Carousel
if($('.single-vertical-carousel').length){
    $('.single-vertical-carousel').slick({
    dots: false,
    autoplay: true,
    loop:true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: true,
    slidesToShow: 1,
    vertical:true,
    slidesToScroll: 1,
    prevArrow:"<div class='prev-btn'><span class='fa fa-angle-up'></span></div>",
    nextArrow:"<div class='next-btn'><span class='fa fa-angle-down'></span></div>"
  });
}
	




//History Tabs
if($('.history-info-tabs').length){
    $('.history-info-tabs .tab-btns .p-tab-btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));

        if ($(target).hasClass('actve-tab')){
            return false;
        }else{
            $('.history-info-tabs .tab-btns .p-tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.history-info-tabs .p-tabs-content .p-tab').removeClass('active-tab');
            $(target).addClass('active-tab');
        }
    });
}
	


//Fact Counter + Text Count
if($('.count-box').length){
    $('.count-box').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    },{accY: 0});
}


//Accordion Box
if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')){
            return false;
        }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);	
        }
    });	
}



// Lazyload Images
if($('.lazy-image').length){
    new LazyLoad({
        elements_selector: ".lazy-image",
        load_delay: 0,
        threshold: 300
    });
}



//====== Magnific Popup
$('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
});



//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        
        youtube : {
        controls : 0,
        showinfo : 0
    },
        
        helpers : {
            media : {}
        }
    });
}



//Paroller
if($('.paroller').length){
    $('.paroller').paroller({
          factor: 0.05,            // multiplier for scrolling speed and offset, +- values for direction control  
          factorLg: 0.05,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
          type: 'foreground',      // background, foreground  
          direction: 'horizontal'  // vertical, horizontal  
    });
}



// Elements Animation
if($('.wow').length){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
}



// AOS Animation
if ($("[data-aos]").length) { 
    AOS.init({
    duration: 1000,
    mirror: true
  });
}



// Scroll To Explore Div
if($('.scroll-to-explore').length){
    $(".scroll-to-explore").on('click', function() {
        var target = $(this).attr('data-target');
       // animate
       $('html, body').animate({
           scrollTop: $(target).offset().top
         }, 1500);

    });
}



//Contact Form Validation
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



// Add Comment Form Validation
if($("#add-comment-form").length){
    $("#add-comment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}




// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        languageSwitcher ();
        searchbox ();
        datepicker ();
        timepicker ();
        
        CounterNumberChanger ();
        singleProductTab ();
        priceFilter ();
        cartTouchSpin ();
        selectDropdown ();
        tooltip ();
        countryInfo ();
        accordion ();
        SmoothMenuScroll ();
        bodylayout ();
        swithcerMenu ();
     
        
        
   
 
	})(jQuery);
});



jQuery(window).on('scroll', function(){
	(function ($) {

    headerStyle ();  
    OnePageMenuScroll ();  
    
	})(jQuery);
});



// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        prealoader ();
        projectMasonaryLayout ()
   
      
      
     
        
    })(jQuery);
});



$(window).enllax();