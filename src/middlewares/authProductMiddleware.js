function authProductMiddleware(req,res,next) {
    if(req.session.loggedUser != undefined) {
        if(req.session.loggedUser.type_id === 2) {
            next();
        }
    }else{
        return res.redirect("/users/profile");
    }
}
module.exports = authProductMiddleware;