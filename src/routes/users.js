const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const path = require("path");
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');

let logUsersLoginMiddleware = require ('../middlewares/logUsersLoginMiddleware');

// Validaciones

const validateRegisterForm = [
    body('nameRegister').notEmpty ().withMessage('Debes completar el campo de nombre'),
    body('emailRegister').isEmail ().withMessage('Debes completar el campo de email'),
    body('passwordRegister').notEmpty ().withMessage('Debes completar el campo de password')
];

const validateLoginForm = [
    body('emailLogin').isEmail ().withMessage('Debes completar el campo de email'),
    body('passwordLogin').notEmpty ().withMessage('Debes completar el campo de password')
];

// Rutas

router.get('/register', usersController.register);
router.post('users/register', usersController.create);
router.get('/login', usersController.login);
router.post('/login', validateLoginForm,  usersController.loginValidation);

module.exports = router;