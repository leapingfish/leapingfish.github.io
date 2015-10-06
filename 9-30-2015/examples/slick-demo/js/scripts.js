$('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

var windowHeight = $(window).height();
$('.hero-slider').css('height', windowHeight);
$('.hero-slider .slick-slide').css('height', windowHeight);
