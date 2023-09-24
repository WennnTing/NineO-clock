$(document).ready(function () {
    $(window).scroll(function () {
        let scroll_top = $(window).scrollTop()
        // console.log(scroll_top)

        if (scroll_top >= 86) {
            // alert(123)
            $('.header').addClass("header_sticky")
        } else {
            $('.header').removeClass('header_sticky')
        }
    });
    $('.header')
});