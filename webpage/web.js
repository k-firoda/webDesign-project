$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $(".fade").fadeOut(2000);   
    } else {
        $(".fade").fadeIn(500);
    }
});
