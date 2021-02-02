// import $ from 'jquery';
import Swal from 'sweetalert2';

// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(this).scrollTop() > 50){
//       $('#toTopButton').fadeIn();
//     }else{
//       $('#toTopButton').fadeOut();
//     }
//   });

//   $('#toTopButton').click(function(){
//     $('html, body').animate({scrollTop: 0}, 500);
//     return false;
//   });
// });

export function showWarning(text) {
  Swal.fire({
    title: 'Oops!',
    text: text,
    padding: '2rem',
    allowOutsideClick: false,
    icon: 'warning',
    confirmButtonText: 'OK'
  });
}

export function showError(text) {
  Swal.fire({
    title: 'Oops!',
    text: text,
    padding: '2rem',
    allowOutsideClick: false,
    icon: 'error',
    confirmButtonText: 'OK'
  }).then(() => {
    document.getElementById("address.neighborhood").focus();
  })
}

export function loginSucess(text) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: text
  })
}
