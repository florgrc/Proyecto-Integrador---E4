const fs = require ('fs');
const { stringify } = require('querystring');

function logUsersLoginMiddleware (req,res,next) {
    fs.appendFileSync  ('logUsersLogin.txt', 'Se ingreso en la página: ' + req.url  + stringify (req.body));
    next();
    /* Empieza REMEMBER USER*/
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField("email", emailInCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }
    /* Termina REMEMBER USER*/
};


module.exports = logUsersLoginMiddleware;