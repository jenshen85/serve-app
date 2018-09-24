var express = require('express');
var router = express.Router();

const ctrlHome = require('../controllers/home-page');
const ctrlForm = require('../controllers/send-form');

router.get('/', ctrlHome.getIndex);
router.post('/sendform', ctrlForm.getData);

module.exports = router;
