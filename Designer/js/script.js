$(document).ready(function() {
  $('#slider').slick({
    autoplay: true,
    arrows: false,
    dots: true
  });

  $('#menuBtn').click(function() {
    $('.mobile-nav').addClass('activeNav');
  });

  $('#closeBtn').click(function() {
    $('.mobile-nav').removeClass('activeNav');
  });
});