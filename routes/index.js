var express = require('express');
var router = express.Router();
const enqueteController = require('../controllers/enqueteController');
const {body , validationResult} = require('express-validator');
const auth = require("../middlewares/auth");

/* GET home page. */

router.get('/', enqueteController.index);
router.get('/logar', enqueteController.index);
router.get('/cadastrar', enqueteController.cadastrar);
router.post('/cadastrar', enqueteController.store);
router.post('/logar', enqueteController.efetuarCadastro);

router.get('/home', auth,enqueteController.home);

router.get('/votar',auth, enqueteController.votar);
router.post('/votar',auth, enqueteController.efetuarVoto);

router.get('/ver_resultado',auth, enqueteController.verResultados);

router.get('/criar_competicoes',auth, enqueteController.CriarCompeticoes);
router.post('/criar_competicoes',auth, enqueteController.salvarCompeticoes);
module.exports = router;
