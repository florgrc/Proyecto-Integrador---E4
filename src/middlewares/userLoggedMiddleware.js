const User = require("../models/users")

function userLoggedMiddleware (req,res,next) {
    // console.log('pasé por el MD de UserLogged')
    res.locals.isLogged = false;

    if (req.session && req.session.loggedUser) {
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }
    let emailInCookie = req.cookies.email
    let userFromCookie = User.findByField("email", emailInCookie);

    next()
}

module.exports = userLoggedMiddleware