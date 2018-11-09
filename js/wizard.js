'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)', 
    'rgb(241, 43, 107)', 
    'rgb(146, 100, 161)', 
    'rgb(56, 159, 117)', 
    'rgb(215, 210, 55)', 
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black', 
    'red', 
    'blue', 
    'yellow', 
    'green'
  ];
  var FIREBALL_COLOR = [
    '#ee4830', 
    '#30a8ee', 
    '#5ce6c0', 
    '#e848d5', 
    '#e6e848'
  ];

  var Wizard = function (data) {
    this.name = data.name;
    this.colorCoat = data.colorCoat;
    this.colorEyes = data.colorEyes;
    this.colorFireball = data.colorFireball;
  };

  Wizard.prototype = {
    setName: function (name) {
      if (!name) throw new Error('Имя не задано');
      if (name.length < 2) throw new Error('Слишком короткое именя для мага: ' + name);
      if (name.length > 30) throw new Error('Недопустимое значение имени мага: ' + name);
      this.name = name;
      this.onChange(this);
      return name;
    },
    changeCoatColor: function () {
      var newColor = window.util.getRandomElement(COAT_COLORS);
      this.colorCoat = newColor;
      this.onChange(this);
      return newColor;
    },
    changeEyesColor: function () {
      var newColor = window.util.getRandomElement(EYES_COLORS);
      this.colorEyes = newColor;
      this.onChange(this);
      return newColor;
    },
    changeFireballColor: function () {
      var newColor = window.util.getRandomElement(FIREBALL_COLOR);
      this.colorFireball = newColor;
      this.onChange(this);
      return newColor;
    },
    onChange: function (wizard) {
      return wizard;
    }
  };

  window.Wizard = Wizard;
})();
