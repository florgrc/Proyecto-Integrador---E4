const fs = require ('fs');
const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.body));
    next();
};

const validateRegisterForm = [
    body('nameRegister').notEmpty ().withMessage('Debes completar el campo de nombre'),
    body('emailRegister').isEmail ().withMessage('Debes completar el campo de email'),
    body('passwordRegister').notEmpty ().withMessage('Debes completar el campo de password')
];

const validateLoginForm = [
    body('nameLogin').notEmpty ().withMessage('Debes completar el campo de nombre'),
    body('emailLogin').isEmail ().withMessage('Debes completar el campo de email'),
    body('passwordLogin').notEmpty ().withMessage('Debes completar el campo de password')
];


module.exports = logUsersLoginMiddleware;