function authMiddleware(req,res,next) {
    if(req.session.loggedUser != undefined) {
        next();
    }else{
        return res.redirect('register')
    }
}
module.exports = authMiddleware;