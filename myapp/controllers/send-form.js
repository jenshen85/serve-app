const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

module.exports.getData = (req, res, next) => {
  let form = new formidable.IncomingForm();
  let upload = 'public/assets/img';
  let fileName = path.join(upload, 'about-photo.png');
  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.redirect('/?msg=Не удалось загрузить картинку');
    }
    if (!fields.name) {
      fs.unlink(files.image.path);
      return res.redirect('/?msg=Не указано описание картинки!');
    }
    if (files.image.size === 0) {
      return res.redirect('/?msg=Нет изображения!');
    }
    
    form.uploadDir = path.join(process.cwd(), upload);
    fs.rename(files.image.path, fileName, function (err) {
      if (err) {
        console.log(err);
        fs.unlink(fileName);
        fs.rename(files.image.path, fileName);
      }
      res.redirect('/?msg=Картинка успешно загружена');
    });
  })
};