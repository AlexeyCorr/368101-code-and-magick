'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var setupClose = setup.querySelector('.setup-close');
  var similarBlock = setup.querySelector('.setup-similar');
  
  // Функция закрутия окна по нажатию на ESC
  var onPopupEscDown = function (evt) {
    window.util.isEscEvent(evt, onPopupClose);
  };
  // Функция открытия окна
  var onPopupOpen = function () {
    setup.classList.remove('hidden');
    similarBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscDown);
  };
  // Функция закрытия окна
  var onPopupClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscDown);
  };
  // Открытие окна
  setupOpen.addEventListener('click', function () {
    onPopupOpen();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, onPopupOpen);
  });
  // Закрытие окна
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, onPopupClose);
  });
  setupClose.addEventListener('click', function () {
    onPopupClose();
  });

  // Отправка формы
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var wizardCopy = document.querySelector('svg').cloneNode(true);
    
    wizardCopy.querySelector('#wizard-coat').style.fill = window.myWizard.colorCoat;
    wizardCopy.querySelector('#wizard-eyes').style.fill = window.myWizard.colorEyes;

    var wizardBase64Right = window.svg2base64(wizardCopy);

    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');
    var wizardBase64Left = window.svg2base64(wizardCopy);
    
    window.backend.save(new FormData(form), window.popupMessage.success, window.popupMessage.error);
    onPopupClose();
    window.restartGame(wizardBase64Right, wizardBase64Left);
  });
})();
