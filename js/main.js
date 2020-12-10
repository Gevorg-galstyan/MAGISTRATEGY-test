$(document).ready(function () {
    $('.for__parallax_move').mousemove(function (e) {
        parallax(e, document.getElementById('parallax__move_one'), 1);
        parallax(e, document.getElementById('parallax__move_two'), 2);
        parallax(e, document.getElementById('parallax__move_three'), 3);
    });
    $('.slick-slider').slick({
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
        asNavFor: '.slick-slider'
    });
    $('.slick-dots li button').each(function () {
         $(this).text(0 + $(this).text());
        a = $(this).text();
        $(this).html("<span>"+a+"</span>")

    });
    $('.staff__slider').slick({
        infinite: true,
        loop: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 200 / layer;
    var x = e.pageX / layer_coeff;
    $(target).css({right: x});
}