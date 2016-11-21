/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */

$(document).ready(function () {

    /*====================================
    SCROLLING SCRIPTS
    ======================================*/

    $('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });


    /*====================================
    SLIDER SCRIPTS
    ======================================*/


    $('#carousel-slider').carousel({
        interval: 2000 //TIME IN MILLI SECONDS
    });


    /*====================================
    VAGAS SLIDESHOW SCRIPTS
    ======================================*/
    $.vegas('slideshow', {
        backgrounds: [
        { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
        { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
        { src: 'assets/img/3.jpg', fade: 1000, delay: 9000 },
        ]
    })('overlay', {
        /** SLIDESHOW OVERLAY IMAGE **/
        src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
    });


    /*====================================
    POPUP IMAGE SCRIPTS
    ======================================*/
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });


    /*====================================
    FILTER FUNCTIONALITY SCRIPTS
    ======================================*/
    $(window).load(function () {
        var $musiccontainer = $('#music-div');
        $musiccontainer.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.musiccategories a').click(function () {
            $('.musiccategories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $musiccontainer.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

        var $videoscontainer = $('#videos-div');
        $videoscontainer.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.videoscategories a').click(function () {
            $('.videoscategories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $videoscontainer.isotope({
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



    /*====================================
    WRITE YOUR CUSTOM SCRIPTS BELOW
    ======================================*/


    /* Collapse navigation menu on click */
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });






});
