'use strict';

(function () {
  var nameField = document.querySelector('.setup-user-name');

  nameField.addEventListener('invalid', function () {
    if (nameField.validity.tooShort) {
      nameField.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (nameField.validity.tooLong) {
      nameField.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (nameField.validity.valueMissing) {
      nameField.setCustomValidity('Обязательное поле');
    } else {
      nameField.setCustomValidity('');
    }
  });
  nameField.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
