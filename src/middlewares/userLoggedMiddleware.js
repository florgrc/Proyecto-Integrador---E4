const User = require("../models/users")

function userLoggedMiddleware (req,res,next) {
 
    res.locals.isLogged = false;

    if (req.session && req.session.loggedUser) {
        res.locals.isLogged = true
        console.log(res.locals);
    }
    console.log(res.locals);
    let emailInCookie = req.cookies.email
    let userFromCookie = User.findByField("email", emailInCookie);

    next()
}

module.exports = userLoggedMiddleware