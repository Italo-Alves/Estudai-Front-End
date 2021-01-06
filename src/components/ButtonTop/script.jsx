import $ from 'jquery';

$(document).ready(function() {
  //Função do Button scrollToTop
  $(window).scroll(() => {
    if ($(this).scrollTop() > 50) {
      $('#toTopButton').fadeIn();
    } else {
      $('#toTopButton').fadeOut();
    }
  });

  $('#toTopButton').click(e => {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    e.preventDefault();
    return false;
  });
});
