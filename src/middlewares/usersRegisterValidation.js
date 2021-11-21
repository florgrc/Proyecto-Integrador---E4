const path = require("path");
const {body} = require('express-validator');
const fs = require ('fs');

const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.body));
    next();
};

const validateRegisterForm =[
    body('firstname').notEmpty ().withMessage('Debes completar tu nombre'),
    body('lastname').notEmpty ().withMessage('Debes completar tu apellido'),
    body('email').notEmpty ().withMessage('Debes ingresar tu mail').bail ()
    .isEmail ().withMessage ('Debes ingresar una direccion de email valida').bail,
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({min:8}).withMessage('la contraseña debe tener 8 caracteres'),
    body('repassword').custom((value,{req})=>{
        if(value != req.body.password){
            throw new Error('Las contraseñas deben coincidir');
        }
        return true;
    })
]
 module.exports = validateRegisterForm;
    

