import $ from 'jquery';

$(document).ready(function () {
  $('[data-toggle="offcanvas"], #navToggle').on('click', () => {
    $('.offcanvas-collapse').toggleClass('open')
  });

  //Button Search
  $(document).on('click', 'a.btn-open-search', (e) => {
    e.preventDefault();
    if (!$(this).hasClass('open')) {
      $('#wrapperSearch').addClass('d-sm-block');
      $(this).addClass('open');
      return;
    }

    $('#wrapperSearch').removeClass('d-sm-block');
    $(this).removeClass('open');
  });


});
