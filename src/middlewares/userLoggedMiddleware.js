const User = require("../models/users")

function userLoggedMiddleware (req,res,next) {
 
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        req.locals.isLogged = true
    }

    let emailInCookie = req.cookies.email
    let userFromCookie = User.findByField("email", emailInCookie);

    console.log(userFromCookie)

    next()
}

module.exports = userLoggedMiddleware