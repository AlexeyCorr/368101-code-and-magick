'use strict';

(function () {
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.myWizard.colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === window.myWizard.colorEyes) {
      rank += 1;
    }
    if (wizard.colorFireball === window.myWizard.colorFireball) {
      rank += 1;
    }

    return rank;
  };

  var sortWizards = function (wizards) {
    var copyArray = wizards.slice(0).sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(right) - wizards.indexOf(left);
      }
      return rankDiff;
    });

    return copyArray;
  };

  window.sortSimilar = sortWizards;
})();
