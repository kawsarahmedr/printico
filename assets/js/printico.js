(function ($) {
    var defaultFunction = function () {

        $(window).scroll(function () {

            var scrollTopValue = $(this).scrollTop();
            var headerHeight = $('header').outerHeight();
            
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
    // Dom Ready
    $(function () {
        defaultFunction();
        // scrolltopfunction();
        // onScrollTopDisplayHeader();
        darkLightTheme();
    });
})(jQuery);
/*
* The End !
*/