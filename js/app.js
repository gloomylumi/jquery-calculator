"use strict";

$(document).ready(function () {

// **** Variables ****
  var numericButtons = $('span').not('.operator');
  var operatorButtons = $('span').hasClass('operator')
  var screenText = $('#screen').text();
  var calcScreen = $('#screen');
  var target = $(this);

// **** Event Listeners ****
$(numericButtons).on('click',textToScreen);

// **** Functions ****

function textToScreen() {
  console.log(target);
  var concatText = calcScreen.text() + $(this).text();
  calcScreen.html(concatText);
}
// function operatorSwitch() {
//   switch (target.text()) {
//     case '+':
//       textToScreen();
//       break;
//     case '-':
//       textToScreen();
//       break;
//     case 'x':
//       textToScreen();
//       break;
//     case '÷':
//       textToScreen();
//       break;
//     default:
//       break;
//   }
// }




});
