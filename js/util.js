'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 300;
  var lastTimeout = null;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.stopPropagation();
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    delElemTimeout: function (element, field, time) {
      setTimeout(function () {
        if (element) {
          document.querySelector(field).removeChild(element);
        }
      }, time);
    },
    debounce: function (callback) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(callback, DEBOUNCE_INTERVAL);
    },
    getRandomElement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    }
  };
})();
