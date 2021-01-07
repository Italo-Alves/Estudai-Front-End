import $ from 'jquery';
import 'jquery-mask-plugin';

$(document).ready(function () {
  //Máscaras dos Inputs
  $("#documentNumber").mask("999.999.999-99");

  $('#email').mask("A", {
    translation: {
      "A": { pattern: /[\w@\-.+]/, recursive: true }
    }
  });

  $("#zip").mask("00000-000");

  $("#foneHome").mask("(00) 0000-0000");

  $("#foneMobile").mask("(00) 0000-00009");

  $("#foneMobile").blur(function () {
    if ($(this).val().length === 15) {
      $("#foneMobile").mask("(00) 00000-0009");
    } else {
      $("#foneMobile").mask("(00) 0000-00009");
    }
  });

  $("#foneCompany").mask("(00) 0000-00009");

  $("#foneCompany").blur(function () {
    if ($(this).val().length === 15) {
      $("#foneCompany").mask("(00) 00000-0009");
    } else {
      $("#foneCompany").mask("(00) 0000-00009");
    }
  });
});
