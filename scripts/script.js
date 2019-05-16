$(window).scroll(function () {
    if ($(document).scrollTop() > 250) {
      $('nav').addClass('navscroll');
    }
    else {
      $('nav').removeClass('navscroll');
    }
});





