$(function() {

    $(window).scroll(function () {

        var scroll = $(this).scrollTop(),
            socialList = $('.social-list');
        var rt = ($(window).width() - (socialList.offset().left + socialList.outerWidth()));



        if (scroll < $('.bottom-header-container').offset().top + 10) {

            socialList.css({
                'position': 'absolute',
                'top': '0',
                //'right': rt
            });

        }  else {

            socialList.css({
                'position': 'fixed',
                'top': '0',
                //'right': rt

            });
        }
    });

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

    $('.read-more').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            newText = $this.data('text'),
            oldText = $this.text();

        $this.closest('.wrap-btn').prev().stop().slideToggle('slow', function () {
            $this.attr('data-text', oldText).data('text', oldText).text(newText);
        });
    });

    $('#stories-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
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

    $('.checkbox-item').on('click', function () {

        var row = $(this).closest('.checkbox-row');

        row.find('input').each(function () {
            if($(this).prop('checked')){
                $(this).closest('label').addClass('checked');
            } else {
                $(this).closest('label').removeClass('checked');
            }
        });

    });

});
