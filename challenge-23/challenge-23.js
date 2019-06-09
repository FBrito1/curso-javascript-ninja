(function(win, doc) {
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  'use strict';
  let $input = doc.querySelector('input[type=text]');
  let $button0 = doc.querySelector('[data-js="btn-0"]');
  let $button1 = doc.querySelector('[data-js="btn-1"]');
  let $button2 = doc.querySelector('[data-js="btn-2"]');
  let $button3 = doc.querySelector('[data-js="btn-3"]');
  let $button4 = doc.querySelector('[data-js="btn-4"]');
  let $button5 = doc.querySelector('[data-js="btn-5"]');
  let $button6 = doc.querySelector('[data-js="btn-6"]');
  let $button7 = doc.querySelector('[data-js="btn-7"]');
  let $button8 = doc.querySelector('[data-js="btn-8"]');
  let $button9 = doc.querySelector('[data-js="btn-9"]');
  let $buttonPlus = doc.querySelector('[data-js="btn-sum"]');
  let $buttonSubt = doc.querySelector('[data-js="btn-subt"]');
  let $buttonDiv = doc.querySelector('[data-js="btn-div"]');
  let $buttonMult = doc.querySelector('[data-js="btn-mult"]');
  let $buttonEqual = doc.querySelector('[data-js="btn-equal"]');
  let $buttonCE = doc.querySelector('[data-js="btn-ce"]');


  $button0.addEventListener('click', function() {
    $input.value += $button0.value;
  });

  $button1.addEventListener('click', function() {
    $input.value += $button1.value;
  });

  $button2.addEventListener('click', function() {
    $input.value += $button2.value;
  });

  $button3.addEventListener('click', function() {
    $input.value += $button3.value;
  });

  $button4.addEventListener('click', function() {
    $input.value += $button4.value;
  });

  $button5.addEventListener('click', function() {
    $input.value += $button5.value;
  });

  $button6.addEventListener('click', function() {
    $input.value += $button6.value;
  });

  $button7.addEventListener('click', function() {
    $input.value += $button7.value;
  });

  $button8.addEventListener('click', function() {
    $input.value += $button8.value;
  });

  $button9.addEventListener('click', function() {
    $input.value += $button9.value;
  });

  $buttonPlus.addEventListener('click', function() {
    if(checkLastDigit($input.value)) {
      $input.value = cutLastOperation($input.value);
    }
    $input.value += '+';
  });

  $buttonSubt.addEventListener('click', function() {
    if(checkLastDigit($input.value)) {
      $input.value = cutLastOperation($input.value);
    }
    $input.value += '-';
  });

  $buttonDiv.addEventListener('click', function() {
    if(checkLastDigit($input.value)) {
      $input.value = cutLastOperation($input.value);
    }
    $input.value += '/';

  });

  $buttonMult.addEventListener('click', function() {
    if(checkLastDigit($input.value)) {
      $input.value = cutLastOperation($input.value);

    }
    $input.value += '*';

  });

  $buttonEqual.addEventListener('click', function() {
     $input.value = calculate($input.value);
  });

  $buttonCE.addEventListener('click', function() {
    $input.value = '';
  });

  function checkLastDigit (str) {
    let strLength = str.length;
    let strArr = str.split('');
    let lastCaracter = strArr[strLength - 1];

    switch (lastCaracter) {
      case '+':
        return true;
      case '-':
        return true;
      case '/':
        return true;
      case '*':
        return true;
      default:
        return false;
    }
  };

  function cutLastOperation (input) {

    return input.slice(0, input.length-1);

  };

  function calculate (values) {

    return math.eval(values);

  };


})(window, document);


