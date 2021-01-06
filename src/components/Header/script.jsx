import $ from 'jquery';

$(document).ready(function () {
    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    });

    $('#navToggle').click(function (){
      $('.icon').toggleClass('open');
    })

    //Button Search
    $(document).on('click', 'a.btn-open-search', function(e){
        e.preventDefault();
        if(!$(this).hasClass('open')){
          $('#wrapperSearch').addClass('d-sm-block');
          $(this).addClass('open');
          return;
        }
        $('#wrapperSearch').removeClass('d-sm-block');
        $(this).removeClass('open');
      })
});

window.onload = function () {
    console.log("window is loaded");
};
