"use strict";

$(document).ready(function () {

// **** Variables ****
  var numericButtons = $('span').not('.operator');
  var operatorButtons = $('.operator');
  var screenText = $('#screen').text();
  var calcScreen = $('#screen');
  var target;
  console.log(operatorButtons);
// **** Event Listeners ****
$(numericButtons).on('click',textToScreen);
$(operatorButtons).on('click',operatorSwitch);
// **** Functions ****

function textToScreen() {
  console.log(operatorButtons);
  console.log(this);
  var concatText = calcScreen.text() + $(this).text();
  calcScreen.html(concatText);
}

// refactor operatorSwitch later
function operatorSwitch() {
  switch ($(this).text()) {
    case '+':
      calcScreen.html(calcScreen.text() + $(this).text());
      break;
    case '-':
      calcScreen.html(calcScreen.text() + $(this).text());
      break;
    case 'x':
      calcScreen.html(calcScreen.text() + $(this).text());
      break;
    case '÷':
      calcScreen.html(calcScreen.text() + $(this).text());
      break;
    default:
      break;
  }
}




});
