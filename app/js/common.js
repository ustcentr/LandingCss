$(function() {

	$('.language-switcher .current-language').click(function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
    });

    $('.main-menu ul').clone().appendTo('.mobile-menu');

    $('.mobile-menu i').click(function () {
        $(this).next().stop().slideToggle();
    });

    $('.middle-menu-row li').click(function () {
        var $this = $(this),
            $container = $this.closest('.first-level'),
            $open = $this.hasClass('open');
        $container.find('li').removeClass('open');
        $container.find('ul').slideUp(200);
        if(!$open){
            $this.addClass('open');
            $this.find('ul').stop().slideDown();
        }
    });

    $('#stories-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        autoHeight: false,
        dots: false,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});
