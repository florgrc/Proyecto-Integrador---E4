const fs = require ('fs');
const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.body));
    next();
    /* Empieza REMEMBER USER*/
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField("email", emailInCookie);
    
    const validateLoginForm = [
        body('emailLogin').isEmail ().withMessage('Debes completar el campo de email'),
        body('passwordLogin').notEmpty ().withMessage('Debes completar el campo de password')
    ];

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    
    /* Termina REMEMBER USER*/
};


module.exports = logUsersLoginMiddleware;