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
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        dots: true
    });
});