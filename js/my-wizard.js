'use strict';

(function () {
  var form = document.querySelector('.setup-wizard-form');
  var wizardElement = form.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var wizardFireball = form.querySelector('.setup-fireball-wrap');
  var wizardName = form.querySelector('.setup-user-name');

  var wizard = new window.Wizard({name: wizardName.value});

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = wizard.changeCoatColor();
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = wizard.changeEyesColor();
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.backgroundColor = wizard.changeFireballColor();
  });

  wizardName.addEventListener('input', function () {
    wizardName.value = wizard.setName(wizardName.value);
  });
  
  window.myWizard = wizard;
})();