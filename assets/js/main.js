"use strict";

/****************
*** Preloader ***
****************/

$(window).on('load', function () {
    jQuery( '.animation' ).delay(1000).fadeOut(300, function() {
        jQuery('.preloader').fadeOut(600);
    });
})

/**********************
*** Main Navigation ***
**********************/

 ;(function($){
  $.fn.closestChild = function(selector) {
    var $children, $results;
    
    $children = this.children();
    
    if ($children.length === 0)
      return $();
  
    $results = $children.filter(selector);
    
    if ($results.length > 0)
      return $results;
    else
      return $children.closestChild(selector);
  };
})(window.jQuery);

$('.nav-icon').on('click', function(){
    $(this).toggleClass('open');
    $('.menu-wrapper').fadeToggle(300);
    setTimeout(function() {
        $('.menu-wrapper .menu').closestChild('li').each(function(i) {
            var $li = $(this);
            setTimeout(function() {
                $li.toggleClass('show');
            }, i*150);
        });
    }, 400);
});

$('.has-children a').on('click', function(){
    $(this).next('.submenu').slideToggle(200);
});

/****************
*** Slideshow ***
****************/

$('.slider').owlCarousel({
    items:1,
    autoHeight:true,
    animateOut: 'fadeOut',
    loop:true,
    autoplay:true,
    autoplayTimeout:8500
});

/**************************
*** Portfolio/Blog Grid ***
**************************/

// Filter
$('.filter').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

$('.filter li').on('click', function() {
    $('.filter li.active').removeClass('active');
    $(this).addClass('active');
});

// Load Blog Items
var $posts = $('.posts').isotope({
    itemSelector: '.post',
});

// Append Pots
$posts.imagesLoaded().progress( function() {
    $posts.isotope('layout');
});

// Load Portfolio Items
var $container = $('.grid').isotope({
    itemSelector: '.item',
    transitionDuration: '.5s',
});

// Append Portfolio
$container.imagesLoaded().progress( function() {
    $container.isotope('layout');
});

// Slide in function
$(".slide-in").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

$(window).scroll(function(event) {
    $(".slide-in").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
        el.addClass("show"); 
        } 
    });
});

/******************
*** Latest News ***
******************/

$('.latest-news').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:15,
    autoplay:true,
    autoplayTimeout:3500,
    navText : ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
    }
});

/***********
*** Team ***
***********/

$('.team').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:3500,
    navText : ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        },            
    }
});

/*********************
*** Opacity Images ***
*********************/

$( '.opacity-images .image' ).hover(
  function() {
    $( '.opacity-images .image' ).toggleClass("hover");
    $( this ).removeClass("hover");
  }
);

/*******************
*** About/Skills ***
*******************/

$('.skills figure').each(function() {
    $(this).appear(function() {
        $(this).find('.skill-bar').animate({
            width:jQuery(this).attr('data-percent')
        },1500);
    });
}); 

/******************
*** Google Maps ***
******************/

// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//    // Basic options for a simple Google Map
//    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//    var mapOptions = {
//        // How zoomed in you want the map to start at (always required)
//        zoom: 11,

//        // The latitude and longitude to center the map (always required)
//        center: new google.maps.LatLng(40.6700, -73.9400), // New York

//        // How you would like to style the map. 
//        // This is where you would paste any style found on Snazzy Maps.
//        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
//    };

//    // Get the HTML DOM element that will contain your map 
//    // We are using a div with id="map" seen below in the <body>
//    var mapElement = document.getElementById('map');

//    // Create the Google Map using our element and options defined above
//    var map = new google.maps.Map(mapElement, mapOptions);

//    // Let's also add a marker while we're at it
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(40.6700, -73.9400),
//        map: map,
//        title: 'Snazzy!'
//    });
// }

/***********************
*** Smooth Scrolling ***
***********************/

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });