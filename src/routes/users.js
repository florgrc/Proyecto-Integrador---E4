const express = require('express');
const router = express.Router();
const { body } = require ('express-validator');
const path = require("path");
const multer = require("multer");
const usersController = require('../controllers/usersController');



/*middleware*/
const multerMiddleware = require('../middlewares/multerMiddleware');
const validation = require ('../middlewares/usersRegisterValidation');
const guestmiddleware = require ('../middlewares/guestMiddleware');
const logUsersLoginMiddleware = require ('../middlewares/logUsersLoginMiddleware');


const validateLoginForm = [
    body('email').isEmail ().withMessage('Debes completar el campo de email'),
    body('password').notEmpty ().withMessage('Debes completar el campo de password')
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


// Registro
router.get('/register', usersController.register);
router.post('/', upload.single('userAvatar'), usersController.store);


router.get('/login', usersController.login);
router.post('/login', validateLoginForm,  usersController.loginValidation);

module.exports = router;

