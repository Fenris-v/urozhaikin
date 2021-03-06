$(document).ready(() => {
    /**
     * TABS
     */
    let tabsList = $('.offer__list');
    let tab = $('.offer__tab');
    let tabContent = $('.offer__item');

    tabContent.delay(500).eq(0).fadeIn();

    tabsList.on('click', (e) => {
        e.preventDefault();
        let target = $(e.target);
        if (target.hasClass('offer__tab') && !target.hasClass('offer__tab_active')) {
            tab.removeClass('offer__tab_active');
            target.addClass('offer__tab_active');
            tabContent.fadeOut();
            tabContent.delay(500).eq(target.parents('li').index()).fadeIn();
        }
    });

    /**
     * SLIDER
     */
    $('.feedback__slider').slick({
        slidesToShow: 1,
        arrows: true,
        infinite: true,
        dots: true,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: false
            }
        }]
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', function (e) {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * MODAL
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        }
    });

    /**
     * ANCHOR
     */
    let headerNav = $('.header__nav');
    let headerNavAdaptive = $('.headerNav_adaptive');
    let sDocument = $('body, html');

    let onClickNav = (e) => {
        sDocument.stop(true, false);
        e.preventDefault();
        let id = $(e.target).attr('href'),
            top = $(id).offset().top - 80;
        sDocument.animate({scrollTop: top}, 1500);
        console.log(123);
    };

    headerNavAdaptive.on('click', 'a', (e) => {
        onClickNav(e)
    });

    headerNav.on('click', 'a', (e) => {
        onClickNav(e)
    });
});