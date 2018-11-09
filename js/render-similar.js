'use strict';

(function () {
  var MAX_ITEM = 4;
  var wizards = [];
  var setup = document.querySelector('.setup');
  var similarList = setup.querySelector('.setup-similar-list');
  var similarTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderSimilarItem = function (item) {
    var similarItem = similarTemplate.cloneNode(true);
    similarItem.querySelector('.setup-similar-label').textContent = item.name;
    similarItem.querySelector('.wizard-coat').style.fill = item.colorCoat;
    similarItem.querySelector('.wizard-eyes').style.fill = item.colorEyes;
    item.artifacts.forEach(function (it, i) {
      if (item.artifacts.lastIndexOf(it) !== item.artifacts.length - 1) {
        similarItem.title += (i + 1) + '. ' + it.name.toUpperCase() + ': ' + it.description + ', ';
      } else {
        similarItem.title += (i + 1) + '. ' + it.name.toUpperCase() + ': ' + it.description + '.';
      }
    });
    

    return similarItem;
  };

  var drawSimilarItem = function (items) {;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_ITEM; i++) {
      fragment.appendChild(renderSimilarItem(items[i]));
    }
    similarList.appendChild(fragment);
  };

  var update = function () {
    similarList.innerHTML = '';
    drawSimilarItem(window.sortSimilar(wizards));
  };

  window.myWizard.onChange = function () {
    window.util.debounce(update);
  };

  var successHeandler = function (data) {
    wizards = data;
    drawSimilarItem(wizards);
  };

  var loadData = function () {
    window.backend.load(successHeandler, window.popupMessage.error);
  };

  loadData();

  window.renderSimilar = update;
})();
