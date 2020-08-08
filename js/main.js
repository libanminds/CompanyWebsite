(function ($) {
    "use strict"; // Start of use strict

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        let mainNav = $("#mainNav");
        if (mainNav.offset().top > 100) {
            mainNav.addClass("navbar-scrolled");
        } else {
            mainNav.removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    let owl = $(".owl-carousel");
    // Initialize OWl Carousel
    owl.owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin:10,
        autoHeight:true,
    });
    // keyboard navigation
    $(document.documentElement).keyup(function(event) {
        if (event.keyCode === 37) { /*left key*/
            owl.trigger('prev.owl');
        } else if (event.keyCode === 39) { /*right key*/
            owl.trigger('next.owl');
        }
    });
})(jQuery);