const express = require('express');
const router = express.Router();
const empresasController = require('../controllers/empresasController');

router.post('/', empresasController.createEmpresa);
router.get('/', empresasController.getEmpresas);
router.put('/:id', empresasController.updateEmpresa);
router.delete('/:id', empresasController.deleteEmpresa);

module.exports = router;
