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
});