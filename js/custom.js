/*
* ----------------------------------------------------------------------------------------
Author       : MOHAMAD MUQIIT FATURRAHMAN
© 2017 Licensed | Muqiit.
* ----------------------------------------------------------------------------------------
*/


/*
* ----------------------------------------------------------------------------------------
* 01.PRELOADING

* 02. SMOOTHSCROLLING

* 03. NICESCROLL

* 04. NAVIGATION

* 05. TYPED WRITER

* 06. SKILLBAR

* 07. ISOTOPE

* 08. MAGNIFIC POPUP
* ----------------------------------------------------------------------------------------
*/



/*
* ----------------------------------------------------------------------------------------
* 01.PRELOADING
* ----------------------------------------------------------------------------------------
*/
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#4db6ac');
    }, 2500);

});

/*
* ----------------------------------------------------------------------------------------
* 02.SMOOTH SCROLLING
* ----------------------------------------------------------------------------------------
*/
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

/*
* ----------------------------------------------------------------------------------------
* 03.NICESCROLL
* ----------------------------------------------------------------------------------------
*/
$("html").niceScroll({
    scrollspeed: 150,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#4db6ac',
    autohidemode: true,
    zindex: 999999999,
    horizrailenabled: false,
    cursorborderradius: 0
});

/*
* ----------------------------------------------------------------------------------------
* 04.NAVIGATION
* ----------------------------------------------------------------------------------------
*/
$(window).on('scroll', function() {
    if ($(".navbar").offset().top > 300) {
        $(".navbar").addClass("navbar-inverse");
    } else {
        $(".navbar").removeClass("navbar-inverse");
    }
});
$(window).bind('DOMContentLoaded load resize', function() {
    if ($(window).innerWidth() <= 769) {
        $(".navbar").addClass("navbar-inverse");
    } else {
        $(".navbar").removeClass("navbar-inverse");
    }
});

/*
* ----------------------------------------------------------------------------------------
* 05.TYPED WRITER
* ----------------------------------------------------------------------------------------
*/
$(function() {
    $(".typed").typed({
        strings: ["M. Muqiit", "Coding"],
        typeSpeed: 80,
        backSpeed: 80,
        showCursor: true,
        loop: true
    });
});

/*
* ----------------------------------------------------------------------------------------
* 06.SKILLBAR
* ----------------------------------------------------------------------------------------
*/
jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});

/*
* ----------------------------------------------------------------------------------------
* 07.ISOTOPE
* ----------------------------------------------------------------------------------------
*/
$(window).load(function() {
    var $container = $('.port-container');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});

/*
* ----------------------------------------------------------------------------------------
* 08.MAGNIFIC POPUP
* ----------------------------------------------------------------------------------------
*/
$('.overlay').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});
