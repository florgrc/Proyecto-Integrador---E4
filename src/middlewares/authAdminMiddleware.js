function authAdminMiddleware(req, res, next) {
    if (req.session.loggedUser == undefined || req.session.loggedUser.type_id == 2) {
        return res.redirect("/401");
    }
    next()
}
module.exports = authAdminMiddleware;