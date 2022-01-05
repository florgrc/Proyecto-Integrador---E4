const path = require("path");
const {check} = require('express-validator');
const fs = require ('fs');

const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.check));
    next();
};

const usersRegisterValidation =[
    check('firstname')
    .notEmpty().withMessage('Debes completar tu nombre').bail()
    .isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    check('lastname')
    .notEmpty().withMessage('Debes completar tu apellido').bail()
    .isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    check('email')
    .notEmpty().withMessage('Debes ingresar tu mail').bail()
    .isEmail().withMessage ('Debes ingresar una direccion de email válida'),
    check('password')
    .notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('repassword')
    .notEmpty().withMessage('Debes repetir la contraseña').bail()
    /*.custom((value,{req})=>{
        if(value != req.body.password){
            throw new Error('Las contraseñas deben coincidir');
        }
        return true;
    })*/
]
 module.exports = usersRegisterValidation;
    

