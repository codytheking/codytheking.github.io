$(document).ready(function() 
                  {

    /**** Collapse Navbar dropdown once clicked ****/
    $(document).on('click','.navbar-collapse.in',function(e) 
                   {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) 
        {
            $(this).collapse('hide');
        }
    });




    /**** SMOOTH SCROLLING FOR ANCHOR LINKS ****/

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#myCarousel"]')
        .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top + 40 - 30
                }, 1000, function() {
                    // +40 so that scrollspy wasn't slightly off
                    // -30 accounts for space of navbar at top
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /**** END ****/


    /**** Scrollspy ****/
    //$('body').scrollspy('.navbar');
    $('body').scrollspy({
        target: '#myNavbar',
        offset: 50
    });


    (function($) {

        $.fn.menumaker = function(options) {

            var cssmenu = $(this), settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

            return this.each(function() {
                cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
                $(this).find("#menu-button").on('click', function(){
                    $(this).toggleClass('menu-opened');
                    var mainmenu = $(this).next('ul');
                    if (mainmenu.hasClass('open')) { 
                        mainmenu.hide().removeClass('open');
                    }
                    else {
                        mainmenu.show().addClass('open');
                        if (settings.format === "dropdown") {
                            mainmenu.find('ul').show();
                        }
                    }
                });

                cssmenu.find('li ul').parent().addClass('has-sub');

                multiTg = function() {
                    cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    cssmenu.find('.submenu-button').on('click', function() {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open').hide();
                        }
                        else {
                            $(this).siblings('ul').addClass('open').show();
                        }
                    });
                };

                if (settings.format === 'multitoggle') multiTg();
                else cssmenu.addClass('dropdown');

                if (settings.sticky === true) cssmenu.css('position', 'fixed');

                resizeFix = function() {
                    if ($( window ).width() > 768) {
                        cssmenu.find('ul').show();
                    }

                    if ($(window).width() <= 768) {
                        cssmenu.find('ul').hide().removeClass('open');
                    }
                };
                resizeFix();
                return $(window).on('resize', resizeFix);

            });
        };
    })(jQuery);

    (function($){
        $(document).ready(function(){

            $("#cssmenu").menumaker({
                title: "Menu",
                format: "multitoggle"
            });

        });
    })(jQuery);
});
