import $ from 'jquery';
import 'jquery-validation';
import Swal from 'sweetalert2';

$(document).ready(function () {
  $("#documentNumber").blur(function () {
    var valor = $(this).val();
    if (valor !== '') {
      var validaCPF = /^([0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}[-]?[0-9]{2})$/;
      if (validaCPF.test(valor)) {
        if (new validateCPF().validate(valor)) {
          $("#birthday").focus();
        } else {
          $(this).val('');
          $(this).focus();
          showError("CPF inválido");
        }
      } else {
        $(this).val('');
        $(this).focus();
        showInfo("CPF precisar ter 11 dígitos");
      }
    } else {
      $(this).val('');
    }
  });

  $("#birthday").blur(function () {
    var date = document.getElementById("birthday");
    if (date.value !== '') {
      //obter array com [ano,mes,dia] através de split("-") e convertendo em numero com Map
      var nasc = date.value.split("-").map(Number);
      //construir data 18 anos a seguir a data dada pelo usuario
      var depois16Anos = new Date(nasc[0] + 16, nasc[1] - 1, nasc[2]);
      var now = new Date();

      if (depois16Anos <= now) {
        return true;
      } else {
        $(this).focus();
        showWarning("16 anos no mínimo para fazer o cadastro");
        $(this).val('');
      }
    } else {
      $(this).val('');
    }
  });

  //Função de Limpa o campo do CEP
  function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#address").val("");
    $("#neighborhood").val("");
    $("#city").val("");
    $("#addressDetails").val("");
    $("#state").val("");
    $("#zip").val("");
  }

  //Quando o campo cep perde o foco.
   $("#zip").blur(function() {

    //Nova variável "cep" somente com digito e sem espaço.
    var zip = $(this).val().replace('.', '')
      .replace('.', '')
      .replace('-', '')
      .trim();

    //Verifica se campo zip possui valor informado.
    if (zip !== "") {

      //Expressão regular para validar o zip.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(zip)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        $("#address").val("...");
        $("#neighborhood").val("...");
        $("#city").val("...");
        $("#addressDetails").val("...");
        $("#state").val("...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/" + zip + "/json/?callback=?", function (response) {

          if (!("erro" in response)) {
            //Atualiza os campos com os valores da consulta.
            $("#address").val(response.logradouro);
            $("#neighborhood").val(response.bairro);
            $("#city").val(response.localidade);
            $("#addressDetails").val(response.complemento);
            $("#state").val(response.uf);
            $("#number").focus();
          } //end if.
          else {
            //CEP pesquisado não foi encontrado.
            limpa_formulário_cep();
            $("#zip").focus();
            showError("CEP não encontrado");
          }
        });
      } //end if.
      else {
        //formato do cep é inválido.
        limpa_formulário_cep();
        $("#zip").focus();
        showWarning("Formato de CEP inválido");

      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  });

  $("#btn-cadastrar").click(function (e) {
    var password = $("#password").val();
    var confirmPassword = $("#password_confirm").val();

    if (password !== confirmPassword) {
      showError("Senhas não coincidem")
      e.preventDefault();
    } else {
      return true;
    }
  });

});

function showError(text) {
  Swal.fire({
    title: 'Oops!',
    text: text,
    padding: '2rem',
    allowOutsideClick: false,
    icon: 'error',
    confirmButtonText: 'OK'
  });
}

function showWarning(text) {
  Swal.fire({
    title: 'Oops!',
    text: text,
    padding: '2rem',
    allowOutsideClick: false,
    icon: 'warning',
    confirmButtonText: 'OK'
  });
}

function showInfo(text) {
  Swal.fire({
    title: 'Oops!',
    text: text,
    padding: '2rem',
    allowOutsideClick: false,
    icon: 'info',
    confirmButtonText: 'OK'
  });
}

// function showSuccess(text) {
//   Swal.fire({
//     title: 'Sucesso',
//     text: text,
//     padding: '2rem',
//     allowOutsideClick: false,
//     icon: 'success',
//     confirmButtonText: 'OK'
//   });
// }

export default class validateCPF {
  constructor() {
    this.validate = function (cpf) {
      var sum = 0;
      var remainder;

      cpf = cpf.replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .trim();

      var allEqual = true;
      for (var i = 0; i < cpf.length - 1; i++) {
        if (cpf[i] !== cpf[i + 1])
          allEqual = false;
      }
      if (allEqual)
        cpf.preventDefault();

      for (i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      remainder = (sum * 10) % 11;

      if ((remainder === 10) || (remainder === 11))
        remainder = 0;
      if (remainder !== parseInt(cpf.substring(9, 10)))
        return false;

      sum = 0;
      for (i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); remainder = (sum * 10) % 11;

      if ((remainder === 10) || (remainder === 11))
        remainder = 0;
      if (remainder !== parseInt(cpf.substring(10, 11)))
        cpf.preventDefault();

      return true;
    };
  }
}

$(function ($) {
  $(document).on('keypress', '#zip, #documentNumber', function (e) {
    var key = (window.event) ? e.keyCode : e.which;
    if ((key > 47 && key < 58)) {
      return true;

    } else {
      return (key === 8 || key === 0) ? true : false;
    }
  });
});

$(function ($) {
  $(document).on('keypress', '#firstName', function (e) {
    var firstName = $(this).val();
    var RegExpression = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
    if (firstName !== '') {
      if (RegExpression.test(firstName)) {
        return true;

      } else {
        e.preventDefault();
        $(this).val('');
        showWarning('Nome incorreto, apenas letras');
      }
    } else {
      $(this).val('');
      $(this).focus();
    }

  });

  $(document).on('keypress', '#lastName', function (e) {
    var lastName = $(this).val();
    var RegExpression = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
    if (lastName !== '') {
      if (RegExpression.test(lastName)) {
        return true;

      } else {
        e.preventDefault();
        $(this).val('');
        showWarning('Sobrenome incorreto, apenas letras');
      }
    } else {
      $(this).val('');
      $(this).focus();
    }
  });
});
