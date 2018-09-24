module.exports.getIndex = (req, res, next) => {
  res.render('index', {
    title: 'Главная страница',
    msg: req.query.msg
  });
};