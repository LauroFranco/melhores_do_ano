var express = require('express');
var router = express.Router();
const enqueteController = require('../controllers/enqueteController');
const {body , validationResult} = require('express-validator')
/* GET home page. */

router.get('/', enqueteController.index);

module.exports = router;
