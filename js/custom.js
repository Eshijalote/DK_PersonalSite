
var Layout = function () {


    var handleHeaderOnScroll = function () {
        if ($(window).scrollTop() > 60) {
            $("body").addClass("page-on-scroll");
        } else {
            $("body").removeClass("page-on-scroll");
        }
    }


    var handleOnePageHeader = function () {
        // jQuery to collapse the navbar on scroll
        if ($('.navbar').offset().top > 150) {
            $('.fixed-top').addClass('top-nav-collapse');
        }
        $(window).scroll(function () {
            if ($('.navbar').offset().top > 150) {
                $('.fixed-top').addClass('top-nav-collapse');
            } else {
                $('.fixed-top').removeClass('top-nav-collapse');
            }
        });

        var $offset = 0;
        $offset = $(".fixed-top").height() - 20;

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.js_nav-item a').bind('click', function (event) {
            var $position = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({
                scrollTop: $position - $offset
            }, 600);
            event.preventDefault();
        });

        var $scrollspy = $('body').scrollspy({target: '.fixed-top', offset: $offset + 2});


        $(window).scroll(function () {
            $('.navbar-collapse.in').collapse('hide');
        });
    }




    return {
        init: function () {

            handleHeaderOnScroll();
            handleOnePageHeader();

            $(window).scroll(function () {
                handleHeaderOnScroll();
            });
        }
    };
}();

$(document).ready(function () {
    Layout.init();
});