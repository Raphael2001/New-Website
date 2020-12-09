

(function ($) {
    "use strict"; // Start of use strict

    // // Smooth scrolling using jQuery easing
    // $('a.js-scroll-trigger[href*="/#"]:not([href="/#"])').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('').animate({
    //                 scrollTop: (target.offset().top - 56)
    //             }, 1000, "easeInOutExpo");
    //             return false;
    //         }
    //     }
    // });


    $(function () {
        $("#nav-placeholder").load("Objects/nav.html");
    });
    $(function () {
        $("#footer-placeholder").load("Objects/footer.html");
    });

    // Closes responsive menu when a scroll trigger link is clicked

    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });


    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#nav',
        offset: 56
    });

})(jQuery); // End of use strict
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', '#ffffff');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
 });


$(document).ready(function () {


    let $btns = $('.portfolio .button-group button');


    $btns.click(function (e) {

        $('.portfolio .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio .grid').isotope({
            filter: selector
        });

        return false;
    })



});

$.fn.scrollNav = function (margin_top) {

    event.preventDefault();
    var
       goTo = $(this).attr("href"),
       addTop = margin_top | 0;

    $('html, body').animate({
        scrollTop: $(goTo).offset().top + addTop
    }, 700);
}
$('.carousel').carousel({
    interval: 2000
  })

AOS.init({
    duration: 1200,
})
