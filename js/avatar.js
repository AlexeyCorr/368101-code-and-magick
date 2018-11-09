'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png', 'svg'];
  var COLOR_ACTIVE_BG = 'lightgreen';

  var dropZone = document.querySelector('.upload');
  var fileChooser = dropZone.querySelector('input[type=file]');
  var preview = dropZone.querySelector('.setup-user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    console.log(file);

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });

  document.addEventListener('dragover', function (evt) {
    debugger;
    evt.preventDefault();
  }); 

  dropZone.addEventListener('drop', function (evt) {
    evt.preventDefault();
    dropZone.style.backgroundColor = '';
    fileChooser.files = evt.dataTransfer.files;
  });

  dropZone.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    dropZone.style.backgroundColor = COLOR_ACTIVE_BG;
  });

  dropZone.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    dropZone.style.backgroundColor = '';
  });
})();