function authMiddleware(req,res,next) {
    console.log ("Entro al authMiddleware: " + req.session.loggedUser);
    if(req.session.loggedUser != undefined) {
        console.log ("Entro al id del authMiddleware: " + req.session.loggedUser);
        next();
    }else{
        return res.redirect('login')
    }
}
module.exports = authMiddleware;