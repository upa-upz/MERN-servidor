// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Iniciar Sesion

// api/auth
router.post('/', 
    authController.autenticarUsuarios
);

router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;
