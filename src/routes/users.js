const express = require('express');
const router = express.Router();
const { check } = require ('express-validator');
const path = require("path");
const multer = require("multer");
const usersController = require('../controllers/usersController');



/*middleware*/
const multerMiddleware = require('../middlewares/multerMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware")
const usersRegisterValidation = require("../middlewares/usersRegisterValidation")

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

// Base Usuarios
router.get('/', usersController.user);
// Registro
router.get('/register', guestMiddleware, usersController.register);
router.post('/', upload.single('userAvatar'), usersRegisterValidation, usersController.store);

router.get('/profile', authMiddleware, usersController.profile);


router.get('/login',guestMiddleware, usersController.login);
router.post('/login', validateLoginForm,  usersController.loginProccess); 

// Modificar usuario
router.get('/edit/:id', authMiddleware, usersController.edit);
router.put('/edit/:id', upload.single('userAvatar'), usersController.update);
router.delete("/edit/delete/:id", usersController.delete); 

//Logout
router.get('/logout', usersController.logout);

module.exports = router;

