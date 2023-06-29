const express = require('express');
const router = express.Router();
const nueva = require('../controllers/nuevaController');
const empleado = require('../controllers/empleadoController');

router.use("/nueva", nueva);
router.use("/empleado", empleado);
module.exports = router;