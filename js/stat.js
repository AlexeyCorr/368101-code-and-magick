'use strict';

(function () {
  var CLOUD_WIDTH = 340;
  var CLOUD_HEIGHT = 250;
  var CLOUD_X = 180;
  var CLOUD_Y = 20;
  var GAP = 10;
  var BAR_GAP = 50;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  
  var getRandomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  
  var renderRect = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };
  
  var renderText = function (ctx, text, x, y, font) {
    ctx.font = font;
    ctx.fillText(text, x, y);
  };
  
  var getMaxValue = function (arr) {
    var maxValue = arr[0];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  };
  
  var renderBar = function (ctx, names, times, index) {
    var maxTime = getMaxValue(times);
    var valueX = CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * index;
    var valueY = CLOUD_HEIGHT - GAP;
    var valueHeight = (BAR_HEIGHT * times[index] / maxTime);
    var color = (names[index] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0, 255) + ',' + getRandomNumber(0.3, 1) + ')';
  
    ctx.fillStyle = color;
    renderText(ctx, Math.round(times[index]) + ' мс', valueX, valueY - valueHeight - GAP, '16px Mono');
    renderText(ctx, names[index], valueX, valueY + 2 * GAP, '16px Mono');
    renderRect(ctx, valueX, valueY, BAR_WIDTH, -valueHeight, color);
  };
  
  window.renderStatistics = function (ctx, names, times) {
    renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.3)');
    renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
    ctx.fillStyle = '#da641a';
    renderText(ctx, 'Ура! Вы победили!', CLOUD_X + 9 * GAP, CLOUD_Y + 3 * GAP, '22px Mono');
  
    for (var i = 0; i < names.length; i++) {
      renderBar(ctx, names, times, i);
    }
  };  
})();
