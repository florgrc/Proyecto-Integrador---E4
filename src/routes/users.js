const express = require('express');
const router = express.Router();
const { check } = require ('express-validator');
const path = require("path");
const multer = require("multer");
const usersController = require('../controllers/usersController');



/*middleware*/
const multerMiddleware = require('../middlewares/multerMiddleware');
const validation = require ('../middlewares/usersRegisterValidation');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');
const logUsersLoginMiddleware = require ('../middlewares/logUsersLoginMiddleware');//no esta en uso!
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware")

const validateLoginForm = [
    check('email').isEmail ().withMessage('Debes completar el campo de email'),
    check('password').notEmpty ().withMessage('Debes completar el campo de password')
];

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function(req,file,cb){
        cb(null, "image-" + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage})

// Rutas usuarios

//req.session.

// Registro
router.get('/register', guestMiddleware, usersController.register);
router.post('/', upload.single('userAvatar'), usersController.store);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/login',guestMiddleware, usersController.login);
router.post('/login', validateLoginForm,  usersController.loginProccess);

//Logout
router.get('/logout', usersController.logout);

module.exports = router;

