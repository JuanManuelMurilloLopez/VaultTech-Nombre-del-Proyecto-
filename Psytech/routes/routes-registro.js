const express = require('express');
const router = express.Router();

const path = require('path');
const controller = require('../controllers/controller-registro');

//Pestaña de Log In
router.get('/login', controller.get_login);

//Rutas de registros de Psicologos y Coordinadores
router.get('/psicologos-registrados', controller.get_psicologos_registrados);

router.get('/registrar-psicologos', controller.get_registrar_psicologos);

router.get('/editar-psicologos', controller.get_editar_psicologos);

router.get('/coordinador-registrados', controller.get_coordinador_registrados);

router.get('/registrar-coordinador', controller.get_registrar_coordinador);

router.get('/editar-coordinador', controller.get_editar_coordinador);

module.exports = router;