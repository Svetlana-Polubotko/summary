$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
            items: 4,
            nav: true,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 2000,
            responsive: {
                0: {
                    items: 1
                },
                476: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        }
    );

    $("#about-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $("#cv-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#cv").offset().top
        }, 1000);
    });

    $("#portfolio-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

});


$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $("#next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    $("#prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });
});












// $(window).scroll(function(event) {
//     var utka = $('.sidenav li.active');

//     $(function () {
//       $('.sidenav').scrollTop($(utka).position().top) ;
//     });
// });






