function authProductMiddleware(req,res,next) {
    let loggedUser = req.session.loggedUser;
    if(loggedUser.admin == true) {
        next();
    }else{
        return res.redirect("/users/profile");
    }
}
module.exports = authProductMiddleware;