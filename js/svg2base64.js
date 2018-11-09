'use strict';

(function () {
  var DATA_URL_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';

  window.svg2base64 = function (svgElement) {
    // превратить элемент в текст
    var xml = new XMLSerializer().serializeToString(svgElement);
    console.log(xml)
    // закодировать текст в base64
    var svg64 = window.btoa(xml);
    
    return DATA_URL_PREFIX + svg64;
  };
})();
