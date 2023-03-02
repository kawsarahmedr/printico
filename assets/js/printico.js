(function ($) {
    var defaultFunction = function () {

        var headerHeight = $('header').outerHeight();
        $('.hero-section').css("margin-top", - headerHeight);

        $(window).scroll(function () {

            var scrollTopValue = $(this).scrollTop();
            
            if (scrollTopValue > 200) {

                $('#header').addClass('fixed-top');
                $('body').css("padding-top", headerHeight);

            } else {

                $('#header').removeClass('fixed-top');
                $('body').css("padding-top", '0');

            }

        });

    }
    // When the user clicks on the button, scroll to the top of the document
    var scrolltopfunction = function () {

        $(window).scroll(function () {

            var scrollTopValue = $(this).scrollTop();
            if (scrollTopValue > 150) {
                $('#gototop').addClass('active');
            } else {
                $('#gototop').removeClass('active');
            }

        });

        $('#gototop').on("click", function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    }

    var onScrollTopDisplayHeader = function () {
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 1;
        var navbarHeight = $('header').outerHeight();
        $(window).scroll(function (event) {
            didScroll = true;
        });
        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        function hasScrolled() {
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('.header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down');
                }
                if (st < navbarHeight) {
                    $('.header').removeClass('nav-down');
                }
            }
            lastScrollTop = st;
        }
    }
    var darkLightTheme = function () {

        $('#darkLightSwitch').on("click", function () {
           
            if (document.documentElement.getAttribute('data-theme') == 'dark') {

                document.documentElement.setAttribute('data-theme', 'light');
                document.documentElement.setAttribute('data-bs-theme', 'light');
                this.classList.remove("dark-theme");

            }
            else {

                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.setAttribute('data-bs-theme', 'dark');
                this.classList.add("dark-theme");
                
            }
        });
    }
    var particles = Particles.init({

        // normal options
        selector: '.background',
        color: ['#B21980', '#404B69', '#DBEDF3'],
        maxParticles: 400,
        speed: 0.5,
        sizeVariations: 4,
        minDistance: 120,
        connectParticles: false,
        
        // options for breakpoints
        responsive: [{
            breakpoint: 768,
            options: {
            maxParticles: 200,
            color: '#48F2E3',
            connectParticles: false
            }
        },{
            breakpoint: 425,
            options: {
            maxParticles: 100,
            connectParticles: true
            }
        },{
            breakpoint: 320,
            options: {
                maxParticles: 0
                // disables particles.js   
            }
        }]

    });
    
    // Dom Ready
    $(function () {
        defaultFunction();
        // scrolltopfunction();
        // onScrollTopDisplayHeader();
        darkLightTheme();
        particles();
    });
})(jQuery);
/*
* The End !
*/