const path = require ('path');
const {body} = require('express-validator');
const fs = require ('fs');

const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.body));
    next();
};

const validateRegisterForm =[
    body('name').notEmpty ().withMessage('Debes completar tu nombre'),
    body('lastname').notEmpty ().withMessage('Debes completar tu apellido'),
    body('email').notEmpty ().withMessage('Debes ingresar tu mail').bail ()
    .isEmail ().withMessage ('Debes ingresar una direccion de emial valida'),
    body('password').notEmpty ().withMessage('Debes ingresar una contraseña'),
    body('avatar').custom((value, {req})=>{
        let file = req.file;
        let extensions = ['png', 'jpeg', 'jpg'];
        if(!file) {
            throw new Error ('Debes insertar una imagen)')
        }else{
            let fileExtension=path.extname(file.originalname)
    }
    })
];



module.exports = logUsersLoginMiddleware;