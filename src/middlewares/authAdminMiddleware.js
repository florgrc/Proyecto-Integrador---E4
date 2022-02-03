function authAdminMiddleware(req, res, next) {
    if (req.session.loggedUser == undefined || req.session.loggedUser.typeId === 2) {
        return res.redirect("/401");
    }
    next()
}
module.exports = authAdminMiddleware;