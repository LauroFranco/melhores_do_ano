var express = require('express');
var router = express.Router();
const enqueteController = require('../controllers/enqueteController');
const {body , validationResult} = require('express-validator')
/* GET home page. */

router.get('/', enqueteController.index);
router.get('/cadastrar', enqueteController.cadastrar);
router.post('/cadastrar', enqueteController.efetuarCadastro);
router.post('/logar', enqueteController.efetuarCadastro);

module.exports = router;
