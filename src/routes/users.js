const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const path = require("path");
const usersController = require('../controllers/usersController');

// Validaciones

const validateCreateForm = [
    body('name').notEmpty ().withMessage('Debes completar el campo de nombre'),
    body('email').isEmail ().withMessage('Debes completar el campo de email'),
    body('password').notEmpty ().withMessage('Debes completar el campo de password')
];

const validateLoginForm = [
    body('name').notEmpty ().withMessage('Debes completar el campo de nombre'),
    body('email').isEmail ().withMessage('Debes completar el campo de email'),
    body('password').notEmpty ().withMessage('Debes completar el campo de password')
];

// Rutas

router.get('/register', usersController.register);
router.post('users/register',  validateCreateForm, usersController.create);
router.get('/login', validateLoginForm, usersController.login);

module.exports = router;