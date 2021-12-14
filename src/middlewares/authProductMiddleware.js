function authProductMiddleware(req,res,next) {
    let loggedUser = req.session.loggedUser;
    console.log ("Entro al authProductMiddleware: " + loggedUser.admin);
    if(loggedUser.admin == true) {
        console.log ("Entro al id del authProductMiddleware: " + loggedUser.id);
        next();
    }else{
        return res.redirect("/users/profile");
    }
}
module.exports = authProductMiddleware;