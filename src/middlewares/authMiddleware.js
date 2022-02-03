function authMiddleware(req, res, next) {
    console.log(req.session.loggedUser);
    if (req.session.loggedUser != undefined) {
        next();
    } else {
        return res.redirect('/users/login')
    }
}
module.exports = authMiddleware;