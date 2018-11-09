'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var moveHendler = setup.querySelector('.upload');
  var shopElem = setup.querySelector('.setup-artifacts-shop');
  var artefactsElem = setup.querySelector('.setup-artifacts');
  var draggedElem = null;
  
  
  moveHendler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
  
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
  
    var dragged = false;
  
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
  
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
  
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
  
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
  
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
  
      if (dragged) {
        var onClickDefault = function (clickEvt) {
          clickEvt.preventDefault();
          moveHendler.removeEventListener('click', onClickDefault);
        };
        moveHendler.addEventListener('click', onClickDefault);
      }
  
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Перетаскивание артефактов
  shopElem.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedElem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  artefactsElem.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artefactsElem.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedElem);
    evt.preventDefault();
  });

  artefactsElem.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'lightgreen';
  });

  artefactsElem.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });
})();
