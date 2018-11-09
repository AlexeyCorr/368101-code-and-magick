'use strict';

(function () {
  var SUCCESS_COLOR = '#1cb34d';
  var ERROR_COLOR = '#ee4830';

  var createPopup = function (title, text, color) {
    var popup = document.createElement('div');
    var popupTitle = document.createElement('h3');
    var popupText = document.createElement('p');

    popup.style.zIndex = 100;
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '15px';
    popup.style.borderRadius = '20px';
    popup.style.width = '300px';
    popup.style.boxShadow = '0 5px 10px 0 #ccc';
    popup.style.textAlign = 'center';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)'; 
    popupTitle.style.fontSize = '22px';
    popupTitle.style.color = color;
    popupTitle.textContent = title;
    popupTitle.style.margin = '0 0 10px';
    popupText.style.fontSize = '16px';
    popupText.textContent = text;
    popupText.style.color = '#000';
    popupText.style.margin = '0';

    popup.appendChild(popupTitle);
    popup.appendChild(popupText);

    return popup;
  };

  var createErrorPopup = function (errorMessage) {
    return createPopup('Произошла ошибка', errorMessage, ERROR_COLOR);
  };

  var createSuccessPopup = function () {
    return createPopup('Поздравляю!', 'Данные были успешно отправлены.', SUCCESS_COLOR);
  };

  var onErrorMessage = function (errorMessage) {
    var errorPopup = createErrorPopup(errorMessage);
    document.querySelector('body').appendChild(errorPopup);
    window.util.delElemTimeout(errorPopup, 'body', 3000);
  };

  var onSuccessMessage = function () {
    var successPopup = createSuccessPopup();
    document.querySelector('body').appendChild(successPopup);
    window.util.delElemTimeout(successPopup, 'body', 3000);
  };

  window.popupMessage = {
    success: onSuccessMessage,
    error: onErrorMessage
  };
})();