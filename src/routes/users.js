const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const path = require("path");
const multer = require ('multer');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');

let logUsersLoginMiddleware = require ('../middlewares/logUsersLoginMiddleware');

//multer
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage})
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

// Rutas usuarios
router.get('/', usersController.home);

// Ruta registro
router.get('/register', usersController.register);
router.post('/users/register', upload.single('userAvatar'), usersController.create);

router.get('/login', usersController.login);
router.post('/login', validateLoginForm,  usersController.loginValidation);

module.exports = router;