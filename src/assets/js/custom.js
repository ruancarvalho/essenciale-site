(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // Header Slide
        $(".header-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 5000,
            animateIn: 'pulse',
            animateOut: 'fadeOut',
            smartSpeed: 250
        });

        // Header Slide items with animate.css
        var owl = $('.header-slider');
        owl.owlCarousel();
        owl.on('translate.owl.carousel', function(event) {
            $('.header-single-slider h3').removeClass('animated').hide();
            $('.header-single-slider h1').removeClass('animated').hide();
            $('.header-single-slider p').removeClass('animated').hide();
            $('.header-single-slider .boxed-btn').removeClass('animated').hide();
        });

        owl.on('translated.owl.carousel', function(event) {
            $('.header-single-slider h3').addClass('animated fadeInUp').show();
            $('.header-single-slider h1').addClass('animated fadeInUp').show();
            $('.header-single-slider p').addClass('animated fadeInDown').show();
            $('.header-single-slider .boxed-btn').addClass('animated fadeInUp').show();
        });

        // Product Carousel
        $(".product-carousel").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-long-arrow-alt-left"></i>', '<i class="fa fa-long-arrow-alt-right"></i>'],
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // Search Button
        function expand() {
            $(".search-form .search").toggleClass("close");
            $(".search-form .input").toggleClass("square");
            if ($('.search-form .search').hasClass('close')) {
                $('.search-form input').focus();
            } else {
                $('.search-form input').blur();
            }
        }
        $('.search-form button').on('click', expand);


        // testimonial Carousel
        $(".testimonial-carousel").owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: ['<i class="fa fa-long-arrow-alt-left"></i>', '<i class="fa fa-long-arrow-alt-right"></i>'],
            margin: 30,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 1,
                },
                1000: {
                    items: 1
                }
            }
        });

        // partner-carousel
        $(".partner-carousel").owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2
                },
                700: {
                    items: 4,
                },
                1000: {
                    items: 6
                }
            }
        });

        // MagnificPopup
        $('.gallery-page a.popup').magnificPopup({ type: 'image' });
        $('.product-carousel a.mfp-popup').magnificPopup({ type: 'image' });


        /* --------------------------------------
            Scroll UP
        -------------------------------------- */

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // Search
        var changeClass = function(name) {
            $('#search').removeAttr('class').addClass(name);
        }

        /*------------------------------------
            Search
        --------------------------------------*/

        function buttonUp() {
            var valux = $('.sb-search-input').val();
            valux = $.trim(valux).length;
            if (valux !== 0) {
                $('.sb-search-submit').css('z-index', '99');
            } else {
                $('.sb-search-input').val('');
                $('.sb-search-submit').css('z-index', '-999');
            }
        }

        var submitIcon = $('.sb-icon-search');
        var submitInput = $('.sb-search-input');
        var searchBox = $('.sb-search');
        var isOpen = false;

        $(document).on('mouseup', function() {
            if (isOpen == true) {
                submitInput.val('');
                $('.sb-search-submit').css('z-index', '-999');
                submitIcon.click();
            }
        });

        submitIcon.on('mouseup', function() {
            return false;
        });

        searchBox.on('mouseup', function() {
            return false;
        });

        submitIcon.on('click', function() {
            if (isOpen == false) {
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                isOpen = false;
            }
        });

        /*------------------------------------
            Cart
        --------------------------------------*/

        function overlayToggle() {
            if ($('.cart-overlay').hasClass('active')) {
                $('.cart-overlay').removeClass('active');
            } else {
                $('.cart-overlay').addClass('active');
            }
        }
        $('.cart--open, .cart-overlay, .close-sidenav').on('click', function(e) {
            var $sidecart = $('.sidenav.cart');
            if ($sidecart.hasClass('active')) {
                $sidecart.removeClass('active');
            } else {
                $sidecart.addClass('active');
            }
            overlayToggle();
            e.preventDefault();
        });

        /*------------------------------------
            Sticky Menu
        --------------------------------------*/

        var windows = $(window);
        var stick = $(".header-sticky");
        windows.on('scroll', function() {
            var scroll = windows.scrollTop();
            if (scroll < 10) {
                stick.removeClass("sticky");
            } else {
                stick.addClass("sticky");
            }
        });

        /*------------------------------------
            jQuery MeanMenu
        --------------------------------------*/
        $('.mobile-menu-active').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: '.mobile-menu'
        });

        /* last  2 li child add class */
        $('ul.menu > li').slice(-2).addClass('last-elements');

    });


    jQuery(window).on('load', function() {

        // Sticky Nav
        $(".sticky-nav").sticky({ topSpacing: 0 });

        // // Preloader
        jQuery(".preloader").fadeOut('slow');

    });


}(jQuery));