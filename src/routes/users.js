const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const path = require("path");
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const multer = require("multer");
//const upload = multer({storage});

let logUsersLoginMiddleware = require ('../middlewares/logUsersLoginMiddleware');

/*middleware*/
const multerMiddleware = require('../middlewares/multerMiddleware');
const validation = require ('../middlewares/usersRegisterValidation');


const validateLoginForm = [
    body('emailLogin').isEmail ().withMessage('Debes completar el campo de email'),
    body('passwordLogin').notEmpty ().withMessage('Debes completar el campo de password')
];

// Rutas usuarios


// Ruta registro
router.get('/register', usersController.register);
router.post('/register', multerMiddleware, validation, usersController.create);

router.get('/login', usersController.login);
router.post('/login', validateLoginForm,  usersController.loginValidation);

module.exports = router;