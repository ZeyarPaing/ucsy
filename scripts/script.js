
var myNav = document.getElementsById('mynav');
window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 20) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  }
  else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

window.onresize = function () {
  document.getElementById("repsize").innerHTML = window.innerWidth;
};


(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

function myFunction(x) {
  x.classList.toggle("change");
}
$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});
