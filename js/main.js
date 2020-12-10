$(document).ready(function () {
    //PARALLAX
    $('.for__parallax_move').mousemove(function (e) {
        parallax(e, document.getElementById('parallax__move_one'), 1);
        parallax(e, document.getElementById('parallax__move_two'), 2);
        parallax(e, document.getElementById('parallax__move_three'), 3);
    });

    //ABOUT SLIDER
    $('.slick__slider').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        asNavFor: '.slick-nav'
    });
    $('.slick-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        asNavFor: '.slick__slider',
        responsive: [
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            }
        ]
    });

    $('.slick-nav .slick-dots li button').each(function () {
        $(this).text(0 + $(this).text());
        a = $(this).text();
        $(this).html("<span>" + a + "</span>")

    });

    //STAFF SLIDER
    $('.staff__slider').slick({
        infinite: true,
        loop: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 996,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    auplay: true
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    auplay: true
                }
            }
        ]
    });

//   MOBILE NAV TOGGLE
    $('.navbar-toggler').click(function () {
        $('#magiheader').slideToggle()
    })
});
//PARALLAX
function parallax(e, target, layer) {
    var layer_coeff = 200 / layer;
    var x = e.pageX / layer_coeff;
    $(target).css({right: x});
}