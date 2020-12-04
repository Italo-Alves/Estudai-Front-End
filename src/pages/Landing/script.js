import $ from 'jquery';

$(document).ready(function () {
  //Função do Button scrollToTop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#toTopButton').fadeIn();
    } else {
      $('#toTopButton').fadeOut();
    }
  });

  $('#toTopButton').click(function (e) {
    $('html, body').animate({ scrollTop: 0 }, 500);
    e.preventDefault();
    return false;
  });
});
