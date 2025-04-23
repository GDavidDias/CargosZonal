const {Router} = require('express');

const{
    getAllInstancias,
} = require('../controllers/instancias.controllers');

const router = Router();

/**Trae todo el listado de Instancias */
router.get('/allinstancias', getAllInstancias);

module.exports = router;